import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, CalendarCheck, MapPin, Facebook, Instagram } from 'lucide-react';
import { COMPANY_NAME, PHONE, ADDRESS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Hjem', path: '/' },
    { name: 'Tjenester', path: '/services' },
    { name: 'Terapeuter', path: '/team' },
    { name: 'Priser', path: '/prices' },
    { name: 'Kontakt', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
            <div className="bg-brand-600 text-white p-2 rounded-lg">
              <span className="font-bold text-xl tracking-tighter">WF</span>
            </div>
            <span className={`font-bold text-xl hidden sm:block ${scrolled ? 'text-slate-800' : 'text-slate-800 lg:text-white'}`}>
              {COMPANY_NAME}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand-500 ${
                  scrolled || location.pathname !== '/' ? 'text-slate-700' : 'text-slate-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="https://helseboka.app" // Simulated external booking
              target="_blank"
              rel="noreferrer"
              className="bg-brand-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-700 transition-all shadow-lg hover:shadow-brand-500/30 flex items-center gap-2"
            >
              <CalendarCheck size={16} />
              Bestill Time
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-slate-800' : 'text-slate-800 lg:text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-brand-50 rounded-md"
            >
              {link.name}
            </Link>
          ))}
          <a
             href="https://helseboka.app"
             target="_blank"
             rel="noreferrer"
             className="mt-4 w-full text-center bg-brand-600 text-white px-5 py-3 rounded-lg font-semibold"
          >
            Bestill Time
          </a>
        </div>
      </div>
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-bold">{COMPANY_NAME}</h3>
            <p className="text-sm leading-relaxed max-w-xs">
              Vi tilbyr fysioterapi og manuellterapi med høy faglig standard. 
              Vårt mål er å hjelpe deg tilbake til en aktiv hverdag.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-brand-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-brand-400 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Kontakt Oss</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-500 shrink-0" size={20} />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-500 shrink-0" size={20} />
                <span>{PHONE}</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Åpningstider</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Mandag - Torsdag</span>
                <span>08:00 - 16:00</span>
              </li>
              <li className="flex justify-between">
                <span>Fredag</span>
                <span>08:00 - 15:00</span>
              </li>
              <li className="flex justify-between text-slate-500">
                <span>Lørdag - Søndag</span>
                <span>Stengt</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. Alle rettigheter reservert.</p>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};