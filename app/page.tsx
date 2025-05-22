import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Hero from "./components/Hero";

// Dynamically import components 
const Features = dynamic(() => import('./components/Features'), {
  ssr: true,
});

const FontShowcase = dynamic(() => import('./components/FontShowcase'), {
  ssr: false,
});

const Gallery = dynamic(() => import('./components/Gallery'), {
  ssr: true,
});

const features = [
  {
    title: "AI-Powered Generation",
    description:
      "Create unique illustrations and logos in seconds using advanced AI technology",
  },
  {
    title: "Professional Quality",
    description:
      "Get high-resolution, print-ready artwork suitable for any project",
  },
  {
    title: "Easy to Use",
    description:
      "Simple text prompts transform into beautiful artwork with just a few clicks",
  },
];

const LoadingFallback = ({ className = "" }: { className?: string }) => (
  <div className={`py-20 ${className}`}>
    <div className="container mx-auto px-4">
      <div className="h-60 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg"></div>
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Suspense fallback={<LoadingFallback className="bg-white dark:bg-gray-900" />}>
        <Features features={features} />
      </Suspense>
      <Suspense fallback={<LoadingFallback className="bg-gray-50 dark:bg-gray-800" />}>
        <FontShowcase />
      </Suspense>
      <Suspense fallback={<LoadingFallback className="bg-gray-50 dark:bg-gray-800" />}>
        <Gallery />
      </Suspense>
    </div>
  );
}
