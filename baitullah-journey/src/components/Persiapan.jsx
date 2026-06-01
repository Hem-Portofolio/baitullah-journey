import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, FileText, HelpCircle, Luggage } from 'lucide-react';
import { persiapanItems, faqItems } from '../data';

const iconMap = { FileText, HelpCircle, Luggage };

export default function Persiapan() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section id="persiapan" className="relative py-28 bg-neutral-light overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 text-sm font-semibold uppercase tracking-[0.2em]">Panduan</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-neutral-dark mt-3 mb-4">
            Persiapan <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">Ibadah</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-4" />
          <p className="text-neutral-dark/60 max-w-2xl mx-auto text-lg">
            Pastikan perjalanan ibadah Anda lancar dengan persiapan yang matang
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {persiapanItems.map((item, i) => {
            const Icon = iconMap[item.icon.name] || FileText;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-50 to-primary-100 group-hover:from-primary-500 group-hover:to-primary-600 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 shadow-lg shadow-primary-500/0 group-hover:shadow-primary-500/20">
                  <Icon className="w-7 h-7 text-primary-500 group-hover:text-white transition-all duration-500" />
                </div>
                <h3 className="font-bold text-lg text-neutral-dark mb-3">{item.title}</h3>
                <p className="text-neutral-dark/60 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold text-neutral-dark">
              Tanya <span className="text-primary-500">Jawab</span>
            </h3>
            <div className="w-12 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mt-3" />
          </motion.div>

          <div className="space-y-3">
            {faqItems.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className={`w-full flex items-center justify-between p-5 text-left font-medium rounded-2xl transition-all duration-300 ${
                    openFaq === i
                      ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20'
                      : 'bg-white text-neutral-dark hover:bg-primary-50 shadow-sm'
                  }`}
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                    openFaq === i ? 'rotate-180' : ''
                  }`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-white mx-2 px-5 py-4 rounded-b-2xl shadow-sm border border-gray-100 -mt-2 text-neutral-dark/70 text-sm leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
