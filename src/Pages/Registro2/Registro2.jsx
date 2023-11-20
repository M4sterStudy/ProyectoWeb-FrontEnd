import React from 'react'
import {useDispatch} from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { registerAuth } from '../store/slices/auth/Thunks'


export const Registro2 =() => {

    const dispatch = useDispatch()

    const {usuario,email,password, onInputChange,formState} = useForm({
        usuario: 'DD',
        email: 'usuario@example.com',
        password: '123456'
    })

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
        dispatch(registerAuth(email, password, usuario));
      };      

    return(
        <>
        <h1>Registro</h1>
        <hr/>

        <form onSubmit = {(event) => onSubmit(event)}>
            <input name='usuario' type="usuario" onChange={(event)=> onInputChange(event)} value={usuario}/>
            <input name='email' type="email" onChange={(event)=> onInputChange(event)} value={email}/>
            <input name='password' type="password" onChange={(event)=> onInputChange(event)} value={password}/>
        
        <button type="submit">Registro</button>
        </form>
        
        </>
    )
}