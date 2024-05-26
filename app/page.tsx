import { FloatingNav } from "@/components/ui/floating-navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";

export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/#home",
    },
    {
      name: "About",
      link: "/#about",
    },
    {
      name: "Projects",
      link: "/#projects",
    },
  ];
  return (
    <div id="home">
      <FloatingNav navItems={navItems} />
      <div className="flex flex-col">
        <Hero />
        <div id="about">
          <About />
        </div>

        <div id="projects">
          <Projects />
        </div>
      </div>
    </div>
  );
}
