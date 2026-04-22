'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Truck, Phone } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'Industries', href: '/#industries' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'Contact Us', href: '/#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex justify-center items-center py-4 px-6 ${
        scrolled ? 'backdrop-blur-md bg-white/80 border-b border-emerald-900/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl w-full flex justify-between items-center">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center relative overflow-hidden shadow-lg shadow-emerald-500/20">
            <motion.div
               animate={{ x: [0, 40, -40, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
               className="absolute w-full h-full bg-white/30 blur-md"
            />
            <Truck className="w-5 h-5 text-white z-10" />
          </div>
          <span className="font-display font-bold text-2xl tracking-tighter text-[#1A2E20]">
            DTI<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">CARGO</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex bg-white border border-emerald-900/5 shadow-sm rounded-full px-6 py-2 gap-6">
            {navLinks.map((link) => {
              const isActive = pathname ? (pathname === link.href || (link.href.startsWith('/#') && pathname === '/') || (pathname.startsWith(link.href) && link.href !== '/' && !link.href.startsWith('/#'))) : false;
              const isHash = link.href.startsWith('/#');
              return isHash ? (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative group ${isActive ? 'text-emerald-700' : 'text-gray-600 hover:text-emerald-700'}`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative group ${isActive ? 'text-emerald-700' : 'text-gray-600 hover:text-emerald-700'}`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 mr-2">
             <Phone className="w-4 h-4 text-emerald-600" />
             <span>(800) 555-0199</span>
          </div>
          <a href="/#contact" className="bg-[#1A2E20] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-[#1A2E20]/20 text-center flex items-center justify-center">
            Get a Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#1A2E20]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu-container"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-emerald-900/10 py-6 px-6 flex flex-col gap-6 md:hidden shadow-2xl"
          >
            {navLinks.map((link) => {
              const isActive = pathname ? (pathname === link.href || (link.href.startsWith('/#') && pathname === '/') || (pathname.startsWith(link.href) && link.href !== '/' && !link.href.startsWith('/#'))) : false;
              const isHash = link.href.startsWith('/#');
              return isHash ? (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xl font-display font-medium transition-colors ${isActive ? 'text-emerald-700' : 'text-gray-800 hover:text-emerald-700'}`}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xl font-display font-medium transition-colors ${isActive ? 'text-emerald-700' : 'text-gray-800 hover:text-emerald-700'}`}
                >
                  {link.name}
                </Link>
              );
            })}
            <a href="/#contact" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white w-full py-3 rounded-lg text-lg font-semibold mt-4 shadow-lg shadow-emerald-500/20 text-center">
              Get a Quote
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
