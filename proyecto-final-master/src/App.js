import React from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import Home from "./Pages/Home"; // Cambia la ruta para el Home
import Perfil from "./Components/Perfil";
import Empleos from "./Components/Empleos";
import Cursos from "./Components/Cursos";
import ConsultarAplicaciones from "./Components/ConsultarAplicaciones";
import Empresas from "./Components/Empresas";
import Eventos from "./Components/Eventos";
import Notificaciones from "./Components/Notificaciones";
import Login from "./Components/Login";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <>
      <Menu /> {/* Menú de navegación que puede incluir enlaces */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/Empleos" element={<Empleos />} />
        <Route path="/Cursos" element={<Cursos />} />
        <Route path="/ConsultarAplicaciones" element={<ConsultarAplicaciones />} />
        <Route path="/Empresas" element={<Empresas />} />
        <Route path="/Eventos/HackatonesInternacionales" element={<Eventos />} />
        <Route path="/Eventos/HackatonesNacionales" element={<Eventos />} />
        <Route path="/Eventos/RankingNacional" element={<Eventos />} />
        <Route path="/Eventos/RankingInternacional" element={<Eventos />} />
        <Route path="/Notificaciones" element={<Notificaciones />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;