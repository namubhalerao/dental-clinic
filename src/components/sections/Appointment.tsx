import { useLanguage } from "../../contexts/LanguageContext";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { CheckCircle2 } from "lucide-react";

interface AppointmentData {
  name: string;
  phone: string;
  age: string;
  gender: string;
  service: string;
  date: string;
  time: string;
  message: string;
}

const CLINIC_WHATSAPP = "919021186370";

export function Appointment() {
  const { t } = useLanguage();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<AppointmentData>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data: AppointmentData) => {
    const message = t.appointment.waTemplate
      .replace("{name}", data.name)
      .replace("{phone}", data.phone)
      .replace("{age}", data.age)
      .replace("{gender}", data.gender)
      .replace("{treatment}", data.service)
      .replace("{date}", data.date)
      .replace("{time}", data.time)
      .replace("{message}", data.message || "-");

    setSubmitted(true);
    window.open(`https://wa.me/${CLINIC_WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank");
    reset();
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section id="appointment" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-[2.5rem] shadow-xl border border-border p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t.appointment.sectionTitle}
            </h2>
            <p className="text-muted-foreground">
              {t.appointment.subtitle}
            </p>
          </div>

          {submitted && (
            <div className="mb-6 flex items-center gap-3 rounded-xl bg-primary/10 text-primary px-5 py-4">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <p className="text-sm font-medium">{t.appointment.successMessage}</p>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">{t.appointment.nameLabel}</Label>
                <Input 
                  id="name" 
                  {...register("name", { required: true })} 
                  placeholder="John Doe"
                  className="bg-muted/50"
                />
                {errors.name && <p className="text-xs text-destructive">Required</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">{t.appointment.phoneLabel}</Label>
                <Input 
                  id="phone" 
                  type="tel"
                  {...register("phone", { required: true, pattern: /^[0-9+\-\s]{10,15}$/ })} 
                  placeholder="90211 86370"
                  className="bg-muted/50"
                />
                {errors.phone && <p className="text-xs text-destructive">Enter a valid phone number</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="age">{t.appointment.ageLabel}</Label>
                <Input 
                  id="age" 
                  type="number"
                  min={0}
                  max={120}
                  {...register("age", { required: true, min: 0, max: 120 })} 
                  placeholder="30"
                  className="bg-muted/50"
                />
                {errors.age && <p className="text-xs text-destructive">Required</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">{t.appointment.genderLabel}</Label>
                <select 
                  id="gender"
                  {...register("gender", { required: true })}
                  className="flex h-12 w-full rounded-md border border-input bg-muted/50 px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="">{t.appointment.selectGender}</option>
                  <option value={t.appointment.genderOptions.male}>{t.appointment.genderOptions.male}</option>
                  <option value={t.appointment.genderOptions.female}>{t.appointment.genderOptions.female}</option>
                  <option value={t.appointment.genderOptions.other}>{t.appointment.genderOptions.other}</option>
                </select>
                {errors.gender && <p className="text-xs text-destructive">Required</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="service">{t.appointment.serviceLabel}</Label>
                <select 
                  id="service"
                  {...register("service", { required: true })}
                  className="flex h-12 w-full rounded-md border border-input bg-muted/50 px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="">{t.appointment.selectService}</option>
                  {t.services.items.map((s, i) => (
                    <option key={i} value={s.title}>{s.title}</option>
                  ))}
                </select>
                {errors.service && <p className="text-xs text-destructive">Required</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">{t.appointment.dateLabel}</Label>
                <Input 
                  id="date" 
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  {...register("date", { required: true })} 
                  className="bg-muted/50"
                />
                {errors.date && <p className="text-xs text-destructive">Required</p>}
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="time">{t.appointment.timeLabel}</Label>
                <Input 
                  id="time" 
                  type="time"
                  {...register("time", { required: true })} 
                  className="bg-muted/50"
                />
                {errors.time && <p className="text-xs text-destructive">Required</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">{t.appointment.messageLabel}</Label>
              <Textarea 
                id="message" 
                {...register("message")} 
                placeholder="Any specific issues or symptoms?"
                className="bg-muted/50 resize-none"
              />
            </div>

            <Button type="submit" size="lg" className="w-full text-base h-14 rounded-xl">
              {t.appointment.submitText}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
