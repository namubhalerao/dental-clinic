import { useLanguage } from "../../contexts/LanguageContext";
import { CheckCircle2 } from "lucide-react";

export function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {t.whyChooseUs.sectionTitle}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {t.whyChooseUs.points.map((point, i) => (
            <div key={i} className="flex gap-4 p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
              <div className="shrink-0 mt-1">
                <CheckCircle2 className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                <p className="text-primary-foreground/80 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
