import { useLanguage } from "../../contexts/LanguageContext";
import { Button } from "../ui/button";
import { Phone, ArrowRight, ShieldCheck, Clock } from "lucide-react";

export function Hero() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-accent/30 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Barshi's Trusted Dental Care
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
            {t.hero.title}
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-full gap-2 text-base h-14 px-8" onClick={() => scrollTo("appointment")}>
              {t.hero.primaryCta}
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full gap-2 text-base h-14 px-8" onClick={() => scrollTo("services")}>
              {t.hero.secondaryCta}
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-border/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <p className="text-sm font-medium text-foreground leading-tight">Advanced<br/>Technology</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <p className="text-sm font-medium text-foreground leading-tight">Flexible<br/>Timings</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
