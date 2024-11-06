import React, { useState } from 'react';
import styles from '../Styles/Perfil.module.css';
import profileImage from '../Assets/fotoPerfilMujer.jpeg';
import profileSugerencia from '../Assets/perfilimagen.jpeg';
import empleoImagen from '../Assets/empleoNotificacion.jpg';
import empleoImagen2 from '../Assets/EMPLEO2.jpg';
import empleoImagen3 from '../Assets/EMPLEO3.jpg';
import empleoImagen4 from '../Assets/EMPLEO4.jpg';


const Perfil = () => {

  const [userInfo, setUserInfo] = useState({
    name: "Laura González",
    location: "Cúcuta, Colombia",
    description: "Desarrolladora Frontend con 5 años de experiencia en React y diseño de interfaces atractivas.",
    skills: ["React", "JavaScript", "CSS", "HTML", "Git"],
    experience: [
      {
        title: "Desarrolladora Frontend",
        company: "Tech Solutions",
        location: "Bogotá, Colombia",
        date: "2022 - Actualidad",
        description: "Encargada del desarrollo de interfaces de usuario para aplicaciones web, usando React y CSS avanzado."
      },
      {
        title: "Desarrolladora Junior",
        company: "Innovatech",
        location: "Cúcuta, Colombia",
        date: "2019 - 2022",
        description: "Desarrolladora junior en proyectos de aplicaciones web, asistiendo en el desarrollo y prueba de componentes de React."
      }
    ],
    education: [
      {
        degree: "Ingeniería de Sistemas",
        institution: "Universidad de Cúcuta",
        date: "2014 - 2019"
      }
    ]
  });

  const [editingSection, setEditingSection] = useState(null);
  const [newSkills, setNewSkills] = useState(userInfo.skills);
  const [personalData, setPersonalData] = useState({
    name: userInfo.name,
    location: userInfo.location,
    description: userInfo.description
  });

  const suggestedUsers = [
    { id: 1, name: 'Ana Pérez', profileImage: profileSugerencia },
    { id: 2, name: 'Laura Gómez', profileImage: profileSugerencia },
    { id: 3, name: 'Sofía Martínez', profileImage: profileSugerencia },
    { id: 4, name: 'Clara Ruiz', profileImage: profileSugerencia },
  ];

  const jobNotifications = [
    { id: 1, message: "Se ha publicado un nuevo trabajo en React en Bogotá.", Image: empleoImagen },
    { id: 2, message: "Oportunidad para Desarrollador Frontend en Cúcuta.", Image: empleoImagen2 },
    { id: 3, message: "Curso de JavaScript gratuito disponible en línea.", Image: empleoImagen3 },
    { id: 4, message: "Convocatoria abierta para el programa de pasantías.", Image: empleoImagen4 },
  ];

  const handleEdit = (section) => {
    setEditingSection(section);
  };

  const handleSaveSkills = () => {
    setUserInfo((prev) => ({ ...prev, skills: newSkills }));
    setEditingSection(null);
  };

  const handleSavePersonalData = () => {
    setUserInfo((prev) => ({
      ...prev,
      name: personalData.name,
      location: personalData.location,
      description: personalData.description
    }));
    setEditingSection(null);
  };

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...newSkills];
    updatedSkills[index] = value;
    setNewSkills(updatedSkills);
  };

  return (
    <div className={styles.container}>
      <div className={styles.profileContentWrapper}>
        <div className={styles.profileContent}>

          <div className={styles.box}>
            <div className={styles.personalDataSection}>
              <h3>Datos Básicos</h3>
              <hr className={styles.divider} />

              <div className={styles.profileImageContainer}>
                <img
                  src={profileImage}
                  alt="Foto de perfil"
                  className={styles.profileImage}
                />
              </div>
              {editingSection === 'Datos Personales' ? (
                <>
                  <input
                    type="text"
                    value={personalData.name}
                    onChange={(e) => setPersonalData({ ...personalData, name: e.target.value })}
                    placeholder="Nombre"
                  />
                  <input
                    type="text"
                    value={personalData.location}
                    onChange={(e) => setPersonalData({ ...personalData, location: e.target.value })}
                    placeholder="Ubicación"
                  />
                  <textarea
                    value={personalData.description}
                    onChange={(e) => setPersonalData({ ...personalData, description: e.target.value })}
                    placeholder="Descripción"
                  />
                  <button onClick={handleSavePersonalData} className={styles.editButton}>Guardar</button>
                </>
              ) : (
                <>
                  <p><strong>Nombre:</strong> {userInfo.name}</p>
                  <p><strong>Ubicación:</strong> {userInfo.location}</p>
                  <p><strong>Descripción:</strong> {userInfo.description}</p>
                  <button onClick={() => handleEdit('Datos Personales')} className={styles.editButton}>Editar</button>
                </>
              )}
            </div>
          </div>


          <div className={styles.box}>
            <div className={styles.section}>
              <h3>Educación</h3>
              <hr className={styles.divider} />
              {editingSection === 'Educación' ? (
                <>
                  {userInfo.education.map((edu, index) => (
                    <div key={index} className={styles.educationItem}>
                      <input
                        type="text"
                        value={edu.degree}
                        onChange={(e) => {
                          const updatedEducation = [...userInfo.education];
                          updatedEducation[index].degree = e.target.value;
                          setUserInfo({ ...userInfo, education: updatedEducation });
                        }}
                        placeholder="Grado"
                      />
                      <input
                        type="text"
                        value={edu.institution}
                        onChange={(e) => {
                          const updatedEducation = [...userInfo.education];
                          updatedEducation[index].institution = e.target.value;
                          setUserInfo({ ...userInfo, education: updatedEducation });
                        }}
                        placeholder="Institución"
                      />
                      <input
                        type="text"
                        value={edu.date}
                        onChange={(e) => {
                          const updatedEducation = [...userInfo.education];
                          updatedEducation[index].date = e.target.value;
                          setUserInfo({ ...userInfo, education: updatedEducation });
                        }}
                        placeholder="Fecha"
                      />
                    </div>
                  ))}
                  <button onClick={handleSavePersonalData} className={styles.editButton}>Guardar</button>
                </>
              ) : (
                <>
                  {userInfo.education.map((edu, index) => (
                    <div key={index} className={styles.educationItem}>
                      <h4>{edu.degree}</h4>
                      <p className={styles.institution}>{edu.institution}</p>
                      <p className={styles.date}>{edu.date}</p>
                    </div>
                  ))}
                  <button onClick={() => handleEdit('Educación')} className={styles.editButton}>Editar</button>
                </>
              )}
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.section}>
              <h3>Experiencia</h3>
              <hr className={styles.divider} />
              {editingSection === 'Experiencia' ? (
                <>
                  {userInfo.experience.map((job, index) => (
                    <div key={index} className={styles.jobItem}>
                      <input
                        type="text"
                        value={job.title}
                        onChange={(e) => {
                          const updatedExperience = [...userInfo.experience];
                          updatedExperience[index].title = e.target.value;
                          setUserInfo({ ...userInfo, experience: updatedExperience });
                        }}
                        placeholder="Título del trabajo"
                      />
                      <input
                        type="text"
                        value={job.company}
                        onChange={(e) => {
                          const updatedExperience = [...userInfo.experience];
                          updatedExperience[index].company = e.target.value;
                          setUserInfo({ ...userInfo, experience: updatedExperience });
                        }}
                        placeholder="Compañía"
                      />
                      <input
                        type="text"
                        value={job.location}
                        onChange={(e) => {
                          const updatedExperience = [...userInfo.experience];
                          updatedExperience[index].location = e.target.value;
                          setUserInfo({ ...userInfo, experience: updatedExperience });
                        }}
                        placeholder="Ubicación"
                      />
                      <input
                        type="text"
                        value={job.date}
                        onChange={(e) => {
                          const updatedExperience = [...userInfo.experience];
                          updatedExperience[index].date = e.target.value;
                          setUserInfo({ ...userInfo, experience: updatedExperience });
                        }}
                        placeholder="Fecha"
                      />
                      <textarea
                        value={job.description}
                        onChange={(e) => {
                          const updatedExperience = [...userInfo.experience];
                          updatedExperience[index].description = e.target.value;
                          setUserInfo({ ...userInfo, experience: updatedExperience });
                        }}
                        placeholder="Descripción"
                      />
                    </div>
                  ))}
                  <button onClick={handleSavePersonalData} className={styles.editButton}>Guardar</button>
                </>
              ) : (
                <>
                  {userInfo.experience.map((job, index) => (
                    <div key={index} className={styles.jobItem}>
                      <h4>{job.title}</h4>
                      <p className={styles.company}>{job.company} - {job.location}</p>
                      <p className={styles.date}>{job.date}</p>
                      <p>{job.description}</p>
                    </div>
                  ))}
                  <button onClick={() => handleEdit('Experiencia')} className={styles.editButton}>Editar</button>
                </>
              )}
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.skillsSection}>
              <h3>Habilidades</h3>
              <hr className={styles.divider} />
              {editingSection === 'Habilidades' ? (
                <>
                  <ul className={styles.skillsList}>
                    {newSkills.map((skill, index) => (
                      <li key={index}>
                        <input
                          type="text"
                          value={skill}
                          onChange={(e) => handleSkillChange(index, e.target.value)}
                        />
                      </li>
                    ))}
                  </ul>
                  <button onClick={handleSaveSkills} className={styles.editButton}>Guardar</button>
                </>
              ) : (
                <>
                  <ul className={styles.skillsList}>
                    {userInfo.skills.map((skill, index) => (
                      <li key={index} className={styles.skillItem}>{skill}</li>
                    ))}
                  </ul>
                  <button onClick={() => handleEdit('Habilidades')} className={styles.editButton}>Editar</button>
                </>
              )}
            </div>
          </div>


        </div>


        <div className={styles.suggestedFriendsSection}>
          <h3>Usuarios Sugeridos</h3>
          <ul className={styles.suggestedFriendsList}>
            {suggestedUsers.map(user => (
              <li key={user.id} className={styles.suggestedFriend}>
                <img src={user.profileImage} alt={`${user.name}`} className={styles.suggestedFriendImage} />
                <span>{user.name}</span>
                <button
                  className={styles.addFriendButton}
                  onClick={() => alert('Su solicitud ha sido enviada, Se le confirmará cuando la acepten. ')}
                >
                  Agregar
                </button>
              </li>
            ))}
          </ul>


          <div className={styles.jobNotificationsSection}>
            <h3>Notificaciones de Empleo</h3>
            <ul className={styles.jobNotificationsList}>
              {jobNotifications.map(notification => (
                <li key={notification.id} className={styles.jobNotificationItem}>

                  <img
                    src={notification.Image}
                    alt="Ícono de empleo"
                    className={styles.jobNotificationImage}
                  />
                  <span>{notification.message}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h4>Sobre FemPloy</h4>
            <p>
              Una plataforma creada para impulsar la empleabilidad de mujeres en tecnología. Accede a cursos, oportunidades y más.
            </p>
          </div>


        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2024 Femploy. Todos los derechos reservados.</p>
        </div>
      </footer>

    </div>
  );
};

export default Perfil;
