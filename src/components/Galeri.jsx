import { useState } from 'react';
import { galeri } from '../data';
import useInView from '../hooks/useInView';

export default function Galeri() {
  const [selected, setSelected] = useState(null);
  const [ref, inView] = useInView();

  return (
    <section id="galeri" className="py-section-gap-mobile md:py-section-gap-desktop bg-surface-container-low overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-grid-margin">
        <div data-animate className={`text-center mb-12 md:mb-16 ${inView ? 'in-view' : ''}`} style={{ transitionDelay: '0.1s' }}>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4">Galeri Kegiatan</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-4" />
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Dokumentasi perjalanan ibadah jamaah Baitullah Journey</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galeri.map((item, i) => (
            <div
              key={i}
              data-animate
              className={`relative group overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-0.5 ${inView ? 'in-view' : ''} ${i === 0 ? 'md:col-span-2 md:row-span-2' : 'aspect-[4/3]'}`}
              style={{ transitionDelay: `${0.15 + i * 0.06}s` }}
              onClick={() => setSelected(item)}
            >
              <img src={item.src} alt={item.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-on-background/70 via-on-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 md:p-3 transform scale-75 group-hover:scale-100 transition-transform duration-500">
                  <span className="material-symbols-outlined text-white text-sm md:text-base">visibility</span>
                </div>
                <span className="absolute bottom-3 md:bottom-4 left-3 md:left-4 text-white font-label-sm text-xs md:text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-on-background/80 backdrop-blur-sm p-4 animate-fade-in" onClick={() => setSelected(null)}>
          <div className="relative max-w-4xl w-full max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelected(null)} className="absolute top-3 right-3 md:top-4 md:right-4 z-10 bg-on-background/50 hover:bg-on-background/70 text-white rounded-full p-2 transition-colors duration-200">
              <span className="material-symbols-outlined text-sm md:text-base">close</span>
            </button>
            <img src={selected.src} alt={selected.alt} className="w-full h-full object-contain max-h-[80vh]" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-on-background/70 to-transparent p-4 md:p-6">
              <p className="text-white font-label-lg text-sm md:text-base">{selected.alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
