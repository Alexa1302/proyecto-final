import styles from "../Styles/Eventos.module.css";
import Footer from "./Footer";

function Eventos(){
return(
  //Hackatones Nacionales
  <div className={styles.contAiner}>
        <div className={styles.tablacon}>
            <h1 className={styles.tittulo}>Hackathon Nacional Femenina: ¡Únete a la Revolución de la Programación!</h1>
        </div>
        <div className={styles.containerCard}>
             <div className={styles.ProfileCard}>
                <h2 className={styles.ProfileName}> Ciberseguridad</h2>
                <p className={styles.ProfileDescription}> Colombia, 20 de diciembre de 2024. <br/> <br/> 
                Se abordara temas como Detección y prevención de amenazas, Análisis de vulnerabilidades y 
                Respuesta a incidentes.</p>  
                <div className={styles.ProfileButton}> 
                    <button>Inscribirse</button>
                </div><br/> <br/> 
            </div>
            <div className={styles.ProfileCard}>
                <h2 className={styles.ProfileName}>Diseño Web</h2>
                <p className={styles.ProfileDescription}>Colombia, 25 de enero del 2025. <br/> <br/> 
                Se abordara temas como Interfaces de usuario intuitivas, Experiencia de usuario, Diseño responsivo y Accesibilidad</p>        
                <div className={styles.ProfileButton}> 
                    <button>Inscribirse</button>
                </div><br/> <br/> 
                
            </div>
            <div className={styles.ProfileCard}>
                <h2 className={styles.ProfileName}> IA</h2>
                <p className={styles.ProfileDescription}>Colombia, 28 de febrero del 2025. <br/> <br/> 
                Se abordara temas como Aprendizaje automático, Procesamiento del lenguaje natural,Visión por computadora y Robótica</p>        
                <div className={styles.ProfileButton}> 
                    <button>Inscribirse</button>
                </div><br/> <br/>
            </div>
        </div>

        {/* Hackatones Internacionales*/}
        <div className={styles.tablacon}>
              <h1 className={styles.tittulo}>Hackathon Internacional Femenina: ¡Únete a la Revolución de la Programación!</h1>
          </div>
          <div className={styles.containerCard}>
               <div className={styles.ProfileCard}>
                  <h2 className={styles.ProfileName}> Ciberseguridad</h2>
                  <p className={styles.ProfileDescription}> Estados Unidos, 15 de enero de 2025. <br/> <br/> 
                  Se explorarán desafíos como la creación de soluciones innovadoras, optimización de algoritmos y desarrollo de aplicaciones colaborativas.</p>  
                  <div className={styles.ProfileButton}> 
                      <button>Inscribirse</button>
                  </div><br/> <br/> 
              </div>
              <div className={styles.ProfileCard}>
                  <h2 className={styles.ProfileName}>Desarrollo</h2>
                  <p className={styles.ProfileDescription}>Canadá, 25 de enero del 2025. <br/> <br/> 
                  Se desafiará a los participantes a resolver problemas complejos, diseñar sistemas escalables y crear soluciones tecnológicas impactantes.</p>        
                  <div className={styles.ProfileButton}> 
                      <button>Inscribirse</button>
                  </div><br/> <br/> 
                  
              </div>
              <div className={styles.ProfileCard}>
                  <h2 className={styles.ProfileName}> Innovación</h2>
                  <p className={styles.ProfileDescription}>Reino Unido, 28 de febrero del 2025. <br/> <br/> 
                  Los participantes tendrán la oportunidad de trabajar en proyectos de software, mejorar la experiencia de usuario y construir prototipos funcionales en tiempo real.</p>        
                  <div className={styles.ProfileButton}> 
                      <button>Inscribirse</button>
                  </div><br/> <br/>
              </div>
          </div>

        <Footer />
  </div>
)};

export default Eventos;