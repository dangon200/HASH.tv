import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import s from './PagarMp.module.css'
import Modal from 'react-bootstrap/Modal'
import { useFormik } from 'formik'
// import axios from 'axios'
// import Button from 'react-bootstrap/esm/Button'

const urlApi = 'http://localhost:3001'

export default function Donations () {
  const user = useSelector(state => state.user)
  const streamDetail = useSelector(state => state.streamDetail)
  const [show, setShow] = useState()
  const handleChange2 = () => setShow(!show)
 
  const { values, handleChange, handleBlur, errors, touched, handleSubmit } = useFormik({ //eslint-disable-line

    initialValues: {
      cash: '',
      comment: ''
    },

    onSubmit: async (values, { resetForm }) => {
      setSend(true)
      if (user) {
        fetch(`${urlApi}/api/donations`, {
          method: 'POST',
          body: JSON.stringify({
            user: user._id,
            cash: values.cash,
            comment: values.comment,
            streamer: streamDetail[0]._id
          }),
          headers: new Headers({ 'Content-type': 'application/json'}),
        })

        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          if (typeof data !== 'string') {
            console.log(data)
            // dispatch(getFavorites(data.user.id))
            setMesagge('Donación reaizada exitosamente')
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

  return (
    <>
    <div className={s.navlink} type='button' onClick={handleChange2}>
      DONACIONES
    </div>
    
    <Modal show={show} onHide={handleChange2}>
      
        <Modal.Header closeButton>
        <Modal.Title className='text-dark font-weight-bold'>Donar HashCash a {streamDetail[0].user}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <div className="modal-body p-0 row">
        <div className={`d-flex justify-content-center col-12 col-lg-11`}>
            <form action="" onSubmit={(e)=> {console.log(e); console.log(handleSubmit); handleSubmit(e)}} className='d-flex justify-content-center mx-auto p-3'>
                        <div className={`row justify-content-center`}>
                        <div className='col-12'>
                                <div className={s.logo}></div>
                            
                            <h2 className='text-dark font-weight-bold fs-4 p-2'>Gracias {user.name} tu aporte es muy valioso</h2>
                            <p><small className="text-muted fs-4">Apoya a {streamDetail[0].user} donando HashCash para siga haciendo eso que se le da tan bien.</small></p>
                            </div>
                            <div className='col-12'>
                            <label className='fs-5'>¿Cuanto HashCash desea donar?
                            <input 
                                 className={'form-control p-2'}
                                 name='cash'
                                 id='cash'
                                 type="number" 
                                 placeholder='Minimo 100 HC'
                                 value={values.cash}
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                             />
                            
                            </label>
                            </div>
                            <div className='col-12'>
                            <label className='fs-5'>Deje aqui un comentario para {streamDetail[0].user}
                            <input 
                                 className={'form-control p-2'}
                                 name='comment'
                                 id='comment'
                                 type="text" 
                                 placeholder='Su comentario'
                                 value={values.comment}
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                             />
                             </label>
                             </div>
                             <button disabled={send && true} className='btn btn-primary fs-4 mt-4 w-25' type='submit'>Donar</button>
                             {err &&
                                <div className='alert alert-danger mt-4 text-center' role='alert'><p>{message}</p></div>}
                              {success &&
                                <div className='alert alert-success mt-4 text-center' role='alert'><p>{message}</p> </div>}
                        </div>
            </form>
            </div>
        </div>
                   
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-between align-items-center'>
          <p className="text-muted hurry" >Hash, players only</p>
        </Modal.Footer>
    </Modal>
  </>
  )
  }