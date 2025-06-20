import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#services' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        {/* Logo - Left side */}
        <div className="flex-shrink-0 mr-4 sm:mr-8">
          <a href="#" className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-green-nest-600 whitespace-nowrap">
            Sri Durga Sai Green Scapes
          </a>
        </div>
        
        {/* Desktop Navigation - Center */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-green-nest-600 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
        
        {/* CTA Button - Right side */}
        <div className="hidden lg:flex lg:flex-shrink-0 lg:ml-8">
          <a
            href="#contact"
            className="text-sm font-semibold leading-6 text-white bg-green-nest-600 px-4 py-2 rounded-lg hover:bg-green-nest-700 transition-colors"
          >
            Book a Consultation
          </a>
        </div>
        
        {/* Mobile menu button - Right side, only on mobile */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle main menu</span>
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Mobile menu panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <a href="#" className="text-lg font-bold text-green-nest-600">
                  Menu
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              
              {/* Navigation Links */}
              <div className="flex-1 px-6 py-8 bg-white">
                <div className="space-y-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg px-4 py-4 text-xl font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Book Consultation Button */}
              <div className="p-6 border-t border-gray-200 bg-white flex-shrink-0">
                <a
                  href="#contact"
                  className="block w-full text-center rounded-lg px-4 py-4 text-xl font-semibold text-white bg-green-nest-600 hover:bg-green-nest-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book a Consultation
                </a>
              </div>
              
              {/* Extra white space to fill bottom */}
              <div className="flex-1 bg-white"></div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
} 