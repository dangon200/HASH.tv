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
                        <form>
                            <h6 className="divform">Name</h6>
                            <textarea readOnly="" className="textarea">{userDetail.username || userDetail.name}</textarea>
                            <h6 className="divform">Email</h6>
                            <textarea readOnly="" className="textarea">{userDetail.email}</textarea>
                            <Link to='user/edit'>
                                <button submit="submit">Edit profile</button>
                            </Link>
                        </form>
                    </div>
                    {/* añadir modif password
                    2 botones: editar info, opcional: cambiar contraseña */}

                    <div>
                        <div className="divPicture">
                            <img className="img" src="https://imagen.nextn.es/wp-content/uploads/2014/07/1407-11-Pikachu.jpg?strip=all&lossy=1&ssl=1" />
                            <p>HashCash: $100000000</p>
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