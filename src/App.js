import React from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import Home from "./Components/Home";
import Perfil from "./Components/Perfil";
import Empleos from "./Components/Empleos";
import Cursos from "./Components/Cursos";
import ConsultarAplicaciones from "./Components/ConsultarAplicaciones";
import Empresas from "./Components/Empresas";
import Eventos from "./Components/Eventos";
import Login from "./Components/Login";
import { NotificacionesProvider } from "./Components/NotificacionesContext";

function App() {
  return (
    <NotificacionesProvider>
      <div>
        <Menu />
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
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </NotificacionesProvider>
  );
}

export default App;