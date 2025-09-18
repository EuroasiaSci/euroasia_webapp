'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsIndustriesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsIndustriesOpen(false);
    }, 150); // 150ms delay
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { 
      name: 'Industries', 
      href: '/industries',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Food & Feed', href: '/industries/food-feed' },
        { name: 'Consumer Products', href: '/industries/consumer-products' },
        { name: 'Cosmetics & Personal Care', href: '/industries/cosmetics-personal-care' },
        { name: 'Pharmaceutical', href: '/industries/pharmaceutical' },
      ]
    },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-soft sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-2 sm:py-4">
        <div className="flex justify-between items-center min-h-[60px] sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/euroasia_logo-removebg.png"
                alt="EUROASIA Lab Testing"
                width={180}
                height={50}
                className="h-8 sm:h-10 lg:h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={item.href}
                      className="text-neutral-700 hover:text-primary transition-colors duration-200 font-medium flex items-center"
                    >
                      {item.name}
                      <svg
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          isIndustriesOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </Link>
                    
                    {/* Dropdown Menu */}
                    {isIndustriesOpen && (
                      <div 
                        className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-large border border-neutral-200 py-2 z-50"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-3 text-neutral-700 hover:text-primary hover:bg-neutral-50 transition-colors duration-200 font-medium"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-neutral-700 hover:text-primary transition-colors duration-200 font-medium flex items-center"
                  >
                    {item.name === 'Home' && (
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                    )}
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-primary text-white px-4 lg:px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors duration-200 font-medium text-sm lg:text-base"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Link
              href="/contact"
              className="bg-primary text-white px-3 py-1.5 rounded text-xs font-medium"
            >
              Quote
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-neutral-700 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-3 pt-3 pb-4 space-y-2 bg-white border-t border-neutral-200">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                        className="flex items-center justify-between w-full px-3 py-2 text-neutral-700 hover:text-primary hover:bg-neutral-50 rounded-md transition-colors duration-200 font-medium"
                      >
                        {item.name}
                        <svg
                          className={`h-4 w-4 transition-transform duration-200 ${
                            isIndustriesOpen ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {isIndustriesOpen && (
                        <div className="ml-4 space-y-1">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-3 py-2 text-neutral-600 hover:text-primary hover:bg-neutral-50 rounded-md transition-colors duration-200 font-medium"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-neutral-700 hover:text-primary hover:bg-neutral-50 rounded-md transition-colors duration-200 font-medium flex items-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name === 'Home' && (
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          />
                        </svg>
                      )}
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="block w-full text-center bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
