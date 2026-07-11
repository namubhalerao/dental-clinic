import { useLanguage } from "../../contexts/LanguageContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export function FAQ() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-accent/20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground">
            {t.faq.sectionTitle}
          </h2>
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border">
          <Accordion type="single" collapsible className="w-full">
            {t.faq.questions.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-base font-semibold hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
