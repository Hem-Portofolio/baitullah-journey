import { blogs } from '../data';
import useInView from '../hooks/useInView';

const bgColors = [
  'bg-primary/10',
  'bg-secondary/10',
  'bg-primary-fixed-dim/20',
  'bg-secondary-fixed-dim/20',
];

export default function Blog() {
  const [ref, inView] = useInView();

  return (
    <section id="blog" className="py-section-gap-mobile md:py-section-gap-desktop bg-surface overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-grid-margin">
        <div data-animate className={`text-center mb-12 md:mb-16 ${inView ? 'in-view' : ''}`} style={{ transitionDelay: '0.1s' }}>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4">Blog & Artikel</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-4" />
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Tips, panduan, dan informasi terbaru seputar Umroh & Haji</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((post, i) => (
            <article
              key={post.title}
              data-animate
              className={`group bg-surface-container-low rounded-2xl overflow-hidden luxury-shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${inView ? 'in-view' : ''}`}
              style={{ transitionDelay: `${0.15 + i * 0.1}s` }}
            >
              <div className={`h-36 md:h-44 ${bgColors[i]} flex items-center justify-center relative overflow-hidden`}>
                <span className="material-symbols-outlined text-4xl md:text-5xl text-primary/40 group-hover:scale-110 transition-transform duration-500">menu_book</span>
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4">
                  <span className="px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 md:py-1.5 bg-white/90 backdrop-blur-sm rounded-full font-label-sm text-[10px] sm:text-xs text-on-surface shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-5 md:p-6">
                <div className="flex items-center gap-2 font-label-sm text-xs text-on-surface-variant/50 mb-3">
                  <span className="material-symbols-outlined text-xs">calendar_today</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="font-headline-md text-base md:text-lg text-on-surface mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="font-body-md text-sm text-on-surface-variant mb-4 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 font-label-lg text-sm text-primary transition-colors duration-200">
                  Baca Selengkapnya
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform duration-200">arrow_forward</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
