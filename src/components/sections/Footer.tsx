import { useLanguage } from "../../contexts/LanguageContext";
import { Smile, MessageCircle, Navigation } from "lucide-react";

const CLINIC_PHONE = "919021186370";
const MAPS_ADDRESS_QUERY = encodeURIComponent(
  "Lokmangal Sahakari Patsanstha Building, Adava Rasta, Tilak Chowk, Barshi, District Solapur, Maharashtra 413401, India"
);

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const navTargets: Array<[string, string]> = [
    [t.nav.home, "#home"],
    [t.nav.about, "#about"],
    [t.nav.services, "#services"],
    [t.nav.gallery, "#gallery"],
    [t.nav.bookAppointment, "#appointment"],
    [t.nav.contact, "#contact"],
  ];

  return (
    <footer className="bg-foreground text-background pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center text-white">
                <Smile className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg tracking-tight text-white">Dr. Somani Dental Clinic</span>
            </div>
            <p className="text-sm text-background/60 leading-relaxed">{t.footer.tagline}</p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">{t.footer.quickLinksTitle}</h4>
            <ul className="space-y-2 text-sm text-background/60">
              {navTargets.map(([label, href]) => (
                <li key={href}><a href={href} className="hover:text-white transition-colors">{label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">{t.footer.servicesTitle}</h4>
            <ul className="space-y-2 text-sm text-background/60">
              {t.services.items.slice(0, 6).map((s, i) => (
                <li key={i}>{s.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">{t.footer.contactTitle}</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li>{t.contact.phone}</li>
              <li className="break-all">{t.contact.email}</li>
              <li className="whitespace-pre-line">{t.footer.hours}</li>
              <li>
                <a href={`https://wa.me/${CLINIC_PHONE}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
                  <MessageCircle className="w-3.5 h-3.5" /> {t.contact.whatsappNow}
                </a>
              </li>
              <li>
                <a href={`https://www.google.com/maps/search/?api=1&query=${MAPS_ADDRESS_QUERY}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
                  <Navigation className="w-3.5 h-3.5" /> {t.footer.getDirections}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10 text-sm text-background/60">
          <p>{t.footer.rights.replace("{year}", String(year))}</p>
          <p>{t.footer.registration}</p>
        </div>
      </div>
    </footer>
  );
}
