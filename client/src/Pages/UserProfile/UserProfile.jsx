import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserId } from "../../store/actions/actions"
import { Link } from "react-router-dom";
import Navbar from "../../components/NavBar/NavBar";
import Card from 'react-bootstrap/Card';
import "./UserProfile.css"

const UserProfile = () => {
    const dispatch = useDispatch();
    const userDetail = useSelector((state) => state.user)
    const userId = userDetail._id

    useEffect(() => {
        dispatch(getUserId(userId))
    }, [])

    return (
        <>
            <Navbar />
            {userDetail &&
                    <div className="container">
                        <div className="form1">
                        <h2 className="title3">User profile</h2>
                        <hr />
                        
                        <form id="formx" className="form2">
                            <input id="name" autocomplete="off" value={userDetail.username || userDetail.name} />
                            <input id="email" autocomplete="off" value={userDetail.email} />
                            <Link to='user/edit'>
                                <button id="submitx" submit="submit">Edit profile</button>
                            </Link>
                        </form>
                        </div>
                        <div className="divPicture">
                            <img alt="" className="img" src="https://imagen.nextn.es/wp-content/uploads/2014/07/1407-11-Pikachu.jpg?strip=all&lossy=1&ssl=1" />
                            <div className="hashcash">
                                <h4 className="hashcashtitle">HashCash</h4>
                                <hr />
                                <div>
                                <h5 className="hashcashmoney">H$C</h5>
                                <h5 className="hashcashdinero">100</h5> 
                                </div>
                            </div>
                        </div>
                    </div>

            }
        </>
    )
}

export default UserProfile;