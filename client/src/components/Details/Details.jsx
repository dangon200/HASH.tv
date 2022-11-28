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
        <div>
            <Navbar />
            <Link to="/user">
                <button>User</button>
            </Link>

            {streamDetail[0] && (
                <div>
                    <img src={streamDetail[0].image} className={s.img}/>
                    <p>Name: {streamDetail[0].name}</p>
                    <p>User: {streamDetail[0].user}</p>
                    <p>Category: {streamDetail[0].category}</p>
                    <p>Description: {streamDetail[0].description}</p>
                    <p>Suscriptores: {streamDetail[0].subcriptores}</p>
                    <p>Rules: {streamDetail[0].rules}</p>
                    <p>Network: {streamDetail[0].networks}</p>
                    <p>Contents: {streamDetail[0].contents}</p>
                </div>)}
        </div>
    )
}

export default Detail;