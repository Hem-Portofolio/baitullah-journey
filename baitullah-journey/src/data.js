import { ShieldCheck, Users, Building2, IdCard, Star, Clock, ThumbsUp, MapPin, FileText, HelpCircle, MessageSquare, Phone, Mail, Luggage } from 'lucide-react';

export const navLinks = [
  { label: 'Beranda', href: '#hero' },
  { label: 'Keunggulan', href: '#why-us' },
  { label: 'Paket Umroh', href: '#paket-umroh' },
  { label: 'Paket Haji', href: '#paket-haji' },
  { label: 'Persiapan', href: '#persiapan' },
  { label: 'Destinasi', href: '#destinasi' },
  { label: 'Testimoni', href: '#testimoni' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Blog', href: '#blog' },
  { label: 'Kontak', href: '#kontak' },
];

export const whyUsCards = [
  { icon: ShieldCheck, title: 'Izin Resmi Kemenag', desc: 'Terdaftar dan diawasi langsung oleh Kementerian Agama RI' },
  { icon: Users, title: 'Pembimbing Berpengalaman', desc: 'Didampingi pembimbing bersertifikat dan berpengalaman puluhan tahun' },
  { icon: Building2, title: 'Hotel Bintang 4–5', desc: 'Penginapan nyaman dekat Masjidil Haram dan Masjid Nabawi' },
  { icon: IdCard, title: 'Visa Terjamin', desc: 'Pengurusan visa cepat dan terjamin tanpa ribet' },
];

export const stats = [
  { value: '5000+', label: 'Jamaah Berangkat' },
  { value: '15+', label: 'Tahun Pengalaman' },
  { value: '4.9', label: 'Rating Kepuasan' },
];

export const paketUmroh = [
  { name: 'Reguler', duration: '9 Hari', hotel: 'Hotel Bintang 3', maskapai: 'Garuda Indonesia / Saudia', price: 'Rp 25.000.000', badge: null },
  { name: 'Plus', duration: '12 Hari', hotel: 'Hotel Bintang 4', maskapai: 'Garuda Indonesia / Saudia', price: 'Rp 35.000.000', badge: 'Terlaris' },
  { name: 'Premium', duration: '14 Hari', hotel: 'Hotel Bintang 5', maskapai: 'Garuda Indonesia / Emirates', price: 'Rp 50.000.000', badge: null },
  { name: 'VIP', duration: '16 Hari', hotel: 'Executive Suite', maskapai: 'Emirates / Qatar Airways', price: 'Rp 75.000.000', badge: 'Terbatas' },
];

export const paketHaji = [
  { name: 'Haji Reguler (ONH)', desc: 'Program haji reguler dengan antrian resmi Kemenag', wait: 'Estimasi antrian 15-20 tahun', price: 'Rp 45.000.000' },
  { name: 'Haji Plus (ONH+)', desc: 'Program haji plus dengan keberangkatan lebih cepat', wait: 'Estimasi antrian 3-5 tahun', price: 'Rp 120.000.000' },
];

export const persiapanItems = [
  { icon: FileText, title: 'Dokumen', desc: 'Passport (masa berlaku min. 12 bulan), Visa, Vaksin Meningitis, Pas foto' },
  { icon: HelpCircle, title: 'FAQ', desc: 'Apa saja yang perlu disiapkan? Kapan waktu terbaik? Bagaimana cara daftar?' },
  { icon: Luggage, title: 'Tips Packing', desc: 'Pakaian ihram, mukena, alas kaki nyaman, obat pribadi, perlengkapan ibadah' },
];

export const destinasi = [
  { name: 'Masjidil Haram', city: 'Makkah', desc: 'Kiblat umat Islam, tempat Ka\'bah dan sumur Zamzam berada' },
  { name: 'Masjid Nabawi', city: 'Madinah', desc: 'Masjid Nabi Muhammad SAW, tempat Raudhah yang mulia' },
  { name: 'Jabal Nur', city: 'Makkah', desc: 'Gua Hira tempat turunnya wahyu pertama Al-Quran' },
  { name: 'Jabal Uhud', city: 'Madinah', desc: 'Bukit bersejarah tempat terjadinya Perang Uhud' },
  { name: 'Masjid Quba', city: 'Madinah', desc: 'Masjid pertama yang dibangun oleh Nabi Muhammad SAW' },
];

export const testimonials = [
  { name: 'Ahmad Fauzi', city: 'Jakarta', rating: 5, text: 'Pelayanan sangat memuaskan. Pembimbingnya sabar dan ilmunya dalam. Sangat direkomendasikan!', image: null },
  { name: 'Siti Nurhaliza', city: 'Bandung', rating: 5, text: 'Alhamdulillah, perjalanan umroh pertama saya bersama Baitullah Journey sangat berkesan. Hotel dekat Masjidil Haram.', image: null },
  { name: 'H. Bambang S.', city: 'Surabaya', rating: 4, text: 'Paket haji plusnya recommended. Proses pemberangkatan cepat dan pelayanan bintang 5.', image: null },
  { name: 'Sarah Azizah', city: 'Makassar', rating: 5, text: 'Anak-anak saya juga ikut umroh, program keluarga sangat ramah anak. Terima kasih Baitullah Journey!', image: null },
  { name: 'Drs. H. Mahmud', city: 'Medan', rating: 5, text: 'Sudah 3 kali umroh dengan Baitullah Journey. Konsisten memberikan pelayanan terbaik.', image: null },
  { name: 'Rina Marlina', city: 'Yogyakarta', rating: 4, text: 'Persiapan berangkat sangat terorganisir. Briefing sebelum keberangkatan sangat membantu.', image: null },
];

export const galeri = [
  { src: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=600', alt: 'Masjidil Haram' },
  { src: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600', alt: 'Masjid Nabawi' },
  { src: 'https://images.unsplash.com/photo-1566140967404-b8b3932483f5?w=600', alt: 'Hotel Mitra' },
  { src: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=600', alt: 'Kegiatan Jamaah' },
  { src: 'https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?w=600', alt: 'Ka\'bah' },
  { src: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=600&h=600', alt: 'Penerbangan' },
];

export const blogs = [
  { title: 'Panduan Lengkap Umroh untuk Pemula', date: '25 Mei 2026', excerpt: 'Persiapan umroh pertama? Simak panduan lengkap dari dokumen hingga pelaksanaan ibadah.', category: 'Panduan' },
  { title: 'Doa-Doa Penting Selama Perjalanan Umroh', date: '18 Mei 2026', excerpt: 'Kumpulan doa yang dianjurkan dibaca selama perjalanan ibadah umroh di Tanah Suci.', category: 'Doa' },
  { title: 'Update Regulasi Haji 2026 dari Kemenag', date: '10 Mei 2026', excerpt: 'Informasi terbaru tentang kebijakan dan regulasi penyelenggaraan ibadah haji tahun ini.', category: 'Regulasi' },
  { title: 'Tips Sehat Selama di Tanah Suci', date: '2 Mei 2026', excerpt: 'Jaga kondisi fisik tetap prima selama ibadah dengan tips kesehatan berikut ini.', category: 'Tips' },
];

export const faqItems = [
  { q: 'Apa saja syarat pendaftaran umroh?', a: 'Passport masa berlaku min. 12 bulan, KTP, KK, akta nikah (bagi suami-istri), sertifikat vaksin meningitis, dan pas foto terbaru.' },
  { q: 'Berapa lama proses pengurusan visa?', a: 'Visa umroh biasanya diproses dalam 5-7 hari kerja setelah dokumen lengkap.' },
  { q: 'Apakah ada pembimbing selama di Tanah Suci?', a: 'Ya, setiap rombongan didampingi pembimbing bersertifikat dari Kemenag yang berpengalaman.' },
  { q: 'Bagaimana jika harga paket berubah?', a: 'Harga yang tercantum adalah harga terbaru. Jika terjadi perubahan, kami akan menginformasikan sebelumnya.' },
  { q: 'Apakah tersedia paket keluarga?', a: 'Ya, kami menyediakan paket khusus keluarga dengan harga spesial dan fasilitas ramah anak.' },
];
