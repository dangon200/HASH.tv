import FormSignUp from '../FormSignUp/FormSignUp'
import { useState } from 'react'
import FormLogin from '../FormLogin/FormLogin'//eslint-disable-line
import logo from '../../utils/logo.svg'
import style from './LoginInit.module.css' //eslint-disable-line

export default function LoginInit () {
  const [form, setForm] = useState(true)
  return (
    
      <div className={style.init}>
        
        {/* titulo de la seccion */}
        <h2 
          className={style.init_tittle}
        >
          {
            !form ? 'Iniciar sesión' :  'Registrarse'
          }
        </h2>

        {/* contenedor de toda la pagina abajo del titulo */}
        <div className={`${style.form_cnt}`}>

          {/* contenedor del formulario */}
          <div 
            className={`card-body cardbody-color p-lg-5 ${form ? 'd-block' : 'd-none'} ${style.div}`}
          >

            {/* contenedor de la imagen */}
            {/* <div className={`text-center ${style.show}`}>
              <img
                src={logo} className={`img-fluid ${style.profileImagePic} mb-2`}
                alt='profile'
              />
            </div> */}

            {/* componente que tiene el formulario */}
            <FormSignUp />  
          </div>

          <div className={`card-body cardbody-color p-lg-5 ${!form ? 'd-block' : 'd-none'} `}>
            {/* <div className='text-center'>
                <img
                  src={logo} className={`img-fluid ${style.profileImagePic} mb-2`}
                  alt='profile'
                />
            </div> */}
              <FormLogin />
            </div>
            <div id='emailHelp' className={`form-text text-center mb-5 text-dark fs-4 ${style.link}`}>
              <button 
                onClick={() => setForm(!form)} 
                href='#' 
                className={`text-dark fw-bold ${style.btn_sub}`}>
                {!form ? 'Registrarse' : 'Iniciar sesión'}
              </button>
            </div>
          </div>
        </div>
      
    
  )
}