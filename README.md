1. Font Optimization
Where: app/layout.tsx
What: Replaced Google Fonts massive import with Next.js font optimization
Why: Reduced layout shifts (CLS), improved page load performance, and eliminated render-blocking resources
2. Component Code Splitting
Where: app/page.tsx
What: Implemented dynamic imports for non-critical components
Why: more optimized load 
3. Image Optimization
Where: Multiple components (Gallery.tsx, BlogPostCard.tsx, GeneratedImage.tsx)
What: Replaced standard <img> tags with Next.js <Image> component
Why: Added automatic image optimization, proper sizing, and modern formats
4. Data Fetching Optimization
Where: app/gallery/page.tsx
What: Implemented pagination and optimized the image loading
Why: Reduced initial data fetch from 80 images to 20, with progressive loading
5. Server Component & Static Generation
Where: app/blog/page.tsx
What: Converted to a server component with static generation
Why: Improved SEO and performance by pre-rendering content
6. Performance-Optimized Components
Where: app/components/FontShowcase.tsx, app/components/PromptInput.tsx
What: Implemented memoization, debouncing, and lazy loading
Why: Reduced unnecessary re-renders and improved user interaction responsiveness
7. Next.js Configuration
Where: next.config.js
What: Added  configuration for image optimization, caching, and bundle optimization
Why: Improved overall site performance, search engine optimization, and user experience
8. Multiple Config Files
Where: Root of the directory
What: Remove multiple redundant config files like next.config.mjs and postcss.config.mjs
Why: Multiple config files may cause confusion to both the developer and compiler/bundler
9. Gallery Images Fetching
Where: Gallery page
What: Added pexels api key and implemented proper fetching of gallery images, also made it mobile responsive
10. Updated AppBar/Header
Where: Appbar.tsx
What: Added missing menu items, implemented hamburger menu for mobile devices and updated styling 
Why: To make it more user friendly
11. Pricing page styling
Where: Pricing page
What: Updated pricing cards layout from flex to grid
Why: To display hidden pricing cards because of incorrect layout
12. Input Areas Styling
Where: PromptInput.tsx , Newsletter.tsx
What: Updated styling of input areas
Why: The font color and other styling was inconsistent with the rest of the page
