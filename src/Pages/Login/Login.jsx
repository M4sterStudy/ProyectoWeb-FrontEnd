import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "../../hooks/useForm"; // Asegúrate de importar el hook useForm
import "./Css_Styles/Login_Styles.css";
import Paisaje from "./Imagenes/Rectangle-1.png";


const Login = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const { handleChange } = useForm(); // Utiliza el hook useForm para obtener handleChange
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, emailOrUsername, password);
      navigate('/Inicio');
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);
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
            placeholder="    User34"
            value={emailOrUsername}
            onChange={(e) => { handleChange(e); setEmailOrUsername(e.target.value); }}
          />
        </div>
        <p className="p">Nombre de usuario o email</p>

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

        <Link to="/inicio">
        <button className="btn-iniciar-sesion" onClick={handleLogin}>
          <div className="overlap-group-2">
            <span className="text-wrapper-7">Iniciar sesión</span>
            <div className="rectangle-2"></div>
          </div>
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
