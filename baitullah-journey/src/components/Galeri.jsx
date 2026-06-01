import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Eye } from 'lucide-react';
import { galeri } from '../data';

export default function Galeri() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="galeri" className="relative py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-30" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-50/50 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 text-sm font-semibold uppercase tracking-[0.2em]">Dokumentasi</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-neutral-dark mt-3 mb-4">
            <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">Galeri</span> Kegiatan
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-4" />
          <p className="text-neutral-dark/60 max-w-2xl mx-auto text-lg">
            Dokumentasi perjalanan ibadah jamaah Baitullah Journey
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galeri.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`relative group overflow-hidden rounded-xl cursor-pointer ${
                i === 0 ? 'md:col-span-2 md:row-span-2' : 'aspect-[4/3]'
              }`}
              onClick={() => setSelected(item)}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-500">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <span className="absolute bottom-4 left-4 text-white text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              >
                <X size={20} />
              </button>
              <img src={selected.src} alt={selected.alt} className="w-full h-full object-contain" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white font-medium">{selected.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
