import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { loginAuth } from '../store/slices/auth/Thunks';

export const Login2 = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  const { email, password, onInputChange } = useForm({
    email: 'usuario@example.com',
    password: '123456',
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    // Validaciones
    if (!email || !password) {
      setMessage('Por favor, complete todos los campos.');
      return;
    }

    try {
      // Intenta iniciar sesión
      await dispatch(loginAuth(email, password)); // Usa la función de inicio de sesión

      // Muestra el mensaje de éxito
      setMessage('Inicio de sesión exitoso.');

      // Puedes redirigir a otra página aquí si es necesario
    } catch (error) {
      // Maneja los errores de inicio de sesión
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        setMessage('Credenciales inválidas. Por favor, verifica tu correo y contraseña.');
      } else {
        // Maneja otros errores
        setMessage('Error en el inicio de sesión. Por favor, intenta nuevamente.');
      }
    }
  };

  return (
    <>
      <h1>Iniciar Sesión</h1>
      <hr />

      {message && <p style={{ color: message.includes('éxito') ? 'green' : 'red' }}>{message}</p>}

      <form onSubmit={(event) => onSubmit(event)}>
        <input name="email" type="email" onChange={(event) => onInputChange(event)} value={email} />
        <input name="password" type="password" onChange={(event) => onInputChange(event)} value={password} />

        <button type="submit">Iniciar Sesión</button>
      </form>
    </>
  );
};
