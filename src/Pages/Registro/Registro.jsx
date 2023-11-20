
import "./Css_Styles/Registro_styles.css";
import React from 'react';
import { verificarCampos } from '../../Helpers/generalFunctions';
import RegistroIMG from './Imagenes/RegistroIMG.png';
import {useDispatch} from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { registerAuth } from '../store/slices/auth/Thunks'


const Registro = () => {

  const dispatch = useDispatch()

  const {email,password,usuario, onInputChange,formState} = useForm({
      usuario: '',
      email: '',
      password: ''
  })

  const onSubmit = (event) =>{
    event.preventDefault()
    if (verificarCampos()){
    console.log(formState)
    dispatch(registerAuth(email, password, usuario))
    }

}

    return (
        <div className="registrase">
    <div className="container-registro-wrapper">
        <div className="container-registro">

            <img className="rectangle" alt="Rectangle" src={RegistroIMG} />

            <div className="text-wrapper">Registrarse</div>

            <form onSubmit = {(event) => onSubmit(event)}>

            <div className="overlap">
            <label for="username" className="User"></label>
            <input type="text" id="username" name="usuario" placeholder="    User34"  onChange={(event)=> onInputChange(event)} value={usuario}/>
            </div>

            <div className="overlap-group">
            <label for="email" className="User"></label>
            <input type="text" id="email" name="email" placeholder="    User@gmail.com" onChange={(event)=> onInputChange(event)} value={email}/>
            </div>

            <div className="text-wrapper-3">Nombre de usuario</div>
            <div className="text-wrapper-4">Email</div>
            <div className="text-wrapper-5">Contraseña</div>

            <div className="div-wrapper">
                <label for="password" className="password"></label>
                <input type="password" id="password" name="password" placeholder="********" onChange={(event)=> onInputChange(event)} value={password}/>
            </div>
           

            <button type="submit" className="btn-registrarse">
                <div className="overlap-group-2">
                    <span className="text-wrapper-7">Registrarse</span>
                <div className="rectangle-2"></div>
                </div>
            </button>

            </form>


            <div className="text-wrapper-8">Confirmar Contraseña</div>

            <div className="overlap-2">
            <label for="password" className="password"></label>
            <input type="password" id="password2" name="password" placeholder="********" />
            </div>


        </div>
    </div>
</div>

);
};
  
  export default Registro;