import { LanguageProvider } from "./contexts/LanguageContext";
import { Navbar } from "./components/sections/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Services } from "./components/sections/Services";
import { Gallery } from "./components/sections/Gallery";
import { WhyChooseUs } from "./components/sections/WhyChooseUs";
import { Appointment } from "./components/sections/Appointment";
import { FAQ } from "./components/sections/FAQ";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20 selection:text-primary">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Gallery />
          <WhyChooseUs />
          <Appointment />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
