import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { schemaValidateUser } from '../utilities/schemas'
import { useState } from 'react'
import axios from 'axios'
import style from './formSignUp.module.css'


const urlApi = 'http://localhost:3001'

export default function FormLogin() {
  const dispatch = useDispatch() //eslint-disable-line
  const { values, handleChange, handleBlur, errors, touched, handleSubmit, isSubmitting } = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      copyPassword: '',
      roles: 'User'
    },
    validationSchema: schemaValidateUser,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post(`${urlApi}/api/auth/signup/`, values)
        console.log(response)
        resetForm()
        setSend(true)
      } catch (error) {
        setErr(true)
        setTimeout(() => { setErr(false) }, 2000)
      }
    }
  })

  const [send, setSend] = useState(false)
  const [err, setErr] = useState(false)
  return (
    // formulario
    <div className={style.card_sign}>

      <form 
        onSubmit={handleSubmit} 
        className={` w-75 justify-content-center mx-auto  p-5 `} autoComplete='off'
      >
        <div className={`row justify-content-center ${style.form_label}`}>
          
          <div className={`${style.input_cnt}`}>
            <label htmlFor='username'>Nombre de usuario</label>
            <input
              type='text'
              className={`form-control ${touched.username ? errors.username ? 'is-invalid' : 'is-valid' : ''}`}
              id='username'
              name='username'
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.username && touched.username && <p className='text-danger'>{errors.username}</p>}
          </div>

          <div className={`${style.input_cnt}`}>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              className={`form-control ${touched.email ? errors.email ? 'is-invalid' : 'is-valid' : null}`}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {
              touched.email && errors.email ? 
              <div className='invalid-feedback'>
                {errors.email}
              </div> : null
            }
          </div>

          <div className={`${style.input_cnt}`}>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              className={`form-control ${touched.password ? errors.password ? 'is-invalid' : 'is-valid' : null}`}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {
              touched.password && errors.password ? 
              <div className='invalid-feedback'>
                {errors.password}
              </div> : null
            }
          </div>

          <div className={`${style.input_cnt}`}>
            <label htmlFor='copyPassword'>Confirmar Password</label>
            <input
              type='password'
              name='copyPassword'
              id='copyPassword'
              className={`form-control ${touched.copyPassword ? errors.copyPassword ? 'is-invalid' : 'is-valid' : null}`}
              value={values.copyPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {
              touched.copyPassword && errors.copyPassword ? 
              <div className='invalid-feedback'>
                {errors.copyPassword}
              </div> : null
            }
          </div>
          
          {send && <div className='alert alert-success' role='alert'><p>!Felicitaciones cuenta creada!</p><p>Por favor revise su correo le enviamos un mensaje de validación.</p></div>}
          {err && <div className='alert alert-danger' role='alert'>Algo salio mal vuelva a intentarlo</div>}

          <button
            type='submit'
            className={`${style.button_sub} ${isSubmitting && 'disabled'}`}
            disabled={isSubmitting && true}
          >Registrarse
          </button>
        </div>

      </form>
      {/* <h2 className='d-none'>O inicie con:</h2>
      <div className='d-none justify-content-center'>
        <button className='btn btn-primary mx-2'>Google</button>
        <button className='btn btn-primary mx-2'>Facebook</button>
      </div> */}
    </div>
  )
}