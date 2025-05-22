import BlogPostCard from "../components/BlogPostCard";
import Newsletter from "../components/Newsletter";
import { Suspense } from "react";

// This is a server component
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

// Extract blog posts data to a separate module
import { blogPosts } from "../data/blogPosts";

// Loading state component
const BlogLoading = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[1, 2, 3, 4, 5, 6].map((index) => (
      <div key={index} className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden animate-pulse">
        <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
        <div className="p-6">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
    ))}
  </div>
);

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Blog</h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Latest insights and updates about AI art generation
        </p>

        <Suspense fallback={<BlogLoading />}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogPostCard key={index} post={post} />
            ))}
          </div>
        </Suspense>

        <Newsletter />
      </div>
    </div>
  );
}
