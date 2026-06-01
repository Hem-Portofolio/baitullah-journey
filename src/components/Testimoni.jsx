import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data';

export default function Testimoni() {
  return (
    <section id="testimoni" className="relative py-28 bg-neutral-light overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,150,58,0.04)_0%,transparent_70%)]" />
      <div className="absolute top-10 right-10 w-3 h-3 border border-primary-300/30 rounded-full" />
      <div className="absolute bottom-10 left-10 w-2 h-2 bg-secondary-300/30 rounded-full" />
      <div className="absolute top-1/2 left-10 w-4 h-4 border border-secondary-300/20 rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 text-sm font-semibold uppercase tracking-[0.2em]">Pengalaman Nyata</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-neutral-dark mt-3 mb-4">
            Testimoni <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">Jamaah</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-4" />
          <p className="text-neutral-dark/60 max-w-2xl mx-auto text-lg">
            Pengalaman nyata dari jamaah yang telah berangkat bersama kami
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 relative"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary-50 to-transparent rounded-bl-3xl opacity-50" />
              <Quote className="absolute top-5 right-5 w-8 h-8 text-primary-100 group-hover:text-primary-200 transition-colors" />
              <div className="relative">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className={
                      j < t.rating
                        ? 'text-secondary-500 fill-secondary-500'
                        : 'text-gray-200'
                    } />
                  ))}
                </div>
                <p className="text-neutral-dark/70 text-sm mb-5 leading-relaxed italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-primary-500/20">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-neutral-dark">{t.name}</div>
                    <div className="text-xs text-neutral-dark/50">{t.city}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
