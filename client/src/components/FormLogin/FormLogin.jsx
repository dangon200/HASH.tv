import style from './formLogin.module.css'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie'
import jwtdecode from 'jwt-decode'
import { schemaLogin } from '../utilities/schemas'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser, logoutUser } from '../../store/actions/actions'

export default function FormLogin () {
  const cookies = new Cookies()
  const user = cookies.get('TOKEN')
  const dispatch = useDispatch()
  const userLogged = useSelector(state => state.user)
  const urlApi = 'http://localhost:3001'

  function handleCallbackResponse (response) {
    const userObject = jwtdecode(response.credential)
    console.log(userObject)
    fetch(`${urlApi}/api/user/email/` + userObject.email, {
      method: 'GET',
      headers: new Headers({ 'Content-type': 'application/json'}),
    })
      .then(res => res.json())
      .then(data => {
        if (!data) {
          fetch(`${urlApi}/api/auth/signup/`, {
            method: 'POST',
            body: JSON.stringify({
              username: userObject.name,
              email: userObject.email,
              password: 'password123',
              roles: 'User'
            }),
            headers: {
              'Content-type': 'application/json'
            },
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data)
            })
        }
        fetch(`${urlApi}/api/auth/signin`, {
          method: 'POST',
          body: JSON.stringify({
            email: userObject.email,
            password: 'password123'
          }),
          headers: new Headers({ 'Content-type': 'application/json'}),
        })

          .then((res) => res.json())
          .then((data) => {
            if (typeof data !== 'string') {
              cookies.set('TOKEN', data, {
                path: '/'
              })
              dispatch(loginUser(data.user))
              // dispatch(getFavorites(data.user.id))
              setSuccess(true)
              setTimeout(() => { setSuccess(false) }, 3000)
            } else {
              setError(!err)
              setTimeout(() => {
                setError(false)
              }, 3000)
            }
          })
      }

      )
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: '986425151349-1hmelo1dpur0scsmtgi4a2iicjksoqbi.apps.googleusercontent.com',
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      { theme: 'outline', size: 'large' }
    )
  }, [user])//eslint-disable-line

  const { values, handleChange, handleBlur, errors, touched, handleSubmit } = useFormik({ //eslint-disable-line

    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: schemaLogin,

    onSubmit: async (values, { resetForm }) => {
      setSend(true)
      if (!user) {
        fetch(`${urlApi}/api/auth/signin`, {
          method: 'POST',
          body: JSON.stringify({
            email: values.email,
            password: values.password
          }),
          headers: new Headers({ 'Content-type': 'application/json'}),
        })

          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            if (typeof data !== 'string') {
              cookies.set('TOKEN', data, {
                path: '/'
              })
              console.log(data)
              dispatch(loginUser(data.user))
              // dispatch(getFavorites(data.user.id))
              setMesagge('Ha iniciado sesión')
              setSend(false)
              resetForm()
              setSuccess(true)
              setTimeout(() => { setSuccess(false) }, 5000)
            } else {
              setMesagge(data)
              setError(true)
              setSend(false)
              setTimeout(() => {
                setError(false)
              }, 5000)
            }
          })
          .catch(err => {
            setSend(false)
            setMesagge(err.data)
            setError(true)
            setTimeout(() => {
              setError(false)
            }, 5000)
          })
      }
    }
  })
  const [send, setSend] = useState(false)
  const [message, setMesagge] = useState('')
  const [err, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  function removeCookies () {
    dispatch(logoutUser())
    cookies.remove('TOKEN')
  }
  if (user) {
    return (
      <div className={style.container}>
        <div className='modal-content'>
          <button className='btn btn-danger btn-lg justify-content-center align-middle fs-5 mt-5 ' type='submit' onClick={() => removeCookies()}>Cerrar sesión</button>
        </div>

      </div>
    )
  }
  return (
    <div className='user-select-none'>
      <form onSubmit={(e) => {
        console.log(e)
        console.log(handleSubmit)
        handleSubmit(e)
      }} className='card d-flex justify-content-center mx-auto my-3 p-5' autoComplete='off'>
        <div className='row justify-content-center'>
          <div className='col-12'>
            <label htmlFor='email' className='fs-3'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              className={`form-control p-2 ${!err ? touched.email ? errors.email ? 'is-invalid' : 'is-valid' : null : 'is-invalid'}`}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && errors.email ? <div className='invalid-feedback fs-4'>{errors.email}</div> : null}
          </div>
          <div className='col-12'>
            <label htmlFor='password' className='fs-3'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              className={`form-control p-2
                      ${!err ? touched.password ? errors.password ? 'is-invalid' : 'is-valid' : null : 'is-invalid'}`}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.password && errors.password ? <div className='invalid-feedback fs-4'>{errors.password}</div> : null}
          </div>
          {!userLogged && <button disabled={send && true} className='btn btn-primary fs-4 mt-3 ' type='submit'>{!send ? 'Iniciar sesión' : '....'}</button>}

          {err &&
            <div className='alert alert-danger mt-3 text-center' role='alert'><p>{message}</p></div>}
          {success &&
            <div className='alert alert-success mt-3 text-center' role='alert'><p>{message}</p> </div>}
          <div
            className={user ? style.googleBtnHide : style.googleBtn}
            id='signInDiv'
          />
        </div>
      </form>
    </div>
  )
}
