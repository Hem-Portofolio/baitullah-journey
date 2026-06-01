import useInView from '../hooks/useInView';

export default function Kontak() {
  const [ref, inView] = useInView();

  return (
    <section id="kontak" className="py-section-gap-mobile md:py-section-gap-desktop bg-surface" ref={ref}>
      <div className="max-w-7xl mx-auto px-grid-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div data-animate className={`space-y-6 md:space-y-8 ${inView ? 'in-view' : ''}`} style={{ transitionDelay: '0.15s' }}>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">Konsultasi Gratis Sekarang</h2>
            <p className="font-body-lg text-on-surface-variant">Tim ahli kami siap membantu Anda merencanakan perjalanan ibadah terbaik sesuai budget dan kebutuhan Anda.</p>
            <form className="space-y-5 md:space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                <div className="space-y-2">
                  <label className="font-label-lg text-primary">Nama Lengkap</label>
                  <input className="w-full border-b border-on-surface/20 bg-transparent py-3 focus:outline-none focus:border-secondary transition-colors duration-200 min-h-[44px]" placeholder="Masukkan nama Anda" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="font-label-lg text-primary">Nomor WhatsApp</label>
                  <input className="w-full border-b border-on-surface/20 bg-transparent py-3 focus:outline-none focus:border-secondary transition-colors duration-200 min-h-[44px]" placeholder="0812-xxxx-xxxx" type="tel" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label-lg text-primary">Pilihan Paket</label>
                <select className="w-full border-b border-on-surface/20 bg-transparent py-3 focus:outline-none focus:border-secondary transition-colors duration-200 min-h-[44px]">
                  <option>Umroh Reguler</option>
                  <option>Umroh VIP</option>
                  <option>Umroh Plus</option>
                  <option>Haji Plus</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-label-lg text-primary">Pesan Tambahan</label>
                <textarea className="w-full border-b border-on-surface/20 bg-transparent py-3 focus:outline-none focus:border-secondary transition-colors duration-200 min-h-[44px]" placeholder="Tuliskan pertanyaan Anda..." rows="3" />
              </div>
              <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-label-lg hover:bg-primary/90 transition-all duration-200 active:scale-[0.97] shadow-lg hover:shadow-xl min-h-[48px]">Kirim Pesan</button>
            </form>
          </div>
          <div data-animate className={`bg-secondary-fixed p-6 sm:p-8 md:p-12 rounded-3xl space-y-6 md:space-y-8 text-center lg:text-left ${inView ? 'in-view' : ''}`} style={{ transitionDelay: '0.3s' }}>
            <h3 className="font-headline-md text-2xl md:text-3xl text-on-secondary-fixed">Butuh Respon Cepat?</h3>
            <p className="text-on-secondary-fixed-variant">Hubungi layanan Customer Service kami via WhatsApp yang aktif 24/7 untuk membantu Anda.</p>
            <a
              href="https://wa.me/#"
              className="inline-flex items-center gap-3 md:gap-4 bg-primary text-on-primary px-6 sm:px-8 md:px-10 py-4 md:py-5 rounded-2xl font-headline-md text-base sm:text-lg md:text-xl hover:scale-105 transition-transform duration-200 luxury-shadow"
            >
              <span className="material-symbols-outlined text-2xl md:text-3xl">chat</span>
              Chat via WhatsApp
            </a>
            <div className="flex flex-col gap-3 md:gap-4 pt-6 md:pt-8 text-on-secondary-fixed-variant text-sm md:text-base">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <span className="material-symbols-outlined">location_on</span>
                <span>Jl. Jendral Sudirman No. 12, Jakarta Selatan</span>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <span className="material-symbols-outlined">call</span>
                <span>(021) 555-0123</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
