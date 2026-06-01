import { motion } from 'framer-motion';
import { Clock, Plane, Building2, Shield, Check, Star } from 'lucide-react';
import { paketUmroh } from '../data';

const features = [Clock, Building2, Plane, Shield];
const featureLabels = ['Durasi', 'Hotel', 'Maskapai', 'Asuransi'];

export default function PaketUmroh() {
  const scrollToKontak = () => document.querySelector('#kontak')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="paket-umroh" className="relative py-28 bg-neutral-light overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 text-sm font-semibold uppercase tracking-[0.2em]">Paket Ibadah</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-neutral-dark mt-3 mb-4">
            Paket <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">Umroh</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-4" />
          <p className="text-neutral-dark/60 max-w-2xl mx-auto text-lg">
            Pilih paket umroh yang sesuai dengan kebutuhan dan anggaran Anda
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {paketUmroh.map((paket, i) => (
            <motion.div
              key={paket.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${
                i === 0 ? 'from-primary-400 to-primary-500' :
                i === 1 ? 'from-secondary-500 to-primary-500' :
                i === 2 ? 'from-primary-500 to-primary-600' :
                'from-secondary-500 to-secondary-600'
              }`} />

              {paket.badge && (
                <div className={`absolute top-5 right-5 px-3.5 py-1.5 rounded-full text-[11px] font-bold text-white uppercase tracking-wider shadow-lg z-10 ${
                  paket.badge === 'Terlaris'
                    ? 'bg-gradient-to-r from-secondary-500 to-secondary-600 shadow-secondary-500/30'
                    : 'bg-gradient-to-r from-primary-500 to-primary-600 shadow-primary-500/30'
                }`}>
                  {paket.badge === 'Terlaris' && <Star size={10} className="inline mr-1 -mt-0.5 fill-white" />}
                  {paket.badge}
                </div>
              )}

              <div className="p-8 pt-10">
                <h3 className="text-2xl font-bold text-neutral-dark mb-2">{paket.name}</h3>
                <p className="text-xs text-neutral-dark/40 uppercase tracking-wider font-medium mb-6">
                  Mulai dari
                </p>
                <div className="text-3xl font-bold bg-gradient-to-r from-secondary-500 to-secondary-600 bg-clip-text text-transparent mb-8">
                  {paket.price}
                </div>

                <div className="space-y-3.5 mb-8">
                  {features.map((Icon, idx) => (
                    <div key={idx} className="flex items-center gap-3.5 text-sm">
                      <div className="w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary-100 transition-colors">
                        <Icon size={14} className="text-primary-500" />
                      </div>
                      <span className="text-neutral-dark/70">
                        {idx === 0 ? paket.duration :
                         idx === 1 ? paket.hotel :
                         idx === 2 ? paket.maskapai :
                         'Asuransi Perjalanan'}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={scrollToKontak}
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white py-3.5 rounded-2xl font-semibold transition-all duration-300 shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30 active:scale-[0.98]"
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
