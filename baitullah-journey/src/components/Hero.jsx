import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronDown, Star } from 'lucide-react';

function Countdown() {
  const target = new Date('2027-01-10T00:00:00');
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = target - new Date();
      if (diff <= 0) { clearInterval(interval); return; }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const labels = { days: 'Hari', hours: 'Jam', minutes: 'Menit', seconds: 'Detik' };

  return (
    <div className="flex gap-3 sm:gap-4 justify-center" dir="ltr">
      {Object.entries(timeLeft).map(([key, val], i) => (
        <motion.div
          key={key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + i * 0.1 }}
          className="text-center"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 sm:px-6 py-3 min-w-[70px] shadow-xl shadow-black/10">
            <span className="text-3xl sm:text-4xl font-bold text-white tabular-nums">
              {String(val).padStart(2, '0')}
            </span>
          </div>
          <span className="text-[10px] sm:text-xs text-white/60 uppercase tracking-wider mt-2 block font-medium">
            {labels[key]}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900/95 to-neutral-dark/95" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1920')] bg-cover bg-center opacity-25 scale-105" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,150,58,0.12)_0%,transparent_70%)]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/3 right-1/4 w-4 h-4 border-2 border-secondary-400/30 rounded-full" />
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-secondary-400/20 rounded-full" />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-white/10 rounded-full" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
            <Star size={12} className="text-secondary-400 fill-secondary-400" />
            <span className="text-xs text-white/80 tracking-wider uppercase font-medium">Travel Umroh & Haji Premium</span>
            <Star size={12} className="text-secondary-400 fill-secondary-400" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-arabic text-3xl md:text-4xl text-secondary-300/90 mb-6 leading-relaxed"
        >
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-[1.1] text-shadow-lg"
        >
          Wujudkan
          <br />
          <span className="bg-gradient-to-r from-secondary-300 via-secondary-400 to-secondary-300 bg-clip-text text-transparent">
            Panggilan Suci
          </span>
          <br />
          Anda
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Bersama Baitullah Journey, ibadah Umroh dan Haji Anda menjadi lebih nyaman,
          aman, dan penuh berkah.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap gap-4 justify-center mb-16"
        >
          <button
            onClick={() => scrollTo('#paket-umroh')}
            className="group relative bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 shadow-xl shadow-secondary-500/25 hover:shadow-secondary-500/40 active:scale-95"
          >
            <span className="relative z-10">Lihat Paket</span>
          </button>
          <button
            onClick={() => scrollTo('#kontak')}
            className="group relative px-8 py-3.5 rounded-full font-semibold text-white border-2 border-white/30 hover:border-white/50 transition-all duration-300 overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
            <span className="relative z-10">Konsultasi Gratis</span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="space-y-3"
        >
          <div className="flex items-center justify-center gap-2 text-white/60 mb-4">
            <Calendar size={14} />
            <span className="text-xs uppercase tracking-widest font-medium">Musim Umroh Mendatang</span>
          </div>
          <Countdown />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12"
        >
          <button
            onClick={() => scrollTo('#why-us')}
            className="text-white/40 hover:text-white/60 transition-colors animate-bounce"
          >
            <ChevronDown size={24} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
