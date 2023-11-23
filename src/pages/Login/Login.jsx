import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginAuth } from '../store/slices/auth/Thunks';
import { useForm } from "../../hooks/useForm"; 
import "./Css_Styles/Login_Styles.css";
import Paisaje from "./Imagenes/Rectangle-1.png";

const Login = () => {
  const dispatch = useDispatch();
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const { handleChange } = useForm(); 
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Validaciones
      if (!emailOrUsername || !password) {
        alert('Por favor, complete todos los campos.');
        return;
      }

      const auth = getAuth();
      // Lógica de inicio de sesión con Firebase
      await signInWithEmailAndPassword(auth, emailOrUsername, password);
      
      // Lógica para iniciar sesión con Redux
      await dispatch(loginAuth(emailOrUsername, password));

      // Redirige a la página de inicio solo si el inicio de sesión es exitoso
      navigate('/Inicio');
    } catch (error) {
      // Maneja los errores de inicio de sesión
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        alert('Credenciales inválidas. Por favor, verifica tu correo y contraseña.');
      } else {
        // Maneja otros errores
        alert('Error en el inicio de sesión. Por favor, intenta nuevamente.');
      }
    }
  };

  return (
    <div className="iniciar-sesion">
      <div className="div">
        <img className="rectangle" alt="Rectangle" src={Paisaje} />
        <div className="text-wrapper">Iniciar sesión</div>
        
        <div className="overlap">
          <label htmlFor="username" className="text-wrapper-2"></label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="    User34@ejemplo.com"
            value={emailOrUsername}
            onChange={(e) => { handleChange(e); setEmailOrUsername(e.target.value); }}
          />
        </div>
        <p className="p">ingrese su email</p>

        <div className="text-wrapper-3">Contraseña</div>

        <div className="overlap-group">
          <label htmlFor="password" className="text-wrapper-6"></label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="text-wrapper-4">¿No estás registrado?</div>
        <Link to="/registro">
          <div className="text-wrapper-5">Crea una cuenta</div>
        </Link>

        {/* Eliminamos el Link a "/inicio" y movemos el botón dentro del formulario */}
        <button className="btn-iniciar-sesion" onClick={handleLogin}>
          <div className="overlap-group-2">
            <span className="text-wrapper-7">Iniciar sesión</span>
            <div className="rectangle-2"></div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Login;
