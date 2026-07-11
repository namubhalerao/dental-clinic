import { useLanguage } from "../../contexts/LanguageContext";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Stethoscope, Activity, Sparkles, Search, Bone, Smile, Baby, ShieldCheck, Droplets, Scissors, ClipboardCheck } from "lucide-react";

export function Services() {
  const { t } = useLanguage();

  const icons = [
    <ClipboardCheck className="w-8 h-8" />,
    <Droplets className="w-8 h-8" />,
    <Stethoscope className="w-8 h-8" />,
    <Bone className="w-8 h-8" />,
    <Smile className="w-8 h-8" />,
    <Activity className="w-8 h-8" />,
    <Sparkles className="w-8 h-8" />,
    <Search className="w-8 h-8" />,
    <Baby className="w-8 h-8" />,
    <ShieldCheck className="w-8 h-8" />,
    <Scissors className="w-8 h-8" />
  ];

  return (
    <section id="services" className="py-24 bg-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            Expert Care
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            {t.services.sectionTitle}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  {icons[index % icons.length]}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
