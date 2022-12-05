import React, { useState } from "react";
import { useEffect } from "react";
import { putUser, getUserId, logoutUser, loginUser, getUsers } from "../../store/actions/actions";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const EditProfile = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const userDetail = useSelector((state) => state.user)
    const users = useSelector(state => state.users)
    const userId = userDetail._id
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const usersName = users.map(u => u.name)
    const usersEmail = users.map(u => u.email)

    useEffect(() => {
        dispatch(getUsers())
        dispatch(getUserId(userId))
    }, [])

    const validateUsername = (username) => {
        let error = ""
        if (!username) {
            error = "Username is required"
        } else if (usersName.includes(username)) {
            error = `The username ${username} already exists`
        }
        return error
    }
    const validateEmail = (email) => {
        let error = ""
        if (!email) {
            error = "Email is required"
        } else if (usersEmail.includes(email)) {
            error = `The email ${email} already exists`
        }
        return error
    }
    const validatePassword = (password) => {
        let error = ""
        if (!password) {
            error = "Password is required"
        } else if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/gm)) {
            error = "Must contain at least 1 uppercase, 1 lowercase and 1 number"
        }
        return error
    }
    const changeHandlerUsername = (e) => {
        setUsername(e.target.value)
        setError(validateUsername(e.target.value))
    }
    const changeHandlerEmail = (e) => {
        setEmail(e.target.value)
        setError(validateEmail(e.target.value))
    }
    const changeHandlerPassword = (e) => {
        setPassword(e.target.value)
        setError(validatePassword(e.target.value))
    }
    const changeHandlerSubmit = (e) => {
        e.preventDefault();
        const user = {
            username: username,
            email: email,
            password: password
        }
        dispatch(putUser(userId, user))
        dispatch(logoutUser())
        dispatch(loginUser(user))
        setUsername("")
        setEmail("")
        setPassword("")
        history.push("/user")
    }

    return (
        <>
            {userDetail &&
                <div>
                    <div>
                        <h2 className="title3">Edit profile</h2>
                        <hr />
                        <form id="formx" className="topBefore" onSubmit={changeHandlerSubmit}>
                            <input id="name" autocomplete="off" type="text" value={username} onChange={changeHandlerUsername} placeholder={userDetail.name} />
                            <input id="email" autocomplete="off" type="email" value={email} onChange={changeHandlerEmail} placeholder={userDetail.email} />
                            <input id="email" autocomplete="off" type="password" value={password} onChange={changeHandlerPassword} placeholder="Password" />
                            <button id="submitx" submit="submit" disabled={!username || !password || !email || error}>SAVE</button>
                            <Link to="/user">
                                <button id="submitx">CANCEL</button>
                            </Link>
                            <p className="error">{error}</p>
                        </form>
                    </div>
                    <div>
                        <div className="divPicture">
                            <img className="img" src="https://imagen.nextn.es/wp-content/uploads/2014/07/1407-11-Pikachu.jpg?strip=all&lossy=1&ssl=1" />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default EditProfile;