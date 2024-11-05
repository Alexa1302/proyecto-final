import React from "react";
import styles from "../Styles/Features.module.css";

function Features() {
  return (
    <section className={styles.features}>
      <h2 className={styles.title}>Características Destacadas</h2>
      <div className={styles.featuresList}>
        <div className={styles.featuresItem}>
          <h3>Oportunidades de Desarrollo</h3>
          <p>Accede a cursos y recursos diseñados para potenciar tu carrera profesional.</p>
        </div>
        <div className={styles.featuresItem}>
          <h3>Comunidad de Apoyo</h3>
          <p>Conéctate con otras mujeres que comparten tus intereses y objetivos.</p>
        </div>
        <div className={styles.featuresItem}>
          <h3>Flexibilidad Laboral</h3>
          <p>Descubre empleos que promueven un equilibrio entre trabajo y vida personal.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;