import React from "react"
import { Link, useParams } from "react-router-dom"
import { getStreamId } from "../../store/actions/actions"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import s from "./Details.module.css";
import styled from 'styled-components';
import PagarMP from "../PagarMP/Subscriptions"
import Donations from "../PagarMP/Donations"
// import ComprarHC from "../PagarMP/ComprarHC"

const Detail = (props) => {
    
    const dispatch = useDispatch()
    const streamDetail = useSelector((state) => state.streamDetail)

    useEffect(() => {
        dispatch(getStreamId(id))
    }, [])

    return (
            <section className="h-100">
  <div className="h-100">
    <div className="row d-flex justify-content-center align-items-center h-100" style={{width: '100'}}>
      <div className="col col-xl-12">
        <div className="card">
          <div className="rounded-top text-white d-flex flex-row" style={{ backgroundImage: `url(${streamDetail[0].banner})`, height:'200px'}} >
            <div className="ms-4 mt-5 d-flex flex-column" style={{width: '150px'}}>
              <img src={streamDetail[0].image}
                alt="Generic" className="img-fluid img-thumbnail dropdown mt-4 mb-2"
                style={{width: '150px'}} />
                <div className="mb-5">
              
              <div className="container p-4 pb-0">
              
                  <section className="mb-4">
                  
                  <a
                      className="btn text-white btn-floating m-1"
                      style={{background: "#3b5998"}}
                      href={streamDetail[0].Facebook}
                      role="button"
                      ><i className="fab fa-facebook-f"></i
                  ></a>

              
                  <a
                      className="btn text-white btn-floating m-1"
                      style={{background: "#55acee"}}
                      href={streamDetail[0].Twitter}
                      role="button"
                      ><i className="fab fa-twitter"></i
                  ></a>

                  <a
                      className="btn text-white btn-floating m-1"
                      style={{background: "#ac2bac"}}
                      href={streamDetail[0].Instagram}
                      role="button"
                      ><i className="fab fa-instagram"></i
                  ></a>

                  </section>

              </div>
            </div>
            </div>
            <div className="ms-3" style={{marginTop: "8rem"}}>
              <h5>{streamDetail[0].name}</h5>
              <p>{streamDetail[0].continent}</p>
              <p>{streamDetail[0].language}</p>
            </div>
          </div>
          <div className="p-4 text-black" >
            <div className="d-flex justify-content-end text-center py-1">
            <PagarMP />
            <Donations />
              <div className="px-3">
                <p className="mb-1 h5">{streamDetail[0].rating}</p>
                <p className="small text-muted mb-0">Ranting</p>
              </div>
              <div>
                <p className="mb-1 h5">{streamDetail[0].Subscriptions}</p>
                <p className="small text-muted mb-0">Subscriptions</p>
              </div>
            </div>
          </div>
          <div className="card-body p-4 text-black">
            <div className="mb-5">
              <p className="lead fw-normal mb-1">{streamDetail[0].title}</p>
              <div className="p-4" >
                <p className="font-italic mb-1">{streamDetail[0].description}</p>
              </div>
            </div>
            <div className="mb-5">
              <p className="lead fw-normal mb-1">Categories</p>
              <div className="p-4" >
                <p className="font-italic mb-1">{streamDetail[0].categories}</p>
              </div>
            </div>
            <div className="mb-5">
              <p className="lead fw-normal mb-1">Rules</p>
              <div className="p-4" >
                <p className="font-italic mb-1">{streamDetail[0].rules}</p>
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
           
    )
}

