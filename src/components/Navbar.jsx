import { useState, useEffect } from 'react';
import { Menu, X, Moon } from 'lucide-react';
import { navLinks } from '../data';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#hero');

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= y + 200) {
          setActive(navLinks[i].href);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleClick('#hero'); }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/20 group-hover:shadow-primary-500/30 transition-shadow">
              <Moon size={20} className="text-white" />
            </div>
            <div>
              <span className="text-lg font-bold font-display text-neutral-dark tracking-tight">Baitullah Journey</span>
              <span className={`block text-[10px] uppercase tracking-[0.2em] font-medium transition-colors duration-500 ${scrolled ? 'text-primary-500' : 'text-white/70'}`}>
                Travel Umroh & Haji
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                  active === link.href
                    ? 'bg-primary-500 text-white shadow-md shadow-primary-500/20'
                    : 'text-neutral-dark/70 hover:text-primary-500 hover:bg-primary-50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            className={`lg:hidden p-2.5 rounded-xl transition-all ${
              open || scrolled
                ? 'bg-primary-50 text-primary-500'
                : 'text-white/90 hover:bg-white/10'
            }`}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
        open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-xl">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  active === link.href
                    ? 'bg-primary-500 text-white'
                    : 'text-neutral-dark hover:bg-primary-50 hover:text-primary-500'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
