"use client";

import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
export default function Home() {
  return (
    <>
      {/* hero section */}
      <Hero />
      <Skills />
      <Portfolio />
    </>
  );
}
