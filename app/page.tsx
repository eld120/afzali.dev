import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
export default function Home() {
  return (
    <div>
      {/* hero section */}
      <Hero />
      <Skills />
      <Portfolio />
    </div>
  );
}
