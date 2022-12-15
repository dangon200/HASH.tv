import React from 'react';
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getStreamId } from "../../store/actions/actions"
import PagarMP from "../PagarMP/Subscriptions"
import Donations from "../PagarMP/Donations"
import App from '../100msViewer/App.js'

const StreamProf2 = (props) => {
  const { id } = useParams()
    const dispatch = useDispatch()
    const stream = useSelector((state) => state.streamDetail)
       console.log(stream)

   useEffect(() => {
        dispatch(getStreamId(id))
    }, [])
    return (
        <section className="h-100">
  <div className="h-100">
  <div className="justify-content-center align-items-center h-100">
  <App/>
  </div>
    <div className="row d-flex justify-content-center align-items-center h-100 mt-4" style={{width: '100'}}>
      <div className="col col-xl-12">
        <div className="card">
          <div className="rounded-top text-white d-flex flex-row" style={{ backgroundImage: `url(${stream[0].banner})`, height:'200px'}} >
            <div className="ms-4 mt-5 d-flex flex-column" style={{width: '150px'}}>
              <img src={stream[0].image}
                alt="Generic" className="img-fluid img-thumbnail dropdown mt-4 mb-2"
                style={{width: '150px'}} />
                <div className="mb-5">
              
              <div className="container p-1 pb-4">
              
                  <section className="mb-4">
                  <a
                      className="btn text-white btn-floating m-1"
                      style={{background: "#3b5998"}}
                      href={stream[0].Facebook}
                      role="button"
                      ><i className="fab fa-facebook-f"></i
                  ></a>

              
                  <a
                      className="btn text-white btn-floating m-1"
                      style={{background: "#55acee"}}
                      href={stream[0].Twitter}
                      role="button"
                      ><i className="fab fa-twitter"></i
                  ></a>

                  <a
                      className="btn text-white btn-floating m-1"
                      style={{background: "#ac2bac"}}
                      href={stream[0].Instagram}
                      role="button"
                      ><i className="fab fa-instagram"></i
                  ></a>

                  </section>

              </div>
            </div>
            </div>
            <div className="ms-3" style={{marginTop: "8rem"}}>
              <h1>{stream[0].name}</h1>
              <p>{stream[0].continent}</p>
              <p>{stream[0].language}</p>
            </div>
          </div>
          <div className="p-4 text-black" >
            <div className="d-flex justify-content-end text-center py-1">
            <PagarMP />
            <Donations />
              <div className="px-3">
                <p className="mb-1 h5">{stream[0].rating}</p>
                <p className="small text-muted mb-0">Ranting</p>
              </div>
              <div>
                <p className="mb-1 h5">{stream[0].Subscriptions}</p>
                <p className="small text-muted mb-0">Subscriptions</p>
              </div>
            </div>
          </div>
          <div className="card-body p-4 text-black">
            <div className="mb-5">
              <p className="lead fw-normal mb-1">{stream[0].title}</p>
            </div>
            <div className="mb-5">
            <p className="lead fw-normal mb-1">Categories</p>
            <div className="p-4" >
                <p className="font-italic mb-1">{stream[0].description}</p>
              </div>
              </div>
            <div className="mb-5">
              <p className="lead fw-normal mb-1">Categories</p>
              <div className="p-4" >
                <p className="font-italic mb-1">{stream[0].categories}</p>
              </div>
            </div>
            <div className="mb-5">
              <p className="lead fw-normal mb-1">Rules</p>
              <div className="p-4" >
                <p className="font-italic mb-1">{stream[0].rules}</p>
              </div>
            </div>
            
            </div>
            
            {/* <div className="d-flex justify-content-between align-items-center mb-4">
              <p className="lead fw-normal mb-0">Recent photos</p>
              <p className="mb-0"><a href="#!" className="text-muted">Show all</a></p>
            </div>
            <div className="row g-2">
              <div className="col mb-2">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                  alt="image 1" className="w-100 rounded-3"/>
              </div>
              <div className="col mb-2">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                  alt="image 1" className="w-100 rounded-3"/>
              </div>
            </div>
            <div className="row g-2">
              <div className="col">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                  alt="image 1" className="w-100 rounded-3"/>
              </div>
              <div className="col">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                  alt="image 1" className="w-100 rounded-3"/>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
</section>
    );
};

export default StreamProf2;