import React from "react";
import styles from "../Styles/HeroSection.module.css";

function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1>Femploy: Conectando Mujeres con Oportunidades Laborales</h1>
        <p>Bienestar, Equilibrio y Desarrollo Profesional</p>
        <button>Explorar Empleos</button>
      </div>
    </section>
  );
}

export default HeroSection;