import useInView from '../hooks/useInView';

export default function Footer() {
  const [ref, inView] = useInView();

  return (
    <footer className="bg-primary text-on-primary" ref={ref}>
      <div className="max-w-7xl mx-auto px-grid-margin py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-10 md:mb-12">
          <div data-animate className={`sm:col-span-2 space-y-5 md:space-y-6 ${inView ? 'in-view' : ''}`} style={{ transitionDelay: '0.1s' }}>
            <span className="font-headline-md text-xl md:text-headline-md text-secondary-container">Baitullah Journey</span>
            <p className="text-on-primary/80 max-w-md leading-relaxed text-sm md:text-base">
              Penyelenggara Perjalanan Ibadah Umroh (PPIU) Resmi Terakreditasi. Melayani dengan hati untuk perjalanan ibadah yang aman, nyaman, dan mabrur.
            </p>
          </div>
          <div data-animate className={`space-y-5 md:space-y-6 ${inView ? 'in-view' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <h4 className="font-label-lg text-secondary-container">Quick Links</h4>
            <ul className="space-y-3 md:space-y-4">
              <li><a href="#hero" className="text-on-primary/80 hover:text-secondary-container transition-colors duration-200 text-sm md:text-base">Beranda</a></li>
              <li><a href="#paket" className="text-on-primary/80 hover:text-secondary-container transition-colors duration-200 text-sm md:text-base">Paket</a></li>
              <li><a href="#testimoni" className="text-on-primary/80 hover:text-secondary-container transition-colors duration-200 text-sm md:text-base">Testimoni</a></li>
              <li><a href="#kontak" className="text-on-primary/80 hover:text-secondary-container transition-colors duration-200 text-sm md:text-base">Kontak</a></li>
            </ul>
          </div>
          <div data-animate className={`space-y-5 md:space-y-6 ${inView ? 'in-view' : ''}`} style={{ transitionDelay: '0.3s' }}>
            <h4 className="font-label-lg text-secondary-container">Follow Us</h4>
            <div className="flex gap-3 md:gap-4">
              {['public', 'share', 'alternate_email'].map((icon) => (
                <a key={icon} href="#" className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary-container hover:text-primary transition-all duration-200">
                  <span className="material-symbols-outlined text-lg md:text-base">{icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div data-animate className={`pt-10 md:pt-12 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 ${inView ? 'in-view' : ''}`} style={{ transitionDelay: '0.4s' }}>
          <p className="font-body-md text-sm md:text-body-md text-on-primary/60">
            &copy; 2026 Baitullah Journey. All Rights Reserved. Licensed Umroh & Haji Operator.
          </p>
          <div className="flex items-center gap-2 grayscale opacity-60">
            <span className="material-symbols-outlined text-sm md:text-base">verified_user</span>
            <span className="font-label-sm uppercase tracking-widest text-xs md:text-sm">Kemenag Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
