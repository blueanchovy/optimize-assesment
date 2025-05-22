"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function AppBar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinkClass = (path: string) => 
    `transition-colors ${
      pathname === path
        ? "text-purple-600 dark:text-purple-400"
        : "text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl font-bold text-gray-900 dark:text-white"
          >
            Magic Moments
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className={navLinkClass("/")}>
              Home
            </Link>
            <Link href="/gallery" className={navLinkClass("/gallery")}>
              Gallery
            </Link>
            <Link href="/blog" className={navLinkClass("/blog")}>
              Blog
            </Link>
            <Link href="/tutorials" className={navLinkClass("/tutorials")}>
              Tutorials
            </Link>
            <Link href="/pricing" className={navLinkClass("/pricing")}>
              Pricing
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden h-100">
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-200 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-white dark:bg-gray-900 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "56px" }}
      >
        <div className="flex flex-col p-4 space-y-4 bg-gray-900/90 h-[95vh]">
          <Link
            href="/"
            className={`block py-2 px-4 text-lg ${navLinkClass("/")}`}
          >
            Home
          </Link>
          <Link
            href="/gallery"
            className={`block py-2 px-4 text-lg ${navLinkClass("/gallery")}`}
          >
            Gallery
          </Link>
          <Link
            href="/blog"
            className={`block py-2 px-4 text-lg ${navLinkClass("/blog")}`}
          >
            Blog
          </Link>
          <Link
            href="/tutorials"
            className={`block py-2 px-4 text-lg ${navLinkClass("/tutorials")}`}
          >
            Tutorials
          </Link>
          <Link
            href="/pricing"
            className={`block py-2 px-4 text-lg ${navLinkClass("/pricing")}`}
          >
            Pricing
          </Link>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 z-30 bg-black bg-opacity-50"
          style={{ top: "64px" }}
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
}
