import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/actions/actions";
import { Link } from "react-router-dom";
import './FormSingIn.css'

const SingIn = () => {
    const dispatch = useDispatch()
    const [singIn, setSingIn] = useState(false)
    const showSingIn = () => setSingIn(!singIn)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const emailChangeHandler = (e) => {
        setEmail(e.target.value)
    }
    const passwordChangeHandler = (e) => {
        setPassword(e.target.value)
    }
    const handlerSubmit = (e) => {
        e.preventDefault()
        const data = {
            email: email,
            password: password
        }
        dispatch(loginUser(data))
        setEmail("")
        setPassword("")
    }

    return (
        <>
            <button onClick={showSingIn}>SingIn</button>
            <nav className={singIn ? 'singin-menu active' : 'singin-menu'}>
                <form onSubmit={handlerSubmit}>
                    <input type="email" placeholder="E-mail" onChange={emailChangeHandler} value={email} />
                    <input type="password" placeholder="Password" onChange={passwordChangeHandler} value={password} />
<Link to="/createUser">
                    <button submit="submit" disabled={!email || !password}>LOGIN</button>
                    </Link>
                </form>
            </nav>
        </>
    )
}

export default SingIn;