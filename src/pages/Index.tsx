import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { TerminalSection } from "@/components/sections/TerminalSection";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <h1 className="sr-only">Ishit Atwal — DevOps & Cloud Engineer Portfolio</h1>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <TerminalSection />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
