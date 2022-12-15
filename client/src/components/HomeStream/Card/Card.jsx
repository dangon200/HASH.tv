import Modal from 'react-bootstrap/Modal'
import UpdateStream from "../UpdateStream/UpdateStream";
import styles from './Card.module.css'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import App from '../../100msBroadcast/App.js'

const Card = ({stream}) => {
  const [show, setShow] = useState()
  const handleChange = () => setShow(!show)
  
    console.log(stream, 'stream')

   

    return (
      <section className="h-100 justify-content-center">
  <div className="h-100">
  <div className="align-items-center h-100 col col-xl-12">
   <App/> 
  </div>
    <div className="d-flex justify-content-center align-items-center h-100 mt-4" style={{width: '95'}}>
      <div className="justify-content-center col col-xl-12">
        <div className="card">
          <div className="rounded-top text-white d-flex flex-row" style={{ backgroundImage: `url(${stream.banner})`, height:'200px'}} >
            <div className="ms-4 mt-5 d-flex flex-column" style={{width: '150px'}}>
              <img src={stream.image}
                alt="Generic" className="img-fluid img-thumbnail dropdown mt-4 mb-2"
                style={{width: '150px', height: '150px'}} />
                <div className={`btn dropdown btn-outline-dark`} type='button' onClick={handleChange}>
                 Edit
                </div>
      
                <Modal  size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        show={show} 
                        onHide={handleChange}>
        
                <Modal.Header closeButton>
               <Modal.Title>Edit your Channel</Modal.Title>
                </Modal.Header>

                 <Modal.Body>
                 <UpdateStream id={stream._id}></UpdateStream>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-between align-items-center'>
            Hash, players only...
          </Modal.Footer>
      </Modal>
              {/* <button type="button" className="btn dropdown btn-outline-dark" data-mdb-ripple-color="dark">
                Edit profile
              </button> */}
            </div>
            <div className="ms-3" style={{marginTop: "5rem"}}>
              <h2 >{stream.title}</h2>
              <p>{stream.continent}</p>
              <p>{stream.language}</p>
            </div>
          </div>
          <div className="p-4 text-black" >
            <div className="d-flex justify-content-end text-center py-1">
              <div className="px-3">
                <p className="mb-1 h5">{stream.rating}</p>
                <p className="small text-muted mb-0">Ranting</p>
              </div>
              <div>
                <p className="mb-1 h5">{stream.Subscriptions}</p>
                <p className="small text-muted mb-0">Subscriptions</p>
              </div>
            </div>
          </div>
          <div className="card-body p-4 text-black">
            <div className="mb-5">
              <p className="lead fw-normal mb-1">About</p>
              <div className="p-4" >
                <p className="font-italic mb-1">{stream.description}</p>
              </div>
            </div>
            <div className="mb-5">
              <p className="lead fw-normal mb-1">Category</p>
              <div className="p-4" >
                <p className="font-italic mb-1">{stream.category}</p>
              </div>
            </div>
            <div className="mb-5">
              <p className="lead fw-normal mb-1">Rules</p>
              <div className="p-4" >
                <p className="font-italic mb-1">{stream.rules}</p>
              </div>
            </div>
            <div className="mb-5 justify-content-center ">
              
                <div class="container p-4 pb-0">
                
                    <section class="mb-4">
                    
                    <a
                        class="btn text-white btn-floating m-1"
                        style={{background: "#3b5998"}}
                        href={stream.Facebook}
                        role="button"
                        ><i class="fab fa-facebook-f"></i
                    ></a>

                
                    <a
                        class="btn text-white btn-floating m-1"
                        style={{background: "#55acee"}}
                        href={stream.Twitter}
                        role="button"
                        ><i class="fab fa-twitter"></i
                    ></a>

                    <a
                        class="btn text-white btn-floating m-1"
                        style={{background: "#ac2bac"}}
                        href={stream.Instagram}
                        role="button"
                        ><i class="fab fa-instagram"></i
                    ></a>

                    </section>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


        </section>
    );
}

export default Card
