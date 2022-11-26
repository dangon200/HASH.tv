import React from "react"
import Navbar from "../NavBar/NavBar"
import { Link } from "react-router-dom"
import { getStreamId } from "../../store/actions/actions"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import s from "./Details.module.css"

const Detail = (props) => {
    const streamId = props.match.params.id
    const dispatch = useDispatch()
    const streamDetail = useSelector((state) => state.streamDetail)

    useEffect(() => {
        dispatch(getStreamId(streamId))
    }, [])

    return (
        <div className={s.cnt}>
            <Navbar />


            {streamDetail[0] && (
                
                <div className={s.detail_cnt}>

                    <Link 
                        to="/user" 
                        style={{textDecoration:'none'}}
                        title={`Ir al perfil de ${streamDetail[0].name}`}
                    >
                        <div className={s.detail_cnt_user}>
                            <div className={s.detail_cnt_user__img}>
                                <img src={streamDetail[0].image} className={s.img} />
                            </div>
                            <div className={s.detail_cnt_user__name}>
                                <p>Name: {streamDetail[0].name}</p>
                                <p>@{streamDetail[0].user}</p>
                            </div>
                        </div>
                    </Link>

                    <div className={s.detail_cnt_info}>
                        <div className={s.detail_cnt_info__cnt}>
                            <div className={s.detail_cnt_info__list}>
                                <p>Category: {streamDetail[0].category}</p>
                            </div>
                            <div className={s.detail_cnt_info__list}>
                                <p>{streamDetail[0].description}</p>
                            </div>
                            <div className={s.detail_cnt_info__list}>
                                <p>Suscriptores: {streamDetail[0].subcriptores}</p>
                            </div>
                            <div className={s.detail_cnt_info__list}>
                                <p>Rules: {streamDetail[0].rules}</p>
                            </div>
                            <div className={s.detail_cnt_info__list}>
                                <p>Network: {streamDetail[0].networks}</p>
                            </div>
                        </div>
                        <div className={s.detail_cnt_info__contents}>
                            {/* <p>Contents: {streamDetail[0].contents}</p> */}
                            <iframe width="100%" height="450px"  src="https://www.youtube.com/embed/rUxyKA_-grg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                
                    <Link to="/">
                        <button className={s.button_back}>Back</button>
                    </Link>
            
                </div>
                                   
            )}
        </div>
    )
}

export default Detail;