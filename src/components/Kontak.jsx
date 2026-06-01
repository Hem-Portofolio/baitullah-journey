import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle } from 'lucide-react';

export default function Kontak() {
  const [form, setForm] = useState({ nama: '', hp: '', email: '', paket: '', pesan: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const contactItems = [
    { icon: Phone, title: 'Telepon / WhatsApp', primary: '+62 812-3456-7890', secondary: '(021) 1234 567', color: 'bg-green-100 text-green-600', href: 'https://wa.me/6281234567890' },
    { icon: Mail, title: 'Email', primary: 'info@baitullahjourney.com', secondary: null, color: 'bg-blue-100 text-blue-600', href: 'mailto:info@baitullahjourney.com' },
    { icon: MapPin, title: 'Alamat Kantor', primary: 'Jl. Merdeka No. 123', secondary: 'Jakarta Pusat 10110', color: 'bg-rose-100 text-rose-600', href: null },
    { icon: Clock, title: 'Jam Operasional', primary: 'Senin - Jumat: 08.00 - 17.00', secondary: 'Sabtu: 08.00 - 14.00', color: 'bg-amber-100 text-amber-600', href: null },
  ];

  return (
    <section id="kontak" className="relative py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(27,107,69,0.03)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(201,150,58,0.03)_0%,transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 text-sm font-semibold uppercase tracking-[0.2em]">Hubungi Kami</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-neutral-dark mt-3 mb-4">
            <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">Kontak</span> & Pendaftaran
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-4" />
          <p className="text-neutral-dark/60 max-w-2xl mx-auto text-lg">
            Hubungi kami untuk konsultasi gratis dan pendaftaran
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-5"
          >
            {contactItems.map((item, i) => (
              <div key={i} className="flex items-start gap-4 group p-4 rounded-2xl hover:bg-neutral-light transition-colors">
                <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-dark text-sm">{item.title}</h3>
                  {item.href ? (
                    <a href={item.href} className="text-primary-500 hover:text-primary-600 transition-colors text-sm font-medium">
                      {item.primary}
                    </a>
                  ) : (
                    <p className="text-sm text-neutral-dark/70">{item.primary}</p>
                  )}
                  {item.secondary && (
                    <p className="text-sm text-neutral-dark/50">{item.secondary}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="pt-4">
              <a
                href="https://wa.me/6281234567890"
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3.5 rounded-2xl font-semibold transition-all duration-300 shadow-lg shadow-green-500/20 hover:shadow-green-500/30 active:scale-[0.98]"
              >
                <MessageCircle size={20} />
                WhatsApp Langsung
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-neutral-light rounded-3xl p-8 shadow-sm border border-gray-100 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-neutral-dark mb-1.5">Nama Lengkap</label>
                  <input
                    type="text" required value={form.nama}
                    onChange={(e) => setForm({ ...form, nama: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all bg-white"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-dark mb-1.5">No. HP</label>
                  <input
                    type="tel" required value={form.hp}
                    onChange={(e) => setForm({ ...form, hp: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all bg-white"
                    placeholder="08xxx"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-dark mb-1.5">Email</label>
                <input
                  type="email" value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all bg-white"
                  placeholder="email@anda.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-dark mb-1.5">Paket Minat</label>
                <select
                  value={form.paket}
                  onChange={(e) => setForm({ ...form, paket: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all bg-white"
                >
                  <option value="">Pilih paket...</option>
                  <option value="Umroh Reguler">Umroh Reguler</option>
                  <option value="Umroh Plus">Umroh Plus</option>
                  <option value="Umroh Premium">Umroh Premium</option>
                  <option value="Umroh VIP">Umroh VIP</option>
                  <option value="Haji Reguler">Haji Reguler (ONH)</option>
                  <option value="Haji Plus">Haji Plus (ONH+)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-dark mb-1.5">Pesan</label>
                <textarea
                  rows={3} value={form.pesan}
                  onChange={(e) => setForm({ ...form, pesan: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all bg-white resize-none"
                  placeholder="Tulis pesan Anda..."
                />
              </div>
              <button
                type="submit"
                className={`w-full py-3.5 rounded-2xl font-semibold transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2 ${
                  sent
                    ? 'bg-green-500 text-white shadow-lg shadow-green-500/20'
                    : 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30'
                }`}
              >
                {sent ? (
                  <>
                    <CheckCircle size={18} />
                    Terkirim!
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Kirim Pesan
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
