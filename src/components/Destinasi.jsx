import { destinasi } from '../data';
import useInView from '../hooks/useInView';

const images = [
  'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800',
  'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400',
  'https://images.unsplash.com/photo-1566140967404-b8b3932483f5?w=400',
  'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=400',
  'https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?w=400',
  'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800',
];

export default function Destinasi() {
  const [ref, inView] = useInView();

  return (
    <section id="destinasi" className="py-section-gap-mobile md:py-section-gap-desktop bg-surface-container" ref={ref}>
      <div className="max-w-7xl mx-auto px-grid-margin">
        <div data-animate className={`text-center mb-12 md:mb-16 ${inView ? 'in-view' : ''}`} style={{ transitionDelay: '0.1s' }}>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4">Destinasi Suci & Bersejarah</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Menelusuri jejak perjuangan Rasulullah SAW dan para sahabat.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {destinasi.map((item, i) => {
            const isLarge = i === 0;
            const isWide = i === 5;
            return (
              <div
                key={item.name}
                data-animate className={`relative group overflow-hidden rounded-2xl ${inView ? 'in-view' : ''} ${isLarge ? 'md:col-span-2 md:row-span-2' : ''} ${isWide ? 'md:col-span-2' : ''}`}
                style={{ transitionDelay: `${0.15 + i * 0.06}s` }}
              >
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={images[i] || images[0]}
                  alt={item.name}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 via-on-background/20 to-transparent flex flex-col justify-end p-4 md:p-6">
                  <h4 className={`text-white font-headline-md ${isLarge ? 'text-xl md:text-2xl' : 'text-base md:text-lg'}`}>{item.name}</h4>
                  {(isLarge || isWide) && <p className="text-white/70 text-xs md:text-sm mt-1">{item.city || 'Taman Surga di Dunia'}</p>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
