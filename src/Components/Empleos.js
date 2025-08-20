import { useState, useEffect } from 'react';
import styles from '../Styles/Empleos.module.css';
import { RiCloseLine } from "react-icons/ri";
import mujerAsistente from '../Assets/mujer-asistente.jpg';
import mujerNubes from '../Assets/MujerNubes.jpeg';
import mujerGerente from '../Assets/mujerGerente.jpg';
import mujerIngeniera from '../Assets/mujerIngeniera.jpg';
import Footer from "../Components/Footer";


  const allJobs = [

    { title: 'Desarrolladora Frontend', company: ' Cial', country: "United States", location: ' New York, NY', date: '2024-10-30', image:mujerIngeniera },
    { title: 'Desarrolladora Frontend', company: ' Fandu', country: "United State", location: ' Los Ángeles, CA', date: '2024-10-30', image:mujerIngeniera},
    { title: 'Desarrolladora Frontend', company: 'CodeWave', country: "United States", location: ' Austin TX', date: '2024-10-15', image:mujerIngeniera },
    { title: 'Desarrolladora Backend (Java)', company: 'Tech Solutions Inc.', country: 'United States', location: 'San Francisco, CA', date: '2024-10-28', image: mujerIngeniera },
    { title: 'Desarrolladora Backend (Node.js)', company: 'Innovatech', country: 'United States', location: 'Seattle, WA', date: '2024-10-26', image: mujerIngeniera },
    { title: 'Desarrolladora Backend', company: 'Finance Corp', country: 'United States', location: 'Nueva York, NY', date: '2024-10-24', image: mujerIngeniera },
    { title: 'Ingeniera de Software (C#)', company: 'Financial Services Co.', country: 'United States', location: 'Nueva York, NY', date: '2024-10-28', image: mujerIngeniera },
    { title: 'Desarrolladora de Aplicaciones Móviles (Android)', company: 'Tech Innovators', country: 'United States', location: 'Austin, TX', date: '2024-10-25', image: mujerAsistente },
    { title: 'Desarrolladora de Aplicaciones Móviles', company: 'Smart Apps LLC', country: 'United States', location: 'Los Ángeles, CA', date: '2024-10-22',image: mujerAsistente },
    { title: 'Asistente Virtual', company: 'Remote Work Solutions', country: 'United States', location: 'Miami, FL', date: '2024-10-30', image: mujerAsistente },
    { title: 'Asistente Virtual Administrativo', company: 'Virtual Assist Co.', country: 'United States', location: 'Chicago, IL', date: '2024-10-28', image: mujerAsistente },
    { title: 'Asistente Virtual de Marketing', company: 'Marketing Pro', country: 'United States', location: 'Los Ángeles, CA', date: '2024-10-25', image: mujerAsistente },
    { title: 'Desarrolladora Frontend', company: 'Cial', country: 'United States', location: 'New York, NY', date: '2024-10-30', image: mujerAsistente},
    { title: 'Ingeniera de Software (Python)', company: 'E-commerce Solutions', country: 'United States', location: 'Seattle, WA', date: '2024-10-22', image: mujerIngeniera },
    { title: 'Data Scientist', company: 'Data Analytics Co.', country: 'Canada', location: 'Toronto, Canadá', date: '2024-11-01', image: mujerIngeniera },
    { title: 'Desarrolladora de Aplicaciones Móviles (iOS)', company: 'App Creators Inc.', country: 'United Kingdom', location: 'Londres, Reino Unido', date: '2024-10-28', image: mujerAsistente },
    { title: 'Ingeniero de Machine Learning', company: 'AI Innovations', country: 'Germany', location: 'Berlín, Alemania', date: '2024-10-15', image: mujerIngeniera },
    { title: 'Arquitecto de Nubes', company: 'Cloud Technologies', country: 'Australia', location: 'Sídney, Australia', date: '2024-10-20', image: mujerNubes },
    { title: 'Gerente de Proyectos de TI', company: 'Tech Managers', country: 'Ireland', location: 'Dublín, Irlanda', date: '2024-10-18', image: mujerGerente },
    { title: 'Especialista en Ciberseguridad', company: 'SecureNet', country: 'Japan', location: 'Tokio, Japón', date: '2024-10-12', image: mujerNubes },
    { title: 'Desarrolladora de Software Backend', company: 'Innovatech', country: 'Spain', location: 'Madrid, España', date: '2024-10-25', image:mujerIngeniera },
    { title: 'Analista de Datos', company: 'Insight Analytics', country: 'Singapore', location: 'Singapur', date: '2024-10-22', image: mujerNubes },
    { title: 'Desarrollador de Juegos', company: 'Gaming Studios', country: 'Canada', location: 'Vancouver, Canadá', date: '2024-10-29', image: mujerIngeniera },
    { title: 'Ingeniera de Software Full Stack', company: 'Tech Giants', country: 'India', location: 'Bangalore, India', date: '2024-10-30', image: mujerIngeniera },
    { title: 'Desarrolladora de Aplicaciones Móviles (Android)', company: 'Mobile Innovators', country: 'Brazil', location: 'São Paulo, Brasil', date: '2024-10-25', image: mujerAsistente },
    { title: 'Diseñador de Experiencia de Usuario', company: 'UX Creatives', country: 'Netherlands', location: 'Ámsterdam, Países Bajos', date: '2024-10-21', image: mujerGerente  },
    { title: 'Ingeniero de Software', company: 'Tech Global Solutions', country: 'USA', location: 'San Francisco, Estados Unidos', date: '2024-10-30', image: mujerIngeniera },
    { title: 'Desarrollador Full Stack', company: 'Code Masters', country: 'Canada', location: 'Toronto, Canadá', date: '2024-10-28',image: mujerGerente },
    { title: 'Analista de Datos', company: 'Data Insights', country: 'United Kingdom', location: 'Londres, Reino Unido', date: '2024-10-25', image: mujerGerente  },
    { title: 'Gerente de Producto', company: 'Innovate Now', country: 'Australia', location: 'Sídney, Australia', date: '2024-10-20', image: mujerGerente },
    { title: 'Desarrollador Backend', company: 'Digital Hub', country: 'Germany', location: 'Berlín, Alemania', date: '2024-10-18', image:mujerIngeniera },
    { title: 'Ingeniero DevOps', company: 'Cloud Solutions', country: 'India', location: 'Bangalore, India', date: '2024-10-16', image: mujerIngeniera },
    { title: 'Consultor de Ciberseguridad', company: 'SecureTech', country: 'Spain', location: 'Madrid, España', date: '2024-10-15',image: mujerGerente  },
    { title: 'Arquitecto de Soluciones en la Nube', company: 'SkyNet Solutions', country: 'Japan', location: 'Tokio, Japón', date: '2024-10-12', image: mujerNubes },
    { title: 'Especialista en Inteligencia Artificial', company: 'AI Innovators', country: 'France', location: 'París, Francia', date: '2024-10-10', image: mujerGerente },
    { title: 'Desarrollador de Juegos', company: 'Pixel Entertainment', country: 'South Korea', location: 'Seúl, Corea del Sur', date: '2024-10-08', image: mujerGerente } 

  ];

  const Empleos = () => {
    const [keyword, setKeyword] = useState('');
    const [location, setLocation] = useState('');
    const [countries, setCountries] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(true);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [recentJobs, setRecentJobs] = useState([]);
    const [showRecentJobs, setShowRecentJobs] = useState(true); 
  
    useEffect(() => {
      const fetchCountries = async () => {
        try {
          const response = await fetch('https://restcountries.com/v3.1/all');
          const data = await response.json();
          const sortedCountries = data
            .map((country) => country.name.common)
            .sort((a, b) => a.localeCompare(b));
          setCountries(sortedCountries);
        } catch (error) {
          console.error('Error fetching countries:', error);
        }
      };
  
      fetchCountries();
    }, []);
  
   
    const getRandomJobs = (jobs, count) => {
      const shuffled = [...jobs].sort(() => 0.5 - Math.random()); 
      return shuffled.slice(0, count); 
    };
  
    useEffect(() => {
      const randomJobs = getRandomJobs(allJobs, 4);
      setRecentJobs(randomJobs);
  
      const interval = setInterval(() => {
        const newRandomJobs = getRandomJobs(allJobs, 4);
        setRecentJobs(newRandomJobs);
      }, 20000);
  
      return () => clearInterval(interval);
    }, []);
  
    const fetchCountryFlag = async (countryName) => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        const data = await response.json();
        return data[0].flags.png;
      } catch (error) {
        console.error('Error fetching country flag:', error);
        return '';
      }
    };
  
    
    const handleSuggestedSearch = (searchTerm) => {
      setKeyword(searchTerm);
      const filtered = allJobs.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) 
      );
      setFilteredJobs(filtered); 
      setShowRecentJobs(false); 
    };
  
    const handleKeywordChange = (e) => {
      const input = e.target.value;
      setKeyword(input);
  
      const filtered = allJobs.filter(job =>
        job.title.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredJobs(filtered);
      setShowRecentJobs(filtered.length === 0); 
    };
  
    const handleSearch = async () => {
      const selectedCountry = location.toLowerCase();
  
      const filtered = allJobs.filter(job => {
        const matchesKeyword = job.title.toLowerCase().includes(keyword.toLowerCase());
        const matchesCountry = selectedCountry ? job.country.toLowerCase() === selectedCountry : true;
        return matchesKeyword && matchesCountry;
      });
  
      const jobsWithFlags = await Promise.all(filtered.map(async (job) => {
        const flagUrl = await fetchCountryFlag(job.country);
        return { ...job, flag: flagUrl };
      }));
  
      setFilteredJobs(jobsWithFlags);
      setShowRecentJobs(jobsWithFlags.length === 0); 
  
      if (jobsWithFlags.length === 0) {
        alert('No se encontraron trabajos que coincidan con la palabra clave ingresada.');
      }
    };
  
    return (
      <div className={styles.container}>
        <div className={styles.headerBox}>
          <h2>FemPloy: Búsqueda de Empleo</h2>
        </div>
  
        {showSuggestions && (
          <div className={styles.suggestionBox}>
            <div className={styles.suggestionHeader}>
              <h3>Búsqueda Sugerida</h3>
              <button className={styles.closeButton} onClick={() => setShowSuggestions(false)}>
                <RiCloseLine />
              </button>
            </div>
            <div className={styles.searchOptions}>
              <button className={styles.suggestedSearch} onClick={() => handleSuggestedSearch('Desarrolladora Frontend')}>Desarrolladora Frontend</button>
              <button className={styles.suggestedSearch} onClick={() => handleSuggestedSearch('Desarrolladora Backend')}>Desarrolladora Backend</button>
              <button className={styles.suggestedSearch} onClick={() => handleSuggestedSearch('Ingeniera de Software')}>Ingeniera de Software</button>
              <button className={styles.suggestedSearch} onClick={() => handleSuggestedSearch('Desarrolladora de Aplicaciones Móviles')}>Desarrolladora de Aplicaciones Móviles</button>
              <button className={styles.suggestedSearch} onClick={() => handleSuggestedSearch('Asistente Virtual')}>Asistente Virtual</button>
              <button className={styles.suggestedSearch} onClick={() => handleSuggestedSearch('Remoto')}>Remoto</button>
            </div>
          </div>
        )}
  
        <input
          type="text"
          placeholder="Palabra clave"
          value={keyword}
          onChange={handleKeywordChange}
          id="filtro"
        />
        <select value={location} onChange={(e) => setLocation(e.target.value)} id="pais">
          <option value="">Seleccione un país</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>{country}</option>
          ))}
        </select>
        <button className={styles.searchButton} onClick={handleSearch}>Buscar</button>
  
        <div className={styles.jobList}>
          {filteredJobs.length > 0 && (
            <div className={styles.resultsHeader}>
              <h3>Resultados de Empleo:</h3>
            </div>
          )}
  
          <div className={styles.jobGrid}>
            {filteredJobs.map((job, index) => (
              <div key={index} className={styles.jobCard}>
                {job.image && <img src={job.image} alt={`${job.title}`} className={styles.jobImage} />}
                <div className={styles.jobDetails}>
                  <h4>{job.title}</h4>
                  <p>Empresa: {job.company}</p>
                  <p>Ubicación: {job.location}</p>
                  <p>Publicado el: {job.date}</p>
                  <button onClick={() => alert(`Has aplicado exitosamente a ${job.title}`)}>
                    Aplicar
                  </button>
                  {job.flag && <img src={job.flag} alt={`${job.country} flag`} className={styles.flagImage} />}
                </div>
              </div>
            ))}
          </div>
        </div>
  
      
        {showRecentJobs && (
          <div className={styles.recentJobsContainer}>
            <h3>Empleos Recientemente Agregados</h3>
            <div className={styles.jobGrid}>
              {recentJobs.map((job, index) => (
                <div key={index} className={styles.jobCard}>
                  {job.image && <img src={job.image} alt={`${job.title}`} className={styles.jobImage} />}
                  <div className={styles.jobDetails}>
                    <h4>{job.title}</h4>
                    <p>Empresa: {job.company}</p>
                    <p>Ubicación: {job.location}</p>
                    <p>Publicado el: {job.date}</p>
                    <button onClick={() => alert(`Has aplicado exitosamente a ${job.title}`)}>
                      Aplicar
                    </button>
                    {job.flag && <img src={job.flag} alt={`${job.country} flag`} className={styles.flagImage} />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
  
        <Footer />
      </div>
    );
  };
  
  export default Empleos;