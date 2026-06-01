import { useState, useEffect } from 'react';
import { navLinks } from '../data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <nav className={`fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/20 transition-all duration-300 ${scrolled ? 'py-3 shadow-md' : 'py-4 shadow-sm'}`}>
      <div className="flex justify-between items-center max-w-7xl mx-auto px-grid-margin">
        <a href="#hero" className="flex items-center gap-3">
          <span className="font-headline-md text-sm sm:text-xl md:text-headline-md text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary tracking-tight">Baitullah Journey</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-label-lg text-label-lg text-on-surface-variant hover:text-secondary transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a href="#kontak" className="hidden md:inline-block bg-secondary text-on-secondary px-6 py-2.5 rounded-full font-label-lg text-label-lg hover:opacity-90 transition-all duration-200 active:scale-95 shadow-sm hover:shadow-md">
          Konsultasi Sekarang
        </a>
        <button className="md:hidden text-on-surface p-2 -mr-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className="material-symbols-outlined text-3xl transition-transform duration-200" style={{ transform: menuOpen ? 'rotate(90deg)' : '' }}>
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>
      <div className={`md:hidden bg-surface border-t border-outline-variant/20 overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-grid-margin py-4 space-y-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="block font-label-lg text-on-surface-variant hover:text-secondary transition-colors">
              {link.label}
            </a>
          ))}
          <a href="#kontak" onClick={() => setMenuOpen(false)} className="block text-center bg-secondary text-on-secondary px-6 py-3 rounded-full font-label-lg hover:opacity-90 transition-opacity min-h-[44px] flex items-center justify-center">
            Konsultasi Sekarang
          </a>
        </div>
      </div>
    </nav>
  );
}
