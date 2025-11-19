import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Stats from "@/components/Stats";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      
      <footer className="bg-muted/30 py-6 text-center text-muted-foreground">
        <p>&copy; 2025 Pavlo. Всі права захищені.</p>
      </footer>
    </div>
  );
};

export default Index;
