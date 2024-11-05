import React from 'react';
import '../Styles/Notificaciones.css' 

const Notificaciones = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="notificaciones">
      <div className="notificaciones-header">
        <h2>Avisos</h2>
        <button onClick={onClose}>X</button>
      </div>
      <div className="notificaciones-body">
        <h2>Nuevas Ofertas</h2>
        <p> Revisa las nuevas ofertas para ti</p>

        <h2>Notificaciones</h2>
        <p> No hay notificaciones pendientes</p>
      </div>
      
    </div>
  );
};

export default Notificaciones;