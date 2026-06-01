import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import PaketUmroh from './components/PaketUmroh';
import PaketHaji from './components/PaketHaji';
import Persiapan from './components/Persiapan';
import Destinasi from './components/Destinasi';
import Testimoni from './components/Testimoni';
import Galeri from './components/Galeri';
import Blog from './components/Blog';
import Kontak from './components/Kontak';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <WhyUs />
        <PaketUmroh />
        <PaketHaji />
        <Persiapan />
        <Destinasi />
        <Testimoni />
        <Galeri />
        <Blog />
        <Kontak />
      </main>
      <Footer />
    </>
  );
}

export default App;
