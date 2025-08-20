import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import styles from "../Styles/Login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false); // Determina si estamos en la vista de registro
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Maneja el envío del formulario, ya sea login o registro
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) {
      setIsRegister(false); // Cambiar automáticamente a la vista de Login después del registro
    } else {
      // Simulamos el inicio de sesión y redirigimos al Home
      navigate("/Home"); 
    }
  };

  // Cambia entre vista de Login y Registro
  const toggleForm = () => {
    setIsRegister(!isRegister); // Cambiar el estado para alternar entre los formularios
  };

  return (
  <div className={styles.body}>
    <div className={styles.container}>
      {/* Sección Izquierda */}
      <div className={styles.left}>
        <h2 className={styles.title}>{isRegister ? "¡Únete a nosotros!" : "¡Bienvenido a FemPloy!"}</h2>
        <p className={styles.subtitle}>
          {isRegister ? "Crea una cuenta para empezar" : ""}
        </p>
      </div>

      {/* Sección Derecha */}
      <div className={styles.right}>
        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Mostrar campo de Nombre solo en Registro */}
          {isRegister && (
            <div className={styles.formGroup}>
              <input
                type="text"
                placeholder="Nombre Completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.input}
                />
            </div>
          )}

          {/* Campos comunes para Login y Registro */}
          <div className={styles.formGroup}>
            <input
              type="email"
              placeholder="Correo Electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              />
          </div>
          <div className={styles.formGroup}>
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              />
          </div>

          {/* Enlace para olvidar la contraseña solo en Login */}
          {!isRegister && (
            <div className={styles.forgotPassword}>
              <a href="/" className={styles.forgotPasswordLink}>
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          )}

          {/* Botón de Login o Registro */}
          <button type="submit" className={styles.button}>
            {isRegister ? "Registrarse" : "Iniciar Sesión"}
          </button>
        </form>

        {/* Botón para cambiar entre Login y Registro */}
        <button
          onClick={toggleForm} // Alternar entre Login y Registro
          className={styles.registerButton}
          >
          {isRegister ? "¿Ya tienes una cuenta? Iniciar Sesión" : "Crear una cuenta"}
        </button>

        {/* Botón para iniciar sesión con Google */}
        <div className={styles.socialLogin}>
          <button className={styles.socialButton}>
            <FaGoogle className={styles.socialIcon} /> INICIAR SESIÓN CON GOOGLE
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Login;