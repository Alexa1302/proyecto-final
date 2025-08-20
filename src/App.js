import { Routes, Route, useLocation } from "react-router-dom";
import Menu from "./Components/Menu";
import Home from "./Components/Home";
import Perfil from "./Components/Perfil";
import Empleos from "./Components/Empleos";
import Cursos from "./Components/Cursos";
import ConsultarAplicaciones from "./Components/ConsultarAplicaciones";
import Empresas from "./Components/Empresas";
import Login from "./Components/Login";
import { NotificacionesProvider } from "./Components/NotificacionesContext";
import HackatonesNacionales from "./Components/Eventos";

function App() {
  const location = useLocation();

  return (
    <NotificacionesProvider>
      <div>
        {/* El menú solo se muestra si no estás en Login o Registrarse */}
        {location.pathname !== "/" && location.pathname !== "/Registrarse" && <Menu />}

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Perfil" element={<Perfil />} />
          <Route path="/Empleos" element={<Empleos />} />
          <Route path="/Cursos" element={<Cursos />} />
          <Route path="/ConsultarAplicaciones" element={<ConsultarAplicaciones />} />
          <Route path="/Empresas" element={<Empresas />} />
          <Route path="/Eventos" element={<HackatonesNacionales />} />
        </Routes>
      </div>
    </NotificacionesProvider>
  );
}

export default App;