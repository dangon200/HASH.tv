import React from "react"
import { Link } from "react-router-dom"
import { getStreamId } from "../../store/actions/actions"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import s from "./Details.module.css";
import styled from 'styled-components';

const Detail = (props) => {
    const streamId = props.match.params.id
    const dispatch = useDispatch()
    const streamDetail = useSelector((state) => state.streamDetail)

    useEffect(() => {
        dispatch(getStreamId(streamId))
    }, [])

    return (
        <div className={s.container}>
            <div className={s.linkContainer}>
                <Link className={s.linkContainer_button_link} to="/">
                    <button className={s.linkContainer_button}>Back</button>
                </Link>
                <div className={s.linkContainer_container}>
                    <h3>Contenido en vivo</h3>
                </div>
            </div>

            <div className={s.infoContainer} >
                <div className={s.infoContainer_channels} >
                    <p>Canales recomendados</p>
                    <div className={s.infoContainer_channels_img} >
                        {
                            [0, 1, 2, 3, 4, 5, 6].map((e => {
                                return (
                                    <div className={s.img_box} key={e} >
                                        <img src={streamDetail[0]?.image} className={s.img} />
                                        <div className={s.img_info} >
                                            <div className={s.img_detail_user}>
                                                <p>{streamDetail[0]?.name}</p> 
                                                <p>@{streamDetail[0]?.user}</p>
                                            </div>
                                            <div className={s.img_detail_category}>  
                                                <p>{streamDetail[0]?.category || 'Sin Categoría'}</p>
                                            </div>
                                            <div className={s.detail_sub}>
                                                <p>{streamDetail[0]?.subcriptores || '0'} subs</p>
                                            </div>
                                            <div className={s.detail_watch}>
                                                <p 
                                                style={{ color: '#2ce02c', margin: '0' }}>● 9999</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }))
                        }
                    </div>
                </div>
                <div style={{ width: '60%' }}>
                    <div 
                        style={{ backgroundColor: 'black', width: '100%', height: '43vh', borderRadius: '16px', position: 'relative', marginBottom: '10px' }}>
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

                    <div className={s.streamer_cnt}>
                        {streamDetail[0] && (
                            <div className={s.streamer_cnt_info}>
                                <div className={s.streamer_cnt_info_user} >
                                    <img src={streamDetail[0].image} className={s.img} />
                                    <div className={s.streamer_cnt_info_detail}>
                                    <div style={{ margin: '0' }}>
                                            <b>{streamDetail[0].name}</b> @{streamDetail[0].user}
                                        </div>
                                        <div style={{ margin: '0' }}>
                                            {streamDetail[0].category || 'Sin Categoría'}
                                        </div>
                                        <div style={{ margin: '0' }}>
                                            {streamDetail[0].subcriptores || '0'} subs
                                        </div>
                                        <div style={{ margin: '0' }}>
                                            <span style={{ color: '#2ce02c', margin: '0' }}>● </span>9999
                                        </div>
                                    </div>  
                                </div>
                                <div className={s.streamer_desc}>
                                    <div className={s.streamer_desc_about}>
                                       <p className={s.streamer_bgc_red}>Acerca de {streamDetail[0].description}</p>
                                    </div>
                                    <div className={s.streamer_desc_rules}>
                                        <p><span className={s.streamer_bgc_blue}>Reglas:</span> {streamDetail[0].rules}</p>
                                    </div>
                                    <div className={s.streamer_desc_net}>
                                        <p><span className={s.streamer_bgc_blue}>Network:</span> {streamDetail[0].networks}</p>
                                    </div>
                                    <div className={s.streamer_desc_content}>
                                        <p><span className={s.streamer_bgc_blue}>Contents:</span> {streamDetail[0].contents}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className={s.chat} >
                    <p>Chat en vivo</p>
                    <div className={s.chat_cnt}></div>
                    <input type="text" className={s.chat_input} placeholder='Escribe el mensaje'/>
                </div>
            </div>
        </div>
    )
}


export default Detail;