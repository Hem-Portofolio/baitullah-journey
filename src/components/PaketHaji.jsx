import { paketHaji } from '../data';
import useInView from '../hooks/useInView';

export default function PaketHaji() {
  const [ref, inView] = useInView();
  const scrollToKontak = () => document.querySelector('#kontak')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="paket-haji" className="py-section-gap-mobile md:py-section-gap-desktop bg-white overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-grid-margin">
        <div data-animate className={`text-center mb-12 md:mb-16 ${inView ? 'in-view' : ''}`} style={{ transitionDelay: '0.1s' }}>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4">Paket Haji</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-4" />
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Daftarkan diri Anda untuk panggilan suci ke Baitullah</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {paketHaji.map((paket, i) => (
            <div
              key={paket.name}
              data-animate
              className={`group relative bg-surface-container-low rounded-3xl p-6 md:p-8 luxury-shadow hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-secondary/10 ${inView ? 'in-view' : ''}`}
              style={{ transitionDelay: `${0.15 + i * 0.1}s` }}
            >
              <h3 className="font-headline-md text-lg md:text-xl text-primary mb-2">{paket.name}</h3>
              <p className="text-on-surface-variant mb-6 leading-relaxed text-sm md:text-base">{paket.desc}</p>
              <div className="space-y-3 md:space-y-4 mb-6">
                {[
                  { icon: 'schedule', text: paket.wait },
                  { icon: 'verified_user', text: 'Izin Resmi Kemenag' },
                  { icon: 'diversity_3', text: 'Pembimbing Berpengalaman' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary text-sm md:text-base">{item.icon}</span>
                    <span className="font-body-md text-on-surface-variant text-sm md:text-base">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="font-headline-md text-2xl md:text-3xl text-secondary mb-6">{paket.price}</div>
              <button onClick={scrollToKontak} className="w-full bg-secondary text-on-secondary py-3.5 rounded-2xl font-label-lg hover:opacity-90 transition-all duration-200 active:scale-[0.97] shadow-lg hover:shadow-xl min-h-[48px]">
                Daftar Sekarang
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
