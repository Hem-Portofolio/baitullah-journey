import { paketUmroh } from '../data';
import useInView from '../hooks/useInView';

export default function PaketUmroh() {
  const [ref, inView] = useInView();

  return (
    <section id="paket" className="py-section-gap-mobile md:py-section-gap-desktop bg-surface" ref={ref}>
      <div className="max-w-7xl mx-auto px-grid-margin">
        <div data-animate className={`text-center mb-12 md:mb-16 ${inView ? 'in-view' : ''}`} style={{ transitionDelay: '0.1s' }}>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4">Pilihan Paket Ibadah</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Rencanakan perjalanan suci Anda dengan pilihan paket yang beragam.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {paketUmroh.map((pkg, i) => (
            <div
              key={pkg.name}
              data-animate className={`bg-white rounded-2xl overflow-hidden border luxury-shadow flex flex-col relative transition-all duration-300 hover:-translate-y-1 ${inView ? 'in-view' : ''} ${pkg.featured ? 'border-2 border-secondary lg:scale-105 z-10' : 'border-secondary/20'}`}
              style={{ transitionDelay: `${0.15 + i * 0.1}s` }}
            >
              {pkg.badge && (
                <div className="absolute top-4 right-4 bg-secondary text-on-secondary px-3 py-1 rounded-full text-xs font-bold z-10">
                  {pkg.badge}
                </div>
              )}
              <div className={`p-6 text-center ${pkg.featured ? 'bg-secondary/10' : 'bg-primary/5'}`}>
                <h3 className={`font-headline-md text-xl md:text-2xl mb-2 ${pkg.featured ? 'text-secondary' : 'text-primary'}`}>{pkg.name}</h3>
                <div className="flex items-baseline justify-center gap-1 text-secondary font-bold">
                  <span className="text-sm">Rp</span>
                  <span className="text-2xl md:text-3xl">{pkg.price}</span>
                  <span className="text-sm">Jt</span>
                </div>
              </div>
              <div className="p-6 flex-grow space-y-4">
                <ul className="space-y-3">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-on-surface-variant text-sm">
                      <span className={`material-symbols-outlined text-sm mt-0.5 ${pkg.featured ? 'text-secondary' : 'text-primary'}`}>
                        {pkg.featured ? 'star' : 'check_circle'}
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 pt-0">
                <button className={`w-full py-3 rounded-xl font-label-lg hover:opacity-90 transition-all duration-200 active:scale-[0.97] ${pkg.featured ? 'bg-secondary text-on-secondary shadow-lg hover:shadow-xl' : 'bg-primary text-on-primary hover:bg-primary/90'}`}>
                  Pilih Paket
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
