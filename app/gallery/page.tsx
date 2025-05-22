"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { createClient } from "pexels";

interface Photo {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  photographer: string;
  photographerUrl: string;
}

// Separate loading component
const LoadingState = () => (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        Loading gallery...
      </p>
    </div>
  </div>
);

// Separate error component
const ErrorState = ({ error, retry }: { error: string; retry: () => void }) => (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 flex items-center justify-center">
    <div className="text-center">
      <p className="text-red-500 mb-4">Error: {error}</p>
      <button
        onClick={retry}
        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
      >
        Try Again
      </button>
    </div>
  </div>
);

// Photo card with lazy loading
const PhotoCard = ({ photo, priority = false }: { photo: Photo, priority?: boolean }) => (
  <div
    key={photo.id}
    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105"
  >
    <div className="relative aspect-square">
      <Image
        src={photo.image}
        alt={photo.title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        loading={priority ? "eager" : "lazy"}
        priority={priority}
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{photo.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {photo.description}
      </p>
    </div>
  </div>
);

// Main gallery component
export default function Gallery() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [initialLoad, setInitialLoad] = useState(true);
  const perPage = 20; // Reduced from 80 to improve initial load time

  // Fetch photos with pagination
  const fetchPhotos = useCallback(async (pageNum: number, isInitial: boolean = false) => {
    if (isInitial) setLoading(true);
    setError(null);
    
    try {
      const client = createClient(
        process.env.NEXT_PUBLIC_PEXELS_API_KEY || ""
      );
      
      const response = await client.photos.search({
        query: "ai generated art",
        per_page: perPage,
        page: pageNum,
      });

      if ("error" in response) {
        throw new Error(response.error);
      }

      const formattedPhotos = response.photos.map((photo) => ({
        id: photo.id,
        title: photo.alt || "Untitled",
        description: photo.alt || "No description available",
        image: photo.src.large2x,
        tags: ["Abstract", "Digital", "Art"],
        photographer: photo.photographer,
        photographerUrl: photo.photographer_url,
      }));

      if (pageNum === 1) {
        setPhotos(formattedPhotos);
      } else {
        setPhotos(prev => [...prev, ...formattedPhotos]);
      }

      // Check if we have more photos to load
      setHasMore(formattedPhotos.length === perPage);
    } catch (err) {
      console.error("Gallery fetch error:", err);
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
      if (isInitial) setInitialLoad(false);
    }
  }, []);

  // Initial load
  useEffect(() => {
    fetchPhotos(1, true);
  }, [fetchPhotos]);

  // Handle load more
  const handleLoadMore = useCallback(() => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchPhotos(nextPage);
  }, [page, fetchPhotos]);

  if (loading && initialLoad) {
    return <LoadingState />;
  }

  if (error && photos.length === 0) {
    return <ErrorState error={error} retry={() => fetchPhotos(1, true)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Gallery</h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Explore our collection of AI-generated artwork
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <PhotoCard 
              key={photo.id} 
              photo={photo} 
              priority={index < 6} // Only prioritize first 6 images
            />
          ))}
        </div>

        {error && (
          <div className="text-center mt-8 text-red-500">
            Error loading more images: {error}
          </div>
        )}

        {hasMore && (
          <div className="mt-12 text-center">
            <button
              onClick={handleLoadMore}
              disabled={loading}
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
            >
              {loading ? (
                <span className="flex items-center">
                  <span className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Loading...
                </span>
              ) : (
                "Load More"
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
