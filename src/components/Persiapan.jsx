import { useState } from 'react';
import { persiapanItems, faqItems } from '../data';
import useInView from '../hooks/useInView';

function FaqSection() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <h3 className="font-headline-md text-2xl md:text-3xl text-primary">Tanya Jawab</h3>
        <div className="w-12 h-1 bg-secondary mx-auto rounded-full mt-3" />
      </div>
      <div className="space-y-3">
        {faqItems.map((faq, i) => (
          <div key={i}>
            <button
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              className={`w-full flex items-center justify-between p-4 md:p-5 text-left font-label-lg text-sm md:text-base rounded-2xl transition-all duration-300 ${
                openFaq === i
                  ? 'bg-primary text-on-primary shadow-lg'
                  : 'bg-surface-container-low text-on-surface hover:bg-surface hover:shadow-sm'
              }`}
            >
              <span className="pr-4">{faq.q}</span>
              <span className={`material-symbols-outlined transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}>
                expand_more
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="bg-surface-container-low mx-2 px-4 md:px-5 py-4 rounded-b-2xl border border-outline-variant/20 -mt-2 text-on-surface-variant font-body-md text-sm md:text-base leading-relaxed">
                {faq.a}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Persiapan() {
  const [ref, inView] = useInView();

  return (
    <section id="persiapan" className="py-section-gap-mobile md:py-section-gap-desktop bg-surface overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-grid-margin">
        <div data-animate className={`text-center mb-12 md:mb-16 ${inView ? 'in-view' : ''}`} style={{ transitionDelay: '0.1s' }}>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4">Persiapan Ibadah</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-4" />
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Pastikan perjalanan ibadah Anda lancar dengan persiapan yang matang</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16 md:mb-20">
          {persiapanItems.map((item, i) => (
            <div
              key={item.title}
              data-animate
              className={`group bg-surface-container-low rounded-2xl p-6 md:p-8 luxury-shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-secondary/5 ${inView ? 'in-view' : ''}`}
              style={{ transitionDelay: `${0.15 + i * 0.1}s` }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-4 md:mb-5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined text-2xl md:text-3xl">{item.icon}</span>
              </div>
              <h3 className="font-headline-md text-base md:text-lg text-primary mb-2 md:mb-3">{item.title}</h3>
              <p className="text-on-surface-variant font-body-md text-sm md:text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div data-animate className={inView ? 'in-view' : ''} style={{ transitionDelay: '0.3s' }}>
          <FaqSection />
        </div>
      </div>
    </section>
  );
}
