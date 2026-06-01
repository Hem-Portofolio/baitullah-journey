import { useState, useEffect } from 'react';
import useInView from '../hooks/useInView';

function Countdown() {
  const [time, setTime] = useState({ days: '12', hours: '08', minutes: '45' });

  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 12);
    const update = () => {
      const now = new Date().getTime();
      const distance = target.getTime() - now;
      if (distance > 0) {
        setTime({
          days: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0'),
          hours: String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0'),
          minutes: String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0'),
        });
      }
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex justify-center gap-3 sm:gap-4 md:gap-8 py-8">
      {[
        { value: time.days, label: 'Hari' },
        { value: time.hours, label: 'Jam' },
        { value: time.minutes, label: 'Menit' },
      ].map((item) => (
        <div key={item.label} className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl min-w-[72px] sm:min-w-[80px] md:min-w-[100px] text-center">
          <span className="block font-headline-md text-2xl sm:text-headline-md text-secondary-container">{item.value}</span>
          <span className="font-label-sm text-label-sm text-white/70 uppercase">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" ref={ref}>
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          style={{ transform: inView ? 'scale(1.08)' : 'scale(1)', transition: 'transform 8s cubic-bezier(0.16, 1, 0.3, 1)' }}
          src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1600"
          alt="Masjidil Haram"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-on-background/70 via-on-background/40 to-on-background/80" />
      </div>
      <div className="relative z-10 text-center px-grid-margin max-w-4xl mx-auto space-y-6 md:space-y-8">
        <p data-animate className={`text-secondary-container font-headline-md text-2xl sm:text-3xl opacity-90 ${inView ? 'in-view' : ''}`} style={{ transitionDelay: '0.1s' }} dir="rtl">
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
        </p>
        <h1 data-animate className={`font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary leading-tight ${inView ? 'in-view' : ''}`} style={{ transitionDelay: '0.2s' }}>
          Wujudkan Impian Baitullah Anda
        </h1>
        <p data-animate className={`font-body-lg text-body-lg text-white/90 max-w-2xl mx-auto ${inView ? 'in-view' : ''}`} style={{ transitionDelay: '0.3s' }}>
          Paket Umroh & Haji Plus Premium Bersama Pembimbing Berpengalaman. Nikmati perjalanan ibadah yang khusyuk dengan fasilitas terbaik dunia.
        </p>
        <div data-animate className={inView ? 'in-view' : ''} style={{ transitionDelay: '0.4s' }}>
          <Countdown />
        </div>
        <div data-animate className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${inView ? 'in-view' : ''}`} style={{ transitionDelay: '0.5s' }}>
          <a href="#paket" className="w-full sm:w-auto bg-secondary text-on-secondary px-8 md:px-10 py-4 rounded-full font-label-lg text-label-lg hover:bg-secondary/90 transition-all duration-200 shadow-xl hover:shadow-2xl active:scale-95 text-center">
            Lihat Paket Umroh
          </a>
          <a href="#kontak" className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/40 text-white px-8 md:px-10 py-4 rounded-full font-label-lg text-label-lg hover:bg-white/20 transition-all duration-200 active:scale-95 text-center">
            Jadwal Keberangkatan
          </a>
        </div>
      </div>
    </section>
  );
}
