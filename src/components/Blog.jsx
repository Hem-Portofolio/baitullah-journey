import { motion } from 'framer-motion';
import { Calendar, ArrowRight, BookOpen } from 'lucide-react';
import { blogs } from '../data';

const bgColors = [
  'from-emerald-100 to-emerald-200',
  'from-blue-100 to-blue-200',
  'from-amber-100 to-amber-200',
  'from-rose-100 to-rose-200',
];

export default function Blog() {
  return (
    <section id="blog" className="relative py-28 bg-neutral-light overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-50/50 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 text-sm font-semibold uppercase tracking-[0.2em]">Edukasi</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-neutral-dark mt-3 mb-4">
            Blog & <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">Artikel</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-4" />
          <p className="text-neutral-dark/60 max-w-2xl mx-auto text-lg">
            Tips, panduan, dan informasi terbaru seputar Umroh & Haji
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className={`h-44 bg-gradient-to-br ${bgColors[i]} flex items-center justify-center relative overflow-hidden`}>
                <BookOpen className="w-12 h-12 text-white/60 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-neutral-dark shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-neutral-dark/50 mb-3">
                  <Calendar size={12} />
                  <span>{post.date}</span>
                </div>
                <h3 className="font-bold text-neutral-dark mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-neutral-dark/60 mb-4 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-500 group-hover:text-primary-600 transition-colors">
                  Baca Selengkapnya
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
