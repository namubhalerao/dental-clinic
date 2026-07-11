import { useLanguage } from "../../contexts/LanguageContext";
import { useState } from "react";

const cases = [
  { id: 'clip', prefix: 'clip' },
  { id: 'bridge', prefix: 'dental-bridge' },
  { id: 'cancer', prefix: 'oral-cancer' },
  { id: 'ortho', prefix: 'orthodontic' },
  { id: 'wisdom', prefix: 'wisdom-tooth' },
  { id: 'zirconia', prefix: 'zirconia' }
];

export function Gallery() {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            Real Results
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            {t.gallery.sectionTitle}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((c) => (
            <div key={c.id} className="group rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
              <div className="relative aspect-[4/3] flex">
                {/* Before Image */}
                <div className="w-1/2 h-full relative border-r border-white/20">
                  <img 
                    src={`/gallery/${c.prefix}-before.jpg`} 
                    alt={`Before ${c.prefix}`} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded">
                    {t.gallery.before}
                  </div>
                </div>
                {/* After Image */}
                <div className="w-1/2 h-full relative">
                  <img 
                    src={`/gallery/${c.prefix}-after.jpg`} 
                    alt={`After ${c.prefix}`} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-primary/90 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded">
                    {t.gallery.after}
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg text-foreground">
                  {t.gallery.cases[c.id as keyof typeof t.gallery.cases]}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
