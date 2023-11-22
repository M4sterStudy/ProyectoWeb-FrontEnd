// Registro.jsx
import React, { useState } from 'react';
import { verificarCampos } from '../../Helpers/generalFunctions';
import RegistroIMG from './Imagenes/RegistroIMG.png';
import { useDispatch } from 'react-redux';
import { registerAuth } from '../store/slices/auth/Thunks';

import './Css_Styles/Registro_styles.css';

const Registro = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();

    // Validaciones
    if (!usuario || !email || !password || !password2) {
        alert('Por favor, complete todos los campos.');
      return;
    }

    if (!email.includes('@')) {
        alert('El correo electrónico debe contener "@".');
      return;
    }

    if (password.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    if (password !== password2) {
        alert('Las contraseñas no coinciden.');
      return;
    }

    try {
      // Intenta registrar al usuario
      await dispatch(registerAuth(email, password, usuario));

      // Muestra el mensaje de éxito
      alert('Registro exitoso. Los datos han sido guardados.');

      // Imprime los datos en la consola
      console.log('Datos guardados:', { usuario, email, password });
    } catch (error) {
      // Maneja el error de Firebase 'auth/email-already-in-use'
      if (error.code === 'auth/email-already-in-use') {
        alert('Este correo electrónico ya está en uso. Por favor, utiliza otro.');
      } else {
        // Maneja otros errores
        alert('Error en el registro. Por favor, intenta nuevamente.');
      }
    }
  };

  return (
    <div className="registrase">
      <div className="container-registro-wrapper">
        <div className="container-registro">
          <img className="rectangle" alt="Rectangle" src={RegistroIMG} />
          <div className="text-wrapper">Registrarse</div>

          <div className="overlap">
            <label htmlFor="username" className="User"></label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="    User34"
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>

          <div className="overlap-group">
            <label htmlFor="email" className="User"></label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="    User@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="text-wrapper-3">Nombre de usuario</div>
          <div className="text-wrapper-4">Email</div>
          <div className="text-wrapper-5">Contraseña</div>

          <div className="div-wrapper">
            <label htmlFor="password" className="password"></label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="btn-registrarse" onClick={onSubmit}>
            <div className="overlap-group-2">
              <span className="text-wrapper-7">Registrarse</span>
              <div className="rectangle-2"></div>
            </div>
          </button>

          <div className="text-wrapper-8">Confirmar Contraseña</div>

          <div className="overlap-2">
            <label htmlFor="password2" className="password"></label>
            <input
              type="password"
              id="password2"
              name="password2"
              placeholder="********"
              onChange={(e) => setPassword2(e.target.value)}
            />
          </div>

          {message && (
            <p className={`message ${message.includes('éxito') ? 'success' : 'error'}`}>{message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Registro;
