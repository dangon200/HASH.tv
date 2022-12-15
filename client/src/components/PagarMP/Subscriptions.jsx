import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import s from './PagarMp.module.css'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
// import Button from 'react-bootstrap/esm/Button'

const urlApi = 'http://localhost:3001'

export default function PagarMP () {
  const user = useSelector((state) => state.user)
  const streamDetail = useSelector((state) => state.streamDetail)
  const [show, setShow] = useState()
  const handleChange = () => setShow(!show)
  console.log(streamDetail)

  const redirigirMP = (e) => {
    const article = document.querySelector(e);
    var time = article.dataset.time
    var price = article.dataset.price
    // console.log(time)
    // console.log(price)
    const buying = {
        title: `Suscripción al canal ${streamDetail[0].name}`,
        description: time,
        unit_price: parseInt(price),
        quantity: 1,
        category_id: streamDetail[0]._id,
        id: user._id
      }
    fetch(`${urlApi}/api/checkout`, {
      method: 'POST',
      body: JSON.stringify(buying),
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => {
        window.open(data.data) 
      })
  }
  return (
    <>
    <div className={s.navlink} type='button' onClick={handleChange}>
      SUSCRIBIRSE
    </div>
    
    <Modal show={show} onHide={handleChange}>
      
        <Modal.Header closeButton>
        <Modal.Title className='text-dark font-weight-bold' >Suscribirse al canal {streamDetail[0].name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <div className="modal-body p-0 row">
                        <div className={` col-12 col-lg-11`}>
                            
                                <div className={s.logo}></div>
                            
                            <h2 className='text-dark font-weight-bold fs-3 p-2'>Ahorra suscribiendote más tiempo</h2>
                            <p><small className="text-muted">Apoya cada mes y suscríbete para que {streamDetail.title} siga haciendo eso que se le da tan bien.</small></p>

                            <p className="text-muted"><small>Con esta suscripción tendras los siguientes beneficios</small></p>
                            <div className="text-muted hurry"><small>- Notificacion por correo cuando {streamDetail[0].name} empiece a transmitir</small></div>
                            <div className="text-muted hurry"><small>- 1 SuperChat semanal</small></div>
                            <div className="text-muted hurry"><small>- Y mucho más</small></div>
                            <p><small className="text-muted">Planes para suscribirse</small></p>
                            <div className="d-flex mt-2 mb-5">
                                <button id="comprar3" type="button" className={`btn ${s.booking}`} data-time="3" data-price="1500" onClick={(e)=> {redirigirMP("#comprar3")}}><label><strong>3 Meses<br /></strong><small
                                            className="text-muted">1500 ARS</small></label></button>
                                <button id="comprar6" type="button" className={`btn ${s.booking} ml-4`} data-time="6" data-price="2500" onClick={(e)=> {redirigirMP("#comprar6")}}><label><strong>6 Meses<br /></strong><small
                                            className="text-muted">2500 ARS</small></label></button>
                                <button id="comprar12" type="button" className={`btn ${s.booking} ml-4`} data-time="12" data-price="3500" onClick={(e)=> {redirigirMP("#comprar12")}}><label><strong>12 Meses<br /></strong><small
                                            className="text-muted">3500 ARS</small></label></button>
                            </div>
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