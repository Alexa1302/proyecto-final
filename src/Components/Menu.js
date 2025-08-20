import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faClipboardCheck, faHome, faUser, faBriefcase, faBuilding, faCalendarAlt, faBell, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import styles from "../Styles/Menu.module.css";
import Header from './Header';
import Notificaciones from "./Notificaciones";
import { useNotificaciones } from './NotificacionesContext';

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    //Cerra el menú cuando se cambia de página
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    // Usar el contexto para abrir y cerrar las notificaciones
    const { abrirNotificacion } = useNotificaciones(); // Obtenemos la función desde el contexto

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClickNotificaciones = (e) => {
        e.preventDefault();
        abrirNotificacion();
    };

    return (
        <div className={styles.appContainer}>
            <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <nav className={`${styles.menu} ${!isMenuOpen ? styles.closed : ''}`}>
                {isMenuOpen && 
                <ul>
                    <li>
                        <Link to="/Home"><FontAwesomeIcon icon={faHome} /> Home</Link>
                    </li>
                    <li>
                        <Link to="/Perfil"><FontAwesomeIcon icon={faUser} /> Perfil</Link>
                    </li>
                    <li>
                        <Link to="/Empleos"><FontAwesomeIcon icon={faBriefcase} /> Empleos</Link>
                    </li>
                    <li>
                        <Link to="/Cursos"><FontAwesomeIcon icon={faBook} /> Cursos</Link>
                    </li>
                    <li>
                        <Link to="/ConsultarAplicaciones"><FontAwesomeIcon icon={faClipboardCheck} /> Consultar Aplicaciones</Link>
                    </li>
                    <li>
                        <Link to="/Empresas"><FontAwesomeIcon icon={faBuilding} /> Empresas</Link>
                    </li>
                    <li>
                        <Link to="/Eventos"><FontAwesomeIcon icon={faCalendarAlt} /> Eventos</Link>
                    </li>
                    {/* Aquí hemos cambiado el comportamiento del <Link> para manejar el click sin navegación */}
                    <li>
                        <Link onClick={handleClickNotificaciones}>
                            <FontAwesomeIcon icon={faBell} /> Notificaciones
                        </Link>
                    </li>
                    <li>
                        <Link to="/"><FontAwesomeIcon icon={faSignOutAlt} /> Cerrar Sesión</Link>
                    </li>
                </ul>
                }
            </nav>
            {/* Componente de Notificaciones siempre está disponible, visible o no */}
            <Notificaciones />
        </div>
    );
};

export default Menu;