import React from 'react';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import s from './PagarMp.module.css'
import Modal from 'react-bootstrap/Modal'
import { useFormik } from 'formik'

const urlApi = 'http://localhost:3001'

export default function ComprarHC(props) {
    const user = useSelector(state => state.user)
    const streamDetail = useSelector(state => state.streamDetail)
    console.log(streamDetail)
    const [show, setShow] = useState()
    const handleChange2 = () => setShow(!show)

    const { values, handleChange, handleBlur, errors, touched, handleSubmit } = useFormik({ //eslint-disable-line

    initialValues: {
      cash: '',
    },

    onSubmit: async (values, { resetForm }) => {
      setSend(true)
      if (user) {
        fetch(`${urlApi}/api/checkout/hashcash`, {
          method: 'POST',
          body: JSON.stringify({
            title: "Comprar HashCash",
            description: "HASH , players only",
            unit_price: parseInt(values.cash),
            quantity: 1,
            category_id: streamDetail[0]._id,
            id: user._id
          }),
          headers: new Headers({ 'Content-type': 'application/json'}),
        })

        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          window.open(data.data) 
          if (typeof data !== 'string') {
            console.log(data)
            // dispatch(getFavorites(data.user.id))
            setMesagge('')
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
      Comprar HashCash
    </div>
    
    <Modal show={show} onHide={handleChange2}>
      
        <Modal.Header closeButton>
        <Modal.Title className='text-dark font-weight-bold'>Comprar HashCash</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <div className="modal-body p-0 row">
        <div className={`d-flex justify-content-center col-12 col-lg-11`}>
            <form action="" onSubmit={(e)=> {console.log(e); console.log(handleSubmit); handleSubmit(e)}} className='d-flex justify-content-center mx-auto p-3'>
                        <div className={`row justify-content-center`}>
                        <div className='col-12'>
                                <div className={s.logo}></div>
                            
                            <h2 className='text-dark font-weight-bold fs-4 p-2'>Conectándote con lo que más amás</h2>
                            <p><small className="text-muted fs-4">Con HashCash podras donar a tus Streamers favoritos</small></p>
                            </div>
                            <div className='col-12'>
                            <label className='fs-5'>¿Cuanto HashCash desea comprar?
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
                             <button disabled={send && true} className='btn btn-primary fs-4 mt-4 w-25' type='submit'>Comprar</button>
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