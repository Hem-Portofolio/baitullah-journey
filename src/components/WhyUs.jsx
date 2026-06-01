import { motion } from 'framer-motion';
import { whyUsCards, stats } from '../data';

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-50" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50/50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-50/50 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 text-sm font-semibold uppercase tracking-[0.2em]">Keunggulan Kami</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-neutral-dark mt-3 mb-4">
            Mengapa Memilih{' '}
            <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
              Baitullah Journey
            </span>
            ?
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-4" />
          <p className="text-neutral-dark/60 max-w-2xl mx-auto text-lg">
            Kami berkomitmen memberikan pelayanan terbaik untuk kenyamanan ibadah Anda
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {whyUsCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-primary-100"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary-50/0 to-primary-50/0 group-hover:from-primary-50/50 group-hover:to-primary-50/0 rounded-2xl transition-all duration-500 pointer-events-none" />
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-50 to-primary-100 group-hover:from-primary-500 group-hover:to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-all duration-500 shadow-lg shadow-primary-500/0 group-hover:shadow-primary-500/20">
                  <card.icon className="w-8 h-8 text-primary-500 group-hover:text-white transition-all duration-500" />
                </div>
                <h3 className="font-bold text-lg text-neutral-dark mb-2 text-center">{card.title}</h3>
                <p className="text-neutral-dark/60 text-sm leading-relaxed text-center">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-3 gap-8 p-8 bg-gradient-to-r from-primary-500/5 via-secondary-500/5 to-primary-500/5 rounded-3xl border border-primary-100/50">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-secondary-500 to-secondary-600 bg-clip-text text-transparent font-display">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-dark/60 mt-2 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
