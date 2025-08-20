import { useState } from 'react';
import styles from '../Styles/Empresas.module.css';
import Footer from '../Components/Footer';

const empresasData = [
    { id: 1, nombre: 'Key Code', sector: 'Tecnología', url: 'https://www.keycode.com.co/' },
    { id: 2, nombre: 'Secretaria de Salud Bogotá', sector: 'Salud', url: 'https://www.saludcapital.gov.co/Paginas2/Inicio.aspx' },
    { id: 3, nombre: 'El Empleo', sector: 'Bolsa de Empleo', url: 'https://www.elempleo.com/co/' },
    { id: 4, nombre: 'Sena', sector: 'Educación', url: 'https://www.sena.edu.co/es-co/Paginas/default.aspx' },
    { id: 5, nombre: 'Ministerio de Tecnologias ', sector: 'Tecnologia', url: 'https://www.mintic.gov.co/portal/inicio/' },
    { id: 6, nombre: 'Ministerio de Educación ', sector: 'Educación', url: 'https://www.minedu.gov.co/https://www.mineducacion.gov.co/portal//inicio/' },
    { id: 7, nombre: 'LinkedIn Corporation ', sector: 'Bolsa de Empleo', url: 'https://co.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F' },
];

const sectores = ['Tecnología', 'Salud', 'Finanzas', 'Educación', 'Bolsa de Empleo'];

const Empresas = () => {
    const [busqueda, setBusqueda] = useState('');
    const [sectorSeleccionado, setSectorSeleccionado] = useState('');

    const filtrarEmpresas = () => {
        return empresasData.filter(empresa => {
            const nombreCoincide = empresa.nombre.toLowerCase().includes(busqueda.toLowerCase());
            const sectorCoincide = sectorSeleccionado ? empresa.sector === sectorSeleccionado : true;
            return nombreCoincide && sectorCoincide;
        });
    };

    const buscarTodasLasEmpresas = () => {
        setBusqueda('');
        setSectorSeleccionado('');
    };

    return (
        <div className={styles.container}>
            <div className={styles.searchContainer}>
                <h2>Base Empresarial</h2>
                <input
                    type="text"
                    placeholder="Buscar empresa..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                />
                <select
                    value={sectorSeleccionado}
                    onChange={(e) => setSectorSeleccionado(e.target.value)}
                >
                    <option value="">Sectores</option>
                    {sectores.map((sector, index) => (
                        <option key={index} value={sector}>{sector}</option>
                    ))}
                </select>
                {/* Botón para buscar todas las empresas */}
                <button className={styles.buscartodas} onClick={buscarTodasLasEmpresas}>
                    Ver Todas las Empresas
                </button>
            </div>
            <div className={styles.cardContainer}>
                {filtrarEmpresas().map(empresa => (
                    <div key={empresa.id} className={styles.card}>
                        <h3>{empresa.nombre}</h3>
                        <p> {empresa.sector}</p>
                        <a href={empresa.url} target="_blank" rel="noopener noreferrer">Ver Empresa</a>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Empresas;