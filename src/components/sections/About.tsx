import { useLanguage } from "../../contexts/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Column */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-accent/20 relative z-10">
              {/* Fallback styling for image in case it's loading or transparent */}
              <img 
                src="/about/doctor.png" 
                alt="Dr. Somani" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Decorative block behind image */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-primary/5 rounded-3xl z-0" />
            
            {/* Floating badge */}
            <div className="absolute -left-8 top-1/4 bg-white p-4 rounded-2xl shadow-xl z-20 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                  10+
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Years of</p>
                  <p className="text-sm text-muted-foreground">Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              {t.about.sectionTitle}
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-6 leading-tight">
              Committed to Your <span className="text-primary">Perfect Smile</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t.about.description1}
            </p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              {t.about.description2}
            </p>

            <div className="pt-8 border-t border-border">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-6">
                {t.about.certificates}
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="aspect-[4/3] rounded-lg overflow-hidden border border-border bg-muted/30">
                  <img src="/certificates/bda-workshop.png" alt="BDA Workshop" className="w-full h-full object-contain p-2" />
                </div>
                <div className="aspect-[4/3] rounded-lg overflow-hidden border border-border bg-muted/30">
                  <img src="/certificates/guinness-world-records.png" alt="Guinness World Records" className="w-full h-full object-contain p-2" />
                </div>
                <div className="aspect-[4/3] rounded-lg overflow-hidden border border-border bg-muted/30">
                  <img src="/certificates/lead-academy-nox.png" alt="Lead Academy NOX" className="w-full h-full object-contain p-2" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
