import React from "react";
import Slider from "react-slick";
import styles from "../Styles/LogrosCarousel.module.css";
import logro1 from "../Assets/Images/logro1.jpg";
import logro2 from "../Assets/Images/logro2.jpg";
import curso1 from "../Assets/Images/curso1.jpg";
import curso2 from "../Assets/Images/curso2.jpg";

function LogrosCarousel() {
  const settings = {
    dots: true, // Mostrar puntos de navegación
    infinite: true, // Permitir desplazamiento infinito
    speed: 500, // Velocidad de transición
    slidesToShow: 1, // Número de imágenes a mostrar
    slidesToScroll: 1, // Número de imágenes a desplazar
    autoplay: true, // Reproducción automática
    autoplaySpeed: 2000, // Velocidad de la reproducción automática
  };

  return (
    <div className={styles.carousel}>
      <h2>Logros Destacados y Cursos Disponibles</h2>
      <Slider {...settings}>
        <div>
          <img src={logro1} alt="Logro 1" />
        </div>
        <div>
          <img src={logro2} alt="Logro 2" />
        </div>
        <div>
          <img src={curso1} alt="Curso 1" />
        </div>
        <div>
          <img src={curso2} alt="Curso 2" />
        </div>
      </Slider>
    </div>
  );
}

export default LogrosCarousel;
