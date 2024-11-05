import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faClipboardCheck, faHome, faUser, faBriefcase, faBuilding, faCalendarAlt, faBell, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Notificaciones from './Notificaciones';

const Menu = () => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const [isNotificationsOpen, setNotificationsOpen] = useState(false);

    const toggleNotifications = () => {
      setNotificationsOpen(!isNotificationsOpen);
  };

    const toggleSubMenu = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
      };

      return (
        <nav className="menu">
            <ul>
                <li>
                    <Link to="/">
                        <FontAwesomeIcon icon={faHome} /> Home
                    </Link>
                </li>
                <li>
                    <Link to="/Perfil">
                        <FontAwesomeIcon icon={faUser } /> Perfil
                    </Link>
                </li>
                <li>
                    <Link to="/Empleos">
                        <FontAwesomeIcon icon={faBriefcase} /> Empleos
                    </Link>
                </li>
                <li>
                    <Link to="/Cursos">
                        <FontAwesomeIcon icon={faBook} /> Cursos
                    </Link>
                </li>
                <li>
                    <Link to="/ConsultarAplicaciones">
                        <FontAwesomeIcon icon={faClipboardCheck} /> Consultar Aplicaciones
                    </Link>
                </li>
                <li>
                    <Link to="/Empresas">
                        <FontAwesomeIcon icon={faBuilding} /> Empresas
                    </Link>
                </li>
                <li onClick={toggleSubMenu}>
                    <span>
                        <FontAwesomeIcon icon={faCalendarAlt} /> Eventos
                    </span>
                    {isSubMenuOpen && (
                        <ul>
                            <li>
                                <Link to="/Eventos/HackatonesNacionales">Hackatones Nacionales</Link>
                                <Link to="/Eventos/HackatonesInternacionales">Hackatones Internacionales</Link>
                                <Link to="/Eventos/RankingNacional">Ranking Nacional</Link>
                                <Link to="/Eventos/RankingInternacional">Ranking Internacional</Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li onClick={toggleNotifications}>
                    <span>
                        <FontAwesomeIcon icon={faBell} /> Notificaciones
                    </span>
                </li>
                <li>
                    <Link to="/Login">
                        <FontAwesomeIcon icon={faSignOutAlt} /> Cerrar Sesión
                    </Link>
                </li>
            </ul>
            <Notificaciones isOpen={isNotificationsOpen} onClose={toggleNotifications} />
        </nav>
    );
};

export default Menu;