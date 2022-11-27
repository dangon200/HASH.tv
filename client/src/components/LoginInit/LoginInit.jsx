import style from './LoginInit.module.css' //eslint-disable-line
import FormSignUp from '../FormSignUp/FormSignUp'
import { useState } from 'react'
import FormLogin from '../FormLogin/FormLogin'//eslint-disable-line


export default function LoginInit() {
  const [form, setForm] = useState(true)
  return (
    <div className='init'>
      <div className='row'>
        <div className='col-md-6 offset-md-4'>
          <h2 className='text-center text-dark fs-1 mt-5'>{!form ? 'Iniciar sesión' : 'Registrarse'}</h2>
          <div className='text-center mb-5 text-dark' />
          <div className='card my-5'>
            {form ? (<div className={`card-body cardbody-color p-lg-3 ${form ? 'd-block' : 'd-none'}`}>

              <div className='text-center'>
                <img
                  src='https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-rouge.png' className={`img-fluid ${style.profileImagePic} img-thumbnail rounded-circle my-2`}
                  alt='profile'
                />
              </div>
              <FormSignUp />
            </div>) : <></>}

            {!form ? (<div className={`card-body cardbody-color p-lg-5 ${!form ? 'd-block' : 'd-none'}`}>
              <div className='text-center'>
                <img
                  src='https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-rouge.png' className={`img-fluid ${style.profileImagePic} img-thumbnail rounded-circle my-2`}
                   alt='profile'
                />
              </div>
              <FormLogin />
            </div>) : <></>}

            <div id='emailHelp' className={`form-text text-center mb-5 text-dark fs-4 ${style.link}`}>
              <p onClick={() => setForm(!form)} href='#' className='text-dark fw-bold'>{!form ? 'No esta Registrado Cree su cuenta!' : 'Iniciar sesión'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}