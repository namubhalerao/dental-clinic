import { useLanguage } from "../../contexts/LanguageContext";
import { MapPin, Clock, Phone, Mail, BadgeCheck, MessageCircle, Navigation } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";

const CLINIC_PHONE = "919021186370";
const MAPS_ADDRESS_QUERY = encodeURIComponent(
  "Lokmangal Sahakari Patsanstha Building, Adava Rasta, Tilak Chowk, Barshi, District Solapur, Maharashtra 413401, India"
);

interface ContactFormData {
  name: string;
  phone: string;
  service: string;
  message: string;
}

export function Contact() {
  const { t } = useLanguage();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data: ContactFormData) => {
    const message = t.contact.waTemplate
      .replace("{name}", data.name)
      .replace("{phone}", data.phone)
      .replace("{treatment}", data.service || "-")
      .replace("{message}", data.message || "");
    setSubmitted(true);
    window.open(`https://wa.me/${CLINIC_PHONE}?text=${encodeURIComponent(message)}`, "_blank");
    reset();
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {t.contact.sectionTitle}
          </h2>
          <p className="text-muted-foreground">{t.contact.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-muted/30 border border-border">
                <div className="w-11 h-11 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold mb-2">{t.contact.addressTitle}</h3>
                <p className="text-sm text-muted-foreground whitespace-pre-line">{t.contact.address}</p>
              </div>

              <div className="p-6 rounded-2xl bg-muted/30 border border-border">
                <div className="w-11 h-11 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold mb-2">{t.contact.hoursTitle}</h3>
                <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">{t.contact.hours}</p>
              </div>

              <div className="p-6 rounded-2xl bg-muted/30 border border-border">
                <div className="w-11 h-11 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold mb-2">{t.contact.phoneTitle}</h3>
                <p className="text-sm text-muted-foreground">{t.contact.phone}</p>
              </div>

              <div className="p-6 rounded-2xl bg-muted/30 border border-border">
                <div className="w-11 h-11 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold mb-2">{t.contact.emailTitle}</h3>
                <p className="text-sm text-muted-foreground break-all">{t.contact.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-primary/5 border border-primary/10 text-sm text-primary font-medium">
              <BadgeCheck className="w-5 h-5 shrink-0" />
              {t.contact.registrationLabel}: {t.contact.registrationNo}
            </div>

            <div className="flex flex-wrap gap-3">
              <a href={`tel:+${CLINIC_PHONE}`}>
                <Button variant="outline" className="gap-2"><Phone className="w-4 h-4" />{t.contact.callNow}</Button>
              </a>
              <a href={`https://wa.me/${CLINIC_PHONE}`} target="_blank" rel="noreferrer">
                <Button variant="outline" className="gap-2"><MessageCircle className="w-4 h-4" />{t.contact.whatsappNow}</Button>
              </a>
              <a href={`https://www.google.com/maps/search/?api=1&query=${MAPS_ADDRESS_QUERY}`} target="_blank" rel="noreferrer">
                <Button variant="outline" className="gap-2"><Navigation className="w-4 h-4" />{t.contact.getDirections}</Button>
              </a>
            </div>

            <div className="rounded-2xl overflow-hidden border border-border h-64">
              <iframe
                title="Clinic Location"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${MAPS_ADDRESS_QUERY}&output=embed`}
              />
            </div>
          </div>

          <div className="bg-muted/30 border border-border rounded-[2rem] p-8">
            <h3 className="text-xl font-bold mb-6">{t.contact.formTitle}</h3>

            {submitted && (
              <div className="mb-6 rounded-xl bg-primary/10 text-primary px-4 py-3 text-sm font-medium">
                {t.appointment.successMessage}
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="c-name">{t.contact.formNameLabel}</Label>
                <Input id="c-name" {...register("name", { required: true })} className="bg-white" />
                {errors.name && <p className="text-xs text-destructive">Required</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="c-phone">{t.contact.formPhoneLabel}</Label>
                <Input id="c-phone" type="tel" {...register("phone", { required: true })} className="bg-white" />
                {errors.phone && <p className="text-xs text-destructive">Required</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="c-service">{t.contact.formServiceLabel}</Label>
                <select
                  id="c-service"
                  {...register("service")}
                  className="flex h-12 w-full rounded-md border border-input bg-white px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="">{t.appointment.selectService}</option>
                  {t.services.items.map((s, i) => (
                    <option key={i} value={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="c-message">{t.contact.formMessageLabel}</Label>
                <Textarea id="c-message" {...register("message")} className="bg-white resize-none" />
              </div>
              <Button type="submit" size="lg" className="w-full h-12 rounded-xl">
                {t.contact.formSubmit}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
