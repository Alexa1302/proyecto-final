import React, { useState, useEffect } from 'react';
import styles from "../Styles/ConsultarAplicaciones.module.css";
import Footer from "../Components/Footer";

const ConsultarAplicaciones = () => {
  const [paises, setPaises] = useState([]);  // Guardamos los países en el estado
  const [loading, setLoading] = useState(true); // Estado para saber si está cargando
  const [selectedPais, setSelectedPais] = useState('');  // Estado para el país seleccionado
  const [searchTerm, setSearchTerm] = useState('');  // Estado para el término de búsqueda
  const [aplicaciones, setAplicaciones] = useState([]);  // Estado para las aplicaciones filtradas

  const data = [
    { id: 1, empresa: 'Bancolombia', especialidad: 'Desarrollo de Software', departamento: 'Tecnología y Desarrollo', ubicacion: 'Medellín', fechaSolicitud: '25-10-2024', estado: 'En proceso', pais: 'Colombia' },
    { id: 2, empresa: 'Sura', especialidad: 'Ciberseguridad', departamento: 'Infraestructura', ubicacion: 'Cali', fechaSolicitud: '25-10-2024', estado: 'Pendiente', pais: 'Colombia' },
    { id: 3, empresa: 'Sena', especialidad: 'Desarrollo de Software', departamento: 'Desarrollo de Producto', ubicacion: 'Bogotá', fechaSolicitud: '25-10-2024', estado: 'En revisión', pais: 'Colombia' },
    { id: 4, empresa: 'Google', especialidad: 'Inteligencia Artificial', departamento: 'Research and Development', ubicacion: 'Mountain View', fechaSolicitud: '26-10-2024', estado: 'En proceso', pais: 'United States' },
    { id: 5, empresa: 'Facebook', especialidad: 'Ciberseguridad', departamento: 'Infraestructura', ubicacion: 'Menlo Park', fechaSolicitud: '27-10-2024', estado: 'Pendiente', pais: 'United States' },
    { id: 6, empresa: 'Toyota', especialidad: 'Desarrollo de Software', departamento: 'Investigación y Desarrollo', ubicacion: 'Nagoya', fechaSolicitud: '30-10-2024', estado: 'En proceso', pais: 'Japan' },
    { id: 7, empresa: 'Sony', especialidad: 'Inteligencia Artificial', departamento: 'Desarrollo de Software', ubicacion: 'Tokio', fechaSolicitud: '01-11-2024', estado: 'Pendiente', pais: 'Japan' },
    { id: 8, empresa: 'Samsung', especialidad: 'Desarrollo de Software', departamento: 'Investigación y Desarrollo', ubicacion: 'Seúl', fechaSolicitud: '02-11-2024', estado: 'En revisión', pais: 'South Korea' },
    { id: 9, empresa: 'Hyundai', especialidad: 'Ciberseguridad', departamento: 'Desarrollo de Software', ubicacion: 'Seúl', fechaSolicitud: '05-11-2024', estado: 'En proceso', pais: 'South Korea' },
    { id: 10, empresa: 'Volkswagen', especialidad: 'Desarrollo de Software', departamento: 'Desarrollo de Producto', ubicacion: 'Wolfsburg', fechaSolicitud: '06-11-2024', estado: 'Pendiente', pais: 'Germany' },
    { id: 11, empresa: 'Siemens', especialidad: 'Automatización de Procesos', departamento: 'Investigación y Desarrollo', ubicacion: 'Múnich', fechaSolicitud: '07-11-2024', estado: 'En proceso', pais: 'Germany' },
    { id: 12, empresa: 'BMW', especialidad: 'Desarrollo de Software', departamento: 'Investigación', ubicacion: 'Múnich', fechaSolicitud: '08-11-2024', estado: 'En revisión', pais: 'Germany' },
    { id: 13, empresa: 'Tata Consultancy Services', especialidad: 'Big Data', departamento: 'Consultoría Tecnológica', ubicacion: 'Bangalore', fechaSolicitud: '09-11-2024', estado: 'En proceso', pais: 'India' },
    { id: 14, empresa: 'Infosys', especialidad: 'Desarrollo de Software', departamento: 'Ingeniería de Software', ubicacion: 'Bangalore', fechaSolicitud: '10-11-2024', estado: 'Pendiente', pais: 'India' },
    { id: 15, empresa: 'Wipro', especialidad: 'Desarrollo de Software', departamento: 'Investigación y Desarrollo', ubicacion: 'Bangalore', fechaSolicitud: '11-11-2024', estado: 'En revisión', pais: 'India' },
    { id: 16, empresa: 'Emirates', especialidad: 'Desarrollo de Software', departamento: 'Psicología Organizacional', ubicacion: 'Dubái', fechaSolicitud: '12-11-2024', estado: 'En proceso', pais: 'United Arab Emirates' },
    { id: 17, empresa: 'Qatar Airways', especialidad: 'Gestión de Talento', departamento: 'Psicología Laboral', ubicacion: 'Doha', fechaSolicitud: '13-11-2024', estado: 'Pendiente', pais: 'Qatar' },
    { id: 18, empresa: 'Lufthansa', especialidad: 'Desarrollo de Software', departamento: 'Psicología Organizacional', ubicacion: 'Frankfurt', fechaSolicitud: '14-11-2024', estado: 'En revisión', pais: 'Germany' },
    { id: 19, empresa: 'British Airways', especialidad: 'Desarrollo de Software', departamento: 'Psicología Organizacional', ubicacion: 'Londres', fechaSolicitud: '15-11-2024', estado: 'En proceso', pais: 'United Kingdom' },
    { id: 20, empresa: 'Air France', especialidad: 'Desarrollo de Software', departamento: 'Psicología Laboral', ubicacion: 'París', fechaSolicitud: '16-11-2024', estado: 'Pendiente', pais: 'France' }
  ];
  // Cargar los países al iniciar el componente
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al obtener los países');
        }
        return response.json();  // Convertimos la respuesta a JSON
      })
      .then((data) => {
        setPaises(data);  // Guardamos los países en el estado
        setLoading(false);  // Cambiamos el estado a 'no cargando'
      })
      .catch((error) => {
        console.error("Error al obtener los países", error);
        setLoading(false);
      });
}, []);

  // Filtrar las aplicaciones por el país seleccionado
  const handlePaisChange = (event) => {
    const paisSeleccionado = event.target.value;
    setSelectedPais(paisSeleccionado);
    

    // Filtramos las aplicaciones con el país seleccionado
    const aplicacionesFiltradas = data.filter((app) => app.pais === paisSeleccionado);
    setAplicaciones(aplicacionesFiltradas);
  };

  // Filtrar las aplicaciones por el término de búsqueda
  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    let aplicacionesFiltradas = data.filter((app) => {
      return (
        app.empresa.toLowerCase().includes(term.toLowerCase()) ||
        app.especialidad.toLowerCase().includes(term.toLowerCase()) ||
        app.departamento.toLowerCase().includes(term.toLowerCase()) ||
        app.ubicacion.toLowerCase().includes(term.toLowerCase()) ||
        app.fechaSolicitud.toLowerCase().includes(term.toLowerCase()) ||
        app.estado.toLowerCase().includes(term.toLowerCase()) ||
        app.pais.toLowerCase().includes(term.toLowerCase())
      );
    });

    // Filtramos por país también si se ha seleccionado uno
    if (selectedPais) {
      aplicacionesFiltradas = aplicacionesFiltradas.filter((app) => app.pais === selectedPais);
    }

    setAplicaciones(aplicacionesFiltradas);
  };

  const mostrarTodasLasAplicaciones = () => {
    setAplicaciones(data);
  };
  
  return (
    <div className={styles.bodyContainer}>
      <div className={styles.searchContainer}>
      <h1 className={styles.title}>Consultar Aplicaciones</h1>

      {loading ? (
        <p>Cargando países...</p>
      ) : (
        <>
          <select onChange={handlePaisChange} value={selectedPais} className={styles.selectPais}>
            <option value="">-- Selecciona un País --</option>
            {paises.map((pais) => (
              <option key={pais.cca3} value={pais.name.common}>
                {pais.name.common}
              </option>
            ))}
          </select>
        </>
      )}

      <div className={styles.barraBusqueda}>
        <input
          type="text"
          placeholder="Buscar Aplicaciones..."
          value={searchTerm}
          onChange={handleSearchChange}
          className={styles.inputBusqueda}
        />
      </div>
       {/* Botón para mostrar todas las aplicaciones */}
       <button onClick={mostrarTodasLasAplicaciones} className={styles.verTodasButton}>
          Ver todas las aplicaciones
        </button>
      </div>

      {/* Mostrar el resultado de las aplicaciones filtradas */}
      <div>
        {aplicaciones.length === 0 ? (
          <p className={styles.loadingText}>No hay aplicaciones disponibles para este filtro.</p>
        ) : (
          <table className={styles.table}>
            <thead className={styles.header}>
              <tr>
                <th className={styles.th}>Empresa</th>
                <th className={styles.th}>Especialidad</th>
                <th className={styles.th}>Departamento</th>
                <th className={styles.th}>País</th>
                <th className={styles.th}>Ubicación</th>
                <th className={styles.th}>Fecha de la Solicitud</th>
                <th className={styles.th}>Estado</th>
              </tr>
            </thead>
            <tbody>
              {aplicaciones.map((item) => (
                <tr key={item.id} className={styles.row}>
                  <td className={styles.td}>{item.empresa}</td>
                  <td className={styles.td}>{item.especialidad}</td>
                  <td className={styles.td}>{item.departamento}</td>
                  <td className={styles.td}>{item.pais}</td>
                  <td className={styles.td}>{item.ubicacion}</td>
                  <td className={styles.td}>{item.fechaSolicitud}</td>
                  <td className={styles.td}>{item.estado}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
        <Footer />
    </div>
  );
};

export default ConsultarAplicaciones;