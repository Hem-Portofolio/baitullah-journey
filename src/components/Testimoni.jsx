import { testimonials } from '../data';
import useInView from '../hooks/useInView';

export default function Testimoni() {
  const [ref, inView] = useInView();

  return (
    <section id="testimoni" className="py-section-gap-mobile md:py-section-gap-desktop bg-surface-container-low relative" ref={ref}>
      <div className="arabesque-pattern absolute inset-0" />
      <div className="max-w-7xl mx-auto px-grid-margin relative z-10">
        <div data-animate className={`text-center mb-12 md:mb-16 ${inView ? 'in-view' : ''}`} style={{ transitionDelay: '0.1s' }}>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4">Apa Kata Mereka?</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Kepuasan jamaah adalah amanah dan prioritas kami.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item, i) => (
            <div key={item.name} data-animate className={`bg-white p-6 md:p-8 rounded-2xl luxury-shadow border border-secondary/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${inView ? 'in-view' : ''}`} style={{ transitionDelay: `${0.15 + i * 0.1}s` }}>
              <div className="flex items-center gap-4 mb-5 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-surface-variant flex-shrink-0 overflow-hidden flex items-center justify-center text-primary/40">
                  <span className="material-symbols-outlined text-3xl md:text-4xl">person</span>
                </div>
                <div>
                  <h4 className="font-label-lg text-primary">{item.name}</h4>
                  <div className="flex text-secondary-container gap-0.5">
                    {Array.from({ length: item.rating }, (_, r) => (
                      <span key={r} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-on-surface-variant italic text-sm md:text-base leading-relaxed">{'\u201C'}{item.text}{'\u201D'}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
