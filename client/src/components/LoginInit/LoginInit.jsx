import style from './LoginInit.module.css' //eslint-disable-line
import FormSignUp from '../FormSignUp/FormSignUp'
import { useState } from 'react'
import FormLogin from '../FormLogin/FormLogin'//eslint-disable-line
import logo from '../../utils/logo.svg'

export default function LoginInit () {
  const [form, setForm] = useState(true)
  return (
    <div className={style.init}>
      <div className={`row ${style.form_cnt}`}>
          <h2 
            className={style.init_tittle}
          >
            {
              !form ? 'Iniciar sesión' :  'Registrarse'
            }
          </h2>
        <div className={`col-md-6 offset-md-3 ${style.form_cnt}`}>
          <div className={` ${style.form_cnt}`} />
          <div className={` my-5 ${style.form_cnt}`}>

            <div className={`card-body cardbody-color p-lg-5 ${form ? 'd-block' : 'd-none'} ${style.form_cnt}`}>
            <div className={`text-center ${style.img_cnt}`}>
                <img
                  src={logo} className={`img-fluid ${style.profileImagePic} mb-2`}
                  alt='profile'
                />
              </div>
              <FormSignUp />
            </div>

            <div className={`card-body cardbody-color p-lg-5 ${!form ? 'd-block' : 'd-none'}`}>
            <div className='text-center'>
                <img
                  src={logo} className={`img-fluid ${style.profileImagePic} mb-2`}
                  alt='profile'
                />
              </div>
              <FormLogin />
            </div>
            <div id='emailHelp' className={`form-text text-center mb-5 text-dark fs-4 ${style.link}`}>
              <p onClick={() => setForm(!form)} href='#' className='text-dark fw-bold'>{!form ? 'No esta Registrado Cree su cuenta!' : 'Iniciar sesión'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}