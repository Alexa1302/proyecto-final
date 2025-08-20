import { Link } from "react-router-dom";
import Slider from "react-slick";
import logro1 from "../Assets/logro1.jpg";
import logro2 from "../Assets/logro2.jpg";
import curso1 from "../Assets/curso1.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../Styles/Home.module.css";
import Footer from "../Components/Footer";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.overlay}>
          <h1>Empoderando a las Mujeres e Innovando el Mundo de la Tecnología</h1>
          <p>Bienestar, Equilibrio y Desarrollo Profesional</p>
          <Link to="/Empleos">
            <button className={styles.button}>Explorar Empleos</button>
          </Link>
        </div>
      </section>

      {/* Carrusel */}
      <div className={styles.carousel}>
        <h2>Logros Destacados y Cursos Disponibles</h2>
        <Slider {...settings}>
          <div className={styles.slide}>
            <img src={logro1} alt="Logro 1" className={styles.image} />
          </div>
          <div className={styles.slide}>
            <img src={logro2} alt="Logro 2" className={styles.image} />
          </div>
          <div className={styles.slide}>
            <img src={curso1} alt="Curso 1" className={styles.image} />
          </div>
        </Slider>
      </div>

      {/* Features */}
      <section className={styles.features}>
        <h2 className={styles.title}>Características Destacadas</h2>
        <div className={styles.featureList}>
          <div className={styles.featureItem}>
            <h3>Oportunidades de Desarrollo</h3>
            <p>
              Accede a cursos y recursos diseñados para potenciar tu carrera
              profesional.
            </p>
          </div>
          <div className={styles.featureItem}>
            <h3>Comunidad de Apoyo</h3>
            <p>
              Conéctate con otras mujeres que comparten tus intereses y
              objetivos.
            </p>
          </div>
          <div className={styles.featureItem}>
            <h3>Flexibilidad Laboral</h3>
            <p>
              Descubre empleos que promueven un equilibrio entre trabajo y vida
              personal.
            </p>
          </div>
        </div>
      </section>
        <Footer />
    </div>
  );
}

export default Home;