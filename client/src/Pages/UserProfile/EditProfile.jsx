import React, { useState } from "react";
import { useEffect } from "react";
import { putUser, getUserId, logoutUser, loginUser } from "../../store/actions/actions";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const EditProfile = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const userDetail = useSelector((state) => state.user)
    const userId = userDetail._id
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        dispatch(getUserId(userId))
    }, [])

    const changeHandlerUsername = (e) => {
        setUsername(e.target.value)
    }
    const changeHandlerEmail = (e) => {
        setEmail(e.target.value)
    }
    const changeHandlerPassword = (e) => {
        setPassword(e.target.value)
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
        history.push("/")
    }

    return (
        <>
            {userDetail &&
                <div>
                    <div>
                        <h2 className="title3">Edit profile</h2>
                        <hr />
                        <form onSubmit={changeHandlerSubmit}>
                            <h6 className="divform">Name</h6>
                            <input type="text" className="textarea" value={username} onChange={changeHandlerUsername} placeholder={userDetail.name} />
                            <h6 className="divform">Email</h6>
                            <input type="text" className="textarea" value={email} onChange={changeHandlerEmail} placeholder={userDetail.email} />
                            <h6 className="divform">Password</h6>
                            <input type="password" className="textarea" value={password} onChange={changeHandlerPassword} placeholder={userDetail.password} />
                            <button submit="submit">SAVE</button>
                        </form>
                    </div>
                    <div>
                        <div className="divPicture">
                            <img className="img" src="https://imagen.nextn.es/wp-content/uploads/2014/07/1407-11-Pikachu.jpg?strip=all&lossy=1&ssl=1" />
                            <p>HashCash: $100000000</p>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default EditProfile;