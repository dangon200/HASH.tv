import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Navbar from "../NavBar/NavBar";
import { postUser } from "../../store/actions/actions";

const Form = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const validateName = (name) => {
        let error = ""
        if (!name) {
            error = "Name is required"
        } else if (!name.match(/^[A-Za-z]+$/)) {
            error = "Name must contain only letters";
        }
        return error;
    }

    const validateEmail = (email) => {
        let error = ""
        if (!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email)) {
            error = "Contains incorrect characters"
        }
        return error
    }

    const validatePassword = (password) => {
        let error = ""
        if (!/(?=(.*[0-9]))/.test(password)) {
            error = "The password must have one number"
        } else if (!/(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])/.test(password)) {
            error = "The password must have one special character"
        } else if (!/(?=.*[a-z])/.test(password)) {
            error = "The password must have one lowercase letter"
        } else if (!/(?=(.*[A-Z]))/.test(password)) {
            error = "The password must have one uppercase letter"
        } else if (!/(?=(.*)).{8,}/.test(password)) {
            error = "The password at least 8 digits"
        }
        return error;
    }

    const nameChangeHandler = (e) => {
        setName(e.target.value)
        setError(validateName(e.target.value))
    }

    const emailChangeHandler = (e) => {
        setEmail(e.target.value)
        setError(validateEmail(e.target.value))
    }

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value)
        setError(validatePassword(e.target.value))
    }
    const handlerSubmit = (e) => {
        e.preventDefault()
        const dataUser = {
            name: name,
            email: email,
            password: password
        }
        dispatch(postUser(dataUser))
        setName("")
        setEmail("")
        setPassword("")
    }
    return (
        <>
            <Navbar />
            <h3>CREATE USER</h3>
            <form onSubmit={handlerSubmit}>
                <div>
                    <label>Name: </label>
                    <input type="text" onChange={nameChangeHandler} value={name} />
                </div>
                <div>
                    <label>E-mail: </label>
                    <input type="text" onChange={emailChangeHandler} value={email} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={passwordChangeHandler} value={password} />
                </div>
                <div>
                    <button submit="submit">CREATE</button>
                </div>
                {error}
            </form>
        </>
    )
}

export default Form;