import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import ThoughtLeadership from "@/components/ThoughtLeadership";
import Contact from "@/components/Contact";
import SystemHealth from "@/components/SystemHealth";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Philosophy />
      <Projects />
      <Experience />
      <ThoughtLeadership />
      <Contact />
      <SystemHealth />
      <Footer />
    </main>
  );
}
