import { motion } from 'framer-motion';
import { Clock, Users, ShieldCheck, Star } from 'lucide-react';
import { paketHaji } from '../data';

export default function PaketHaji() {
  const scrollToKontak = () => document.querySelector('#kontak')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="paket-haji" className="relative py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(27,107,69,0.03)_0%,transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 text-sm font-semibold uppercase tracking-[0.2em]">Paket Ibadah</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-neutral-dark mt-3 mb-4">
            Paket <span className="bg-gradient-to-r from-secondary-500 to-secondary-600 bg-clip-text text-transparent">Haji</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-4" />
          <p className="text-neutral-dark/60 max-w-2xl mx-auto text-lg">
            Daftarkan diri Anda untuk panggilan suci ke Baitullah
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {paketHaji.map((paket, i) => (
            <motion.div
              key={paket.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative bg-gradient-to-br from-neutral-light to-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-gray-100"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary-500/5 to-secondary-500/0 rounded-bl-full" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-secondary-500" />
                  <h3 className="text-xl font-bold text-neutral-dark">{paket.name}</h3>
                </div>
                <p className="text-neutral-dark/70 mb-6 leading-relaxed">{paket.desc}</p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 bg-secondary-50 rounded-xl flex items-center justify-center shrink-0">
                      <Clock size={16} className="text-secondary-500" />
                    </div>
                    <span className="text-sm text-neutral-dark/70">{paket.wait}</span>
                  </div>
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 bg-secondary-50 rounded-xl flex items-center justify-center shrink-0">
                      <ShieldCheck size={16} className="text-secondary-500" />
                    </div>
                    <span className="text-sm text-neutral-dark/70">Izin Resmi Kemenag</span>
                  </div>
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 bg-secondary-50 rounded-xl flex items-center justify-center shrink-0">
                      <Users size={16} className="text-secondary-500" />
                    </div>
                    <span className="text-sm text-neutral-dark/70">Pembimbing Berpengalaman</span>
                  </div>
                </div>

                <div className="text-3xl font-bold bg-gradient-to-r from-secondary-500 to-secondary-600 bg-clip-text text-transparent mb-6">
                  {paket.price}
                </div>

                <button
                  onClick={scrollToKontak}
                  className="w-full bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white py-3.5 rounded-2xl font-semibold transition-all duration-300 shadow-lg shadow-secondary-500/20 hover:shadow-secondary-500/30 active:scale-[0.98]"
                >
                  Daftar Sekarang
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
