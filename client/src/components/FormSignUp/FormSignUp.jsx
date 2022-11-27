import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { schemaValidateUser } from '../utilities/schemas'
// import { provinces } from '../utilities/data'
import axios from 'axios'
import { useState } from 'react'

const urlApi = 'http://localhost:3001'

export default function FormLogin() {
  const dispatch = useDispatch() //eslint-disable-line
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      copyPassword: '',
      roles: 'User'
    },
    //validationSchema: schemaValidateUser,

    onSubmit: async (values, { resetForm }) => {
      try {
         fetch(`${urlApi}/api/auth/signup/`, {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-type': 'application/json'
          }
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setSend(true)
          resetForm()
        })
      } catch (error) {
        console.error(error)
        setErr(true)
        setTimeout(() => { setErr(false) }, 3000)
      }
    }
  })
  const [send, setSend] = useState(false)
  const [err, setErr] = useState(false)
  return (
    <div className='container user-select-none'>
      <form onSubmit={(e) => {
        formik.handleSubmit(e)
      }} className='card w-75 d-flex justify-content-center mx-auto my-3 p-5' autoComplete='off'>
        <div className='row justify-content-center'>
          <div className='col-12'>
            <label htmlFor='username' className='form-label'>Nombre de usuario</label>
            <input
              type='text'
              className={`form-control ${formik.touched.username ? formik.errors.username ? 'is-invalid' : 'is-valid' : ''}`}
              id='username'
              name='username'
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.username && formik.touched.username && <p className='text-danger'>{formik.errors.username}</p>}
          </div>
          <div className='col-12'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              className={`form-control ${formik.touched.email ? formik.errors.email ? 'is-invalid' : 'is-valid' : null}`}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? <div className='invalid-feedback'>{formik.errors.email}</div> : null}
          </div>
          <div className='col-12'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              className={`form-control ${formik.touched.password ? formik.errors.password ? 'is-invalid' : 'is-valid' : null}`}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? <div className='invalid-feedback'>{formik.errors.password}</div> : null}
          </div>
          <div className='col-12'>
            <label htmlFor='copyPassword'>Confirmar Password</label>
            <input
              type='password'
              name='copyPassword'
              id='copyPassword'
              className={`form-control ${formik.touched.copyPassword ? formik.errors.copyPassword ? 'is-invalid' : 'is-valid' : null}`}
              value={formik.values.copyPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.copyPassword && formik.errors.copyPassword ? <div className='invalid-feedback'>{formik.errors.copyPassword}</div> : null}
          </div>
          {send && <div class='alert alert-success' role='alert'>Felicitaciones creo su cuenta</div>}
          {err && <div class='alert alert-danger' role='alert'>Algo salio mal vuelva a intentarlo</div>}

          <button
            type='submit'
            className={`col-6 btn btn-success mt-3 ${formik.isSubmitting && 'disabled'}`}
            disabled={formik.isSubmitting && true}
          >Enviar
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