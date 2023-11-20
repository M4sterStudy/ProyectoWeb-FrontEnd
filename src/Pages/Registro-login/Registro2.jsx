import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { registerAuth } from '../store/slices/auth/Thunks';

export const Registro2 = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  const { usuario, email, password, onInputChange } = useForm({
    usuario: 'DD',
    email: 'usuario@example.com',
    password: '123456',
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    // Validaciones
    if (!usuario || !email || !password) {
      setMessage('Por favor, complete todos los campos.');
      return;
    }

    if (!email.includes('@')) {
      setMessage('El correo electrónico debe contener "@"');
      return;
    }

    if (password.length < 6) {
      setMessage('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    try {
      // Intenta registrar al usuario
      await dispatch(registerAuth(email, password, usuario));

      // Muestra el mensaje de éxito
      setMessage('Registro exitoso. Los datos han sido guardados.');

      // Imprime los datos en la consola
      console.log('Datos guardados:', { usuario, email, password });
    } catch (error) {
      // Maneja el error de Firebase 'auth/email-already-in-use'
      if (error.code === 'auth/email-already-in-use') {
        setMessage('Este correo electrónico ya está en uso. Por favor, utiliza otro.');
      } else {
        // Maneja otros errores
        setMessage('Error en el registro. Por favor, intenta nuevamente.');
      }
    }
  };

  return (
    <>
      <h1>Registro</h1>
      <hr />

      {message && <p style={{ color: message.includes('éxito') ? 'green' : 'red' }}>{message}</p>}

      <form onSubmit={(event) => onSubmit(event)}>
        <input name="usuario" type="usuario" onChange={(event) => onInputChange(event)} value={usuario} />
        <input name="email" type="email" onChange={(event) => onInputChange(event)} value={email} />
        <input name="password" type="password" onChange={(event) => onInputChange(event)} value={password} />

        <button type="submit">Registro</button>
      </form>
    </>
  );
};
