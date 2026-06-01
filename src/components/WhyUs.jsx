import { stats, whyUsCards } from '../data';
import useInView from '../hooks/useInView';

function StatsBar() {
  const [ref, inView] = useInView();
  return (
    <section className="bg-primary py-12 md:py-16 relative overflow-hidden" ref={ref}>
      <div className="arabesque-pattern absolute inset-0" />
      <div className="max-w-7xl mx-auto px-grid-margin relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            data-animate
            className={`space-y-1 ${inView ? 'in-view' : ''} ${i > 0 ? 'md:border-l border-white/10' : ''}`}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <p className="font-display-lg text-2xl sm:text-3xl font-bold text-secondary-container">{stat.value}</p>
            <p className="font-label-sm sm:font-label-lg text-on-primary/80">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhyUsCards() {
  const [ref, inView] = useInView();
  return (
    <section id="why-us" className="py-section-gap-mobile md:py-section-gap-desktop bg-surface-container-low" ref={ref}>
      <div className="max-w-7xl mx-auto px-grid-margin">
        <div data-animate className={`text-center mb-12 md:mb-16 space-y-4 ${inView ? 'in-view' : ''}`} style={{ transitionDelay: '0.1s' }}>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">Mengapa Memilih Baitullah Journey?</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Dedikasi kami adalah memberikan kenyamanan maksimal agar ibadah Anda tetap khusyuk dan bermakna.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-grid-gutter">
          {whyUsCards.map((card, i) => (
            <div
              key={card.title}
              data-animate
              className={`bg-white p-6 md:p-8 rounded-xl border border-secondary/10 luxury-shadow group hover:border-secondary transition-all duration-300 hover:-translate-y-1 ${inView ? 'in-view' : ''}`}
              style={{ transitionDelay: `${0.15 + i * 0.08}s` }}
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/5 rounded-full flex items-center justify-center mb-5 md:mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined text-3xl md:text-4xl">{card.icon}</span>
              </div>
              <h3 className="font-headline-md text-lg md:text-xl mb-2 md:mb-3">{card.title}</h3>
              <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function WhyUs() {
  return (
    <>
      <StatsBar />
      <WhyUsCards />
    </>
  );
}
