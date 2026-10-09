import { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Collections', path: '/#collections' },
    { name: 'Our Story', path: '/#story' },
    { name: 'Craftsmanship', path: '/#craftsmanship' },
    { name: 'Inspiration', path: '/#inspiration' }
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-brand-ivory shadow-sm h-20 md:h-24 flex items-center">
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between w-full">
          {/* Logo */}
          <Link to="/" className="shrink-0 relative z-50 flex items-center h-full w-32 md:w-48">
            <img 
              src="/logo.png" 
              alt="Swing n' Dine" 
              className="absolute top-1/2 -translate-y-1/2 h-32 md:h-48 w-auto object-contain origin-left"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="font-sans text-sm uppercase tracking-widest font-medium transition-colors hover:text-brand-terracotta text-brand-charcoal"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <button className="hover:text-brand-terracotta transition-colors text-brand-charcoal">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button className="hover:text-brand-terracotta transition-colors text-brand-charcoal">
              <Heart size={20} strokeWidth={1.5} />
            </button>
            <button className="hover:text-brand-terracotta transition-colors text-brand-charcoal">
              <ShoppingBag size={20} strokeWidth={1.5} />
            </button>
            <button className="bg-brand-charcoal text-white px-6 py-2.5 font-sans text-sm tracking-wider hover:bg-brand-walnut transition-colors">
              Explore Collection
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden relative z-50 text-brand-charcoal"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-ivory pt-24 px-6 pb-6 flex flex-col"
          >
            <div className="flex flex-col space-y-6 text-center mt-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-2xl text-brand-charcoal hover:text-brand-terracotta transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="mt-auto flex flex-col space-y-6">
              <div className="flex justify-center space-x-8 text-brand-charcoal">
                <Search size={24} strokeWidth={1.5} />
                <Heart size={24} strokeWidth={1.5} />
                <ShoppingBag size={24} strokeWidth={1.5} />
              </div>
              <button className="w-full bg-brand-charcoal text-white py-4 font-sans tracking-wider hover:bg-brand-walnut transition-colors">
                Explore Collection
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
