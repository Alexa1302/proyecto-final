import React from "react";
import Styles from "../Styles/HackatonesNacionales.css"
import img4 from "../Assets/img4.png"
import img5 from "../Assets/img5.png"
import img6 from "../Assets/img6.png"
import img7 from "../Assets/img7.png"

function HackatonesNacionales(){
return(
  <div className="contAiner">
        <div className="Cont-img4"> 
            <img src={img4} alt="imagen4" className="img-4"/>
        </div>
        <h1 className="tittulo">Hackathon Nacional Femenina: ¡Únete a la Revolución de la Programación!</h1>
        <div className="container-card">
             <div className="Profile-card">
                <h2 className="Profile-name"> Ciberseguridad</h2>
                <img className="Profile-img" src={img5} alt="card"/>
                <p className="Profile-description"> Colombia, 20 de diciembre de 2024. <br/> <br/> 
                Se abordara temas como Detección y prevención de amenazas, Análisis de vulnerabilidades, 
                Respuesta a incidentes y Privacidad de datos</p>        
                <button className="Profile-button"> Inscribirse</button> <br/> <br/> 
                
            </div>
            <div className="Profile-card">
                <h2 className="Profile-name">Diseño Web</h2>
                <img className="Profile-img" src={img7} alt="card"/>
                <p className="Profile-description">Colombia, 25 de enero del 2025. <br/> <br/> 
                Se abordara temas como Interfaces de usuario intuitivas, Experiencia de usuario, Diseño responsivo y Accesibilidad</p>        
                <button className="Profile-button"> Inscribirse</button><br/> <br/>
                
            </div>
            <div className="Profile-card">
                <h2 className="Profile-name"> IA</h2>
                <img className="Profile-img" src={img6} alt="card"/>
                <p className="Profile-description">Colombia, 28 de febrero del 2025. <br/> <br/> 
                Se abordara temas como Aprendizaje automático, Procesamiento del lenguaje natural,Visión por computadora y Robótica</p>        
                <button className="Profile-button"> Inscribirse</button> <br/> <br/> 
                
            </div>
        </div>
  </div>  
);

}
export default HackatonesNacionales;