import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserId } from "../../store/actions/actions"
import { Link } from "react-router-dom";
import Navbar from "../../components/NavBar/NavBar";
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
                <div>
                    <div>
                        <h2 className="title3">User profile</h2>
                        <hr />
                        <form id="formx" className="topBefore">
                            <input id="name" autocomplete="off" value={userDetail.username || userDetail.name} />
                            <input id="email" autocomplete="off" value={userDetail.email} />
                            <Link to='user/edit'>
                                <button id="submitx" submit="submit">Edit profile</button>
                            </Link>
                        </form>
                    </div>
                    <div>
                        <div className="divPicture">
                            <img className="img" src="https://imagen.nextn.es/wp-content/uploads/2014/07/1407-11-Pikachu.jpg?strip=all&lossy=1&ssl=1" />
                            <div className="hashcash">
                                <h4 className="hashcashtitle">HashCash</h4>
                                <hr />
                                <h5 className="hashcashmoney">H$C</h5>
                                <h5 className="hashcashdinero">100</h5> 
                            </div>
                        </div>
                    </div>
                </div>
            }
            {/* <div className="button">
                <Link to="/stream">
                    <button>Create channel</button>
                </Link>
            </div>
            <div className="button">
                <Link to={`{/userstreams/${userId}}`}>
                    <button>My channels</button>
                </Link>
            </div> */}
        </>
    )
}

export default UserProfile;