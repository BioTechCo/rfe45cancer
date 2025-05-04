"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 bg-white ${
        scrolled ? 'navbar-scrolled' : 'shadow-md'
      } transition-all duration-300`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="navbar-logo text-3xl font-bold text-blue-600 hover:text-blue-800 transition-colors duration-300">
            RFE45Cancer
          </Link>

          {/* Mobile menu button */}
          <button
            className={`menu-button md:hidden bg-blue-50 rounded-md p-2 inline-flex items-center justify-center text-blue-700 hover:bg-blue-100 transition-colors duration-300 ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="nav-link text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link href="/about" className="nav-link text-gray-700 hover:text-blue-600 font-medium">
              About
            </Link>
            <Link href="/cancer-types" className="nav-link text-gray-700 hover:text-blue-600 font-medium">
              Cancer Types
            </Link>
            <Link href="/analysis" className="nav-link text-gray-700 hover:text-blue-600 font-medium">
              Analysis
            </Link>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        <div className={`mobile-menu md:hidden mt-4 ${menuOpen ? 'open' : ''}`}>
          <div className="flex flex-col space-y-2 pb-3 pt-2">
            <Link href="/" className="mobile-link text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 block px-3 py-2 rounded-md">
              Home
            </Link>
            <Link href="/about" className="mobile-link text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 block px-3 py-2 rounded-md">
              About
            </Link>
            <Link href="/cancer-types" className="mobile-link text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 block px-3 py-2 rounded-md">
              Cancer Types
            </Link>
            <Link href="/analysis" className="mobile-link text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 block px-3 py-2 rounded-md">
              Analysis
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
