import React from 'react'
import img1 from "../Assets/img1.png"
import Styles from "../Styles/Login.css"
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';



const Login = () => {
  return (
    <div>
        <div className='login'>
          <img src={img1}  alt='fondo' className='Img-fondo'/>
           <form className='login-form'> 
              <h1 className='title' > Inicio de Sesión</h1>
           <div className='login-fields'>
                <div className='logib-box'>
                  <input type='email' placeholder=' Ingresa tu Email' required className='login-input'/>
                  <i><MdEmail />  </i>
                </div>
                <div className='logib-box'>
                  <input type='password' placeholder=' Ingresa tu Contraseña' required className='login-input'/>
                  <i><RiLockPasswordFill /></i>
                </div>
                <div className='check'>
                  <input type='checkbox' className='check-input' id='user-check'/>
                  <label for="usercheck" className='check-label'> Recordar Contraseña</label>
                   <a href='#'  className='forgot'>Olvidastes la Contraseña</a>
                </div>
               
           </div>
           <div className='button-form'><Link to="/Menu" >Iniciar Sesión </Link></div>
           <div className='Separator'>
            
                <br></br>
            <div className='sign-in'>
              <button className='google'>
                <i  className='p-google' ><FcGoogle /> Iniciar Sesión con google</i>
                
               </button>
               <div className='Register'>
                <i>¿ primera vez? <Link to="/Registrarse">Registate aqui</Link></i>
               </div>
            </div>
           </div>
           </form>
        </div>
    </div>
  )
}

export default Login;