"use client";

import { useEffect, useState, memo } from 'react';

// Initialize with a smaller set of fonts to reduce initial load
const initialFonts = [
  {
    name: "Inter",
    text: "AI Art Generator",
    className: "font-['Inter']",
  },
  { name: "Poppins", text: "AI Art Generator", className: "font-['Poppins']" },
  { name: "Montserrat", text: "AI Art Generator", className: "font-['Montserrat']" },
  { name: "Roboto", text: "AI Art Generator", className: "font-['Roboto']" },
];

// All fonts data for when "Load More" is clicked
const allFonts = [
  {
    name: "Dancing Script",
    text: "AI Art Generator",
    className: "font-['Dancing_Script']",
  },
  { name: "Anton", text: "AI Art Generator", className: "font-['Anton']" },
  {
    name: "Bebas Neue",
    text: "AI Art Generator",
    className: "font-['Bebas_Neue']",
  },
  { name: "Charm", text: "AI Art Generator", className: "font-['Charm']" },
  { name: "Cinzel", text: "AI Art Generator", className: "font-['Cinzel']" },
  {
    name: "Comfortaa",
    text: "AI Art Generator",
    className: "font-['Comfortaa']",
  },
  {
    name: "Courgette",
    text: "AI Art Generator",
    className: "font-['Courgette']",
  },
  {
    name: "Crimson Text",
    text: "AI Art Generator",
    className: "font-['Crimson_Text']",
  },
  { name: "Dosis", text: "AI Art Generator", className: "font-['Dosis']" },
  {
    name: "Great Vibes",
    text: "AI Art Generator",
    className: "font-['Great_Vibes']",
  },
  {
    name: "Indie Flower",
    text: "AI Art Generator",
    className: "font-['Indie_Flower']",
  },
  {
    name: "Josefin Sans",
    text: "AI Art Generator",
    className: "font-['Josefin_Sans']",
  },
  { name: "Kalam", text: "AI Art Generator", className: "font-['Kalam']" },
  { name: "Lato", text: "AI Art Generator", className: "font-['Lato']" },
  {
    name: "Libre Baskerville",
    text: "AI Art Generator",
    className: "font-['Libre_Baskerville']",
  },
  { name: "Lobster", text: "AI Art Generator", className: "font-['Lobster']" },
  {
    name: "Montserrat",
    text: "AI Art Generator",
    className: "font-['Montserrat']",
  },
  {
    name: "Open Sans",
    text: "AI Art Generator",
    className: "font-['Open_Sans']",
  },
  { name: "Oswald", text: "AI Art Generator", className: "font-['Oswald']" },
  {
    name: "Pacifico",
    text: "AI Art Generator",
    className: "font-['Pacifico']",
  },
  {
    name: "Playfair Display",
    text: "AI Art Generator",
    className: "font-['Playfair_Display']",
  },
  { name: "Poppins", text: "AI Art Generator", className: "font-['Poppins']" },
  {
    name: "Quicksand",
    text: "AI Art Generator",
    className: "font-['Quicksand']",
  },
  { name: "Raleway", text: "AI Art Generator", className: "font-['Raleway']" },
  { name: "Roboto", text: "AI Art Generator", className: "font-['Roboto']" },
  {
    name: "Roboto Condensed",
    text: "AI Art Generator",
    className: "font-['Roboto_Condensed']",
  },
  {
    name: "Roboto Mono",
    text: "AI Art Generator",
    className: "font-['Roboto_Mono']",
  },
  {
    name: "Roboto Slab",
    text: "AI Art Generator",
    className: "font-['Roboto_Slab']",
  },
  { name: "Rubik", text: "AI Art Generator", className: "font-['Rubik']" },
  {
    name: "Source Sans Pro",
    text: "AI Art Generator",
    className: "font-['Source_Sans_Pro']",
  },
  {
    name: "Source Serif Pro",
    text: "AI Art Generator",
    className: "font-['Source_Serif_Pro']",
  },
  {
    name: "Space Grotesk",
    text: "AI Art Generator",
    className: "font-['Space_Grotesk']",
  },
  {
    name: "Space Mono",
    text: "AI Art Generator",
    className: "font-['Space_Mono']",
  },
  { name: "Ubuntu", text: "AI Art Generator", className: "font-['Ubuntu']" },
  {
    name: "Work Sans",
    text: "AI Art Generator",
    className: "font-['Work_Sans']",
  },
];

// Memoized font card component to prevent unnecessary re-renders
const FontCard = memo(({ font }: { font: { name: string; text: string; className: string } }) => (
  <div
    className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
  >
    <div className={`text-2xl mb-4 ${font.className}`}>
      {font.text}
    </div>
    <div className="text-sm text-gray-600 dark:text-gray-300">
      {font.name}
    </div>
  </div>
));

FontCard.displayName = 'FontCard';

function FontShowcase() {
  const [fonts, setFonts] = useState(initialFonts);
  const [showAllFonts, setShowAllFonts] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLoadMore = () => {
    setShowAllFonts(true);
    setFonts(allFonts);
  };

  if (!isClient) {
    // Return a simplified version for SSR
    return (
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Our AI Models Can Generate Text in These Fonts
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
            Experience the power of AI with our extensive font collection
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {initialFonts.map((font) => (
              <FontCard key={font.name} font={font} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Our AI Models Can Generate Text in These Fonts
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Experience the power of AI with our extensive font collection
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {fonts.map((font) => (
            <FontCard key={font.name} font={font} />
          ))}
        </div>
        
        {!showAllFonts && (
          <div className="text-center mt-8">
            <button
              onClick={handleLoadMore}
              className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
            >
              Load More Fonts
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// Export as memoized component to prevent unnecessary re-renders
export default memo(FontShowcase);
