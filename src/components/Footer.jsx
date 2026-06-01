import { navLinks } from '../data';

export default function Footer() {
  const handleClick = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-neutral-dark overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(27,107,69,0.1)_0%,transparent_70%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary-500/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-display font-bold text-secondary-500 mb-4">Baitullah Journey</h3>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              Mitra terpercaya perjalanan ibadah Umroh & Haji Anda. 
              Izin resmi Kementerian Agama RI.
            </p>
            <div className="flex gap-3 mt-6">
              {['Instagram', 'Facebook', 'YouTube', 'TikTok'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-10 h-10 bg-white/5 hover:bg-secondary-500/20 rounded-xl flex items-center justify-center text-white/40 hover:text-secondary-500 transition-all duration-300 text-xs font-medium"
                >
                  {s.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white/90 mb-4 text-sm uppercase tracking-wider">Navigasi</h4>
            <div className="space-y-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                  className="block text-sm text-white/40 hover:text-secondary-500 transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white/90 mb-4 text-sm uppercase tracking-wider">Legal</h4>
            <div className="space-y-2.5 text-sm text-white/40">
              <p>Terdaftar di Kemenag RI</p>
              <p>Izin: 123/2026</p>
              <p>Anggota ASITA & HIMPUH</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">
            &copy; {new Date().getFullYear()} Baitullah Journey. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/20">
            <a href="#" className="hover:text-white/40 transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white/40 transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