export default Detail;
{/* <LinkContainer>
                <StyledLink to="/">Back</StyledLink>
                <span style={{ fontWeight: '700', fontSize: '20px' }}>CONTENIDO EN VIVO</span>
                {/* <StyledLink to={`/user`}>Mi Perfil</StyledLink>
            </LinkContainer>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%', marginTop: '10px', height: '88vh' }}>
                <div style={{
                    width: '15%',
                    backgroundColor: '#E3E5E5',
                    borderRadius: '16px',
                    marginBottom: '20px',
                    height: '88vh',
                }}
                >
                    <p><b>CANALES RECOMENDADOS</b></p>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '10px', overflowY: 'scroll', height: '78vh' }}>
                        {[0, 1, 2, 3, 4, 5, 6].map((e => {
                            return (
                                <div key={e} style={{
                                    display: 'flex',
                                }}
                                >
                                    <img alt="" src={streamDetail[0]?.image} className={s.img} />
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'left', padding: '10px 0', textAlign: 'left' }}>
                                        <span style={{ margin: '0' }}><b>{streamDetail[0]?.name}</b> @{streamDetail[0]?.user}</span>
                                        <span style={{ margin: '0' }}>{streamDetail[0]?.category || 'Sin Categoría'}</span>
                                        <span style={{ margin: '0' }}>{streamDetail[0]?.subcriptores || '0'} subs</span>
                                        <span style={{ margin: '0' }}><span style={{ color: '#2ce02c', margin: '0' }}>● </span>9999</span>
                                    </div>
                                </div>
                            )
                        }))}
                    </div>
                </div>
                <div style={{ width: '60%' }}>
                    <div style={{ backgroundColor: 'black', width: '100%', height: '43vh', borderRadius: '16px', position: 'relative', marginBottom: '10px' }}>
                        <div style={{
                            color: 'white',
                            backgroundColor: 'red',
                            borderRadius: '16px',
                            height: '30px',
                            width: '120px',
                            position: 'absolute',
                            top: '20px',
                            left: '20px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            lineHeight: '30px',
                            fontWeight: '700',
                        }}
                        >
                            EN DIRECTO
                        </div>
                    </div>
                    <div style={{
                        boxSizing: 'border-box',
                        backgroundColor: '#E3E5E5',
                        width: '100%',
                        borderRadius: '16px',
                        padding: '20px',
                        marginBottom: '10px',
                        height: '43vh',
                    }}
                    >
                        {streamDetail[0] && (
                            <div>
                                <div style={{
                                    display: 'flex',
                                }}
                                >
                                    <img alt="" src={streamDetail[0].image} className={s.img} />
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'left', padding: '10px 0', textAlign: 'left' }}>
                                        <span style={{ margin: '0' }}><b>{streamDetail[0].name}</b> @{streamDetail[0].user}</span>
                                        <span style={{ margin: '0' }}>{streamDetail[0].category || 'Sin Categoría'}</span>
                                        <span style={{ margin: '0' }}>{streamDetail[0].subcriptores || '0'} subs</span>
                                        <span style={{ margin: '0' }}><span style={{ color: '#2ce02c', margin: '0' }}>● </span>9999</span>
                                    </div>
                                </div>
                                <PagarMP />
                                <Donations />
                        
                                <p>{streamDetail[0].description}</p>
                                <p><b>Reglas:</b> {streamDetail[0].rules}</p>
                                <p>Network: {streamDetail[0].networks}</p>
                                <p>Contents: {streamDetail[0].contents}</p>
                            </div>)}
                    </div>
                </div>
                <div style={{
                    width: '15%',
                    backgroundColor: '#E3E5E5',
                    borderRadius: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: '88vh'
                }}
                >
                    <p style={{ fontWeight: '700' }}>CHAT EN VIVO</p>
                    <div style={{ backgroundColor: '#FFFFFF', width: '90%', height: '77vh', borderRadius: '16px', marginBottom: '10px' }}></div>
                    <div style={{ backgroundColor: '#FFFFFF', width: '90%', height: '32px', borderRadius: '16px' }}>
                        <input style={{ border: 'none', outline: 'none', lineHeight: '30px', width: '75%', height: '30px' }} />
                    </div>
                </div>
            </div>
            </div> */}
{/* const StyledLink = styled(Link)`
    cursor: pointer;
    height: 30px;
    line-height: 30px;
    color: white;
    background-color: red;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    margin: 0;
    padding: 0 10px;
    font-weight: 700;
`;

const LinkContainer = styled.div`
    display: flex;
    padding: 0 5%;
    justify-content: space-between;
    margin-top: 10px;
        `; */}

