import React from "react";
import HeroSection from "../Components/HeroSection";
import LogrosCarousel from "../Components/LogrosCarousel";
import Features from "../Components/Features";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div>
      <HeroSection />
      <LogrosCarousel /> {/* Carrusel de logros y cursos */}
      <Features />
      <Footer />
    </div>
  );
}

export default Home;