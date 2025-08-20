import { useEffect, useRef } from 'react';
import { useNotificaciones } from './NotificacionesContext';
import styles from "../Styles/Notificaciones.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBell, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Notificaciones = () => {
  const { isOpen, cerrarNotificacion } = useNotificaciones();
  const notificacionesRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificacionesRef.current && !notificacionesRef.current.contains(event.target)) {
        cerrarNotificacion();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, cerrarNotificacion]);


  const notificaciones = [
    {
      id: 1,
      tipo: 'oferta',
      titulo: 'Nuevas Ofertas para ti',
      mensaje: '3 empresas buscan tu perfil',
      icono: faBriefcase,
      tiempo: 'Hace 2 horas',
      leida: false
    },
    {
      id: 2,
      tipo: 'mensaje',
      titulo: 'Mensaje nuevo',
      mensaje: 'Tienes un mensaje de Recursos Humanos',
      icono: faEnvelope,
      tiempo: 'Ayer',
      leida: true
    }
  ];

  if (!isOpen) return null;

  return (
    <div ref={notificacionesRef} className={styles.notificaciones}>
      <div className={styles.notificacionesHeader}>
        <div className={styles.headerContent}>
          <FontAwesomeIcon icon={faBell} className={styles.bellIcon} />
          <h2>Notificaciones</h2>
          <span className={styles.badge}>{notificaciones.filter(n => !n.leida).length}</span>
        </div>
        
        <button 
          onClick={cerrarNotificacion} 
          className={styles.closeButton}
          aria-label="Cerrar notificaciones"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      
      <div className={styles.notificacionesBody}>
        {notificaciones.length > 0 ? (
          notificaciones.map(notificacion => (
            <div 
              key={notificacion.id} 
              className={`${styles.notificacionItem} ${!notificacion.leida ? styles.noLeida : ''}`}
            >
              <div className={styles.notificacionIcon}>
                <FontAwesomeIcon icon={notificacion.icono} />
              </div>
              <div className={styles.notificacionContent}>
                <h3>{notificacion.titulo}</h3>
                <p>{notificacion.mensaje}</p>
                <span className={styles.notificacionTiempo}>{notificacion.tiempo}</span>
              </div>
              {!notificacion.leida && <div className={styles.notificacionPunto}></div>}
            </div>
          ))
        ) : (
          <div className={styles.sinNotificaciones}>
            <p>No hay notificaciones nuevas</p>
          </div>
        )}
      </div>
      
      <div className={styles.notificacionesFooter}>
        <button className={styles.verTodasBtn}>Ver todas las notificaciones</button>
      </div>
    </div>
  );
};

export default Notificaciones;