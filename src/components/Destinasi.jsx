import { motion } from 'framer-motion';
import { MapPin, Compass } from 'lucide-react';
import { destinasi } from '../data';

const gradients = [
  'from-emerald-500/10 to-emerald-600/5',
  'from-blue-500/10 to-blue-600/5',
  'from-amber-500/10 to-amber-600/5',
  'from-rose-500/10 to-rose-600/5',
  'from-teal-500/10 to-teal-600/5',
];
const iconColors = [
  'bg-emerald-100 text-emerald-600',
  'bg-blue-100 text-blue-600',
  'bg-amber-100 text-amber-600',
  'bg-rose-100 text-rose-600',
  'bg-teal-100 text-teal-600',
];

export default function Destinasi() {
  return (
    <section id="destinasi" className="relative py-28 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-50/50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-50/50 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 text-sm font-semibold uppercase tracking-[0.2em]">Jelajahi</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-neutral-dark mt-3 mb-4">
            <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">Destinasi</span> & Ziarah
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-4" />
          <p className="text-neutral-dark/60 max-w-2xl mx-auto text-lg">
            Jelajahi tempat-tempat bersejarah dan penuh keberkahan
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinasi.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-neutral-light rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${gradients[i]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative">
                <div className={`w-12 h-12 ${iconColors[i]} rounded-2xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110`}>
                  {i < 2 ? <Compass className="w-6 h-6" /> : <MapPin className="w-6 h-6" />}
                </div>
                <h3 className="font-bold text-lg text-neutral-dark mb-1 group-hover:text-primary-600 transition-colors">{item.name}</h3>
                <div className="flex items-center gap-1.5 text-xs text-neutral-dark/40 uppercase tracking-wider mb-2 font-medium">
                  <MapPin size={10} />
                  <span>{item.city}</span>
                </div>
                <p className="text-sm text-neutral-dark/60 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
