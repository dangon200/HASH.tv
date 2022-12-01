import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserId } from "../../store/actions/actions"
import { Link } from "react-router-dom";
import "./UserProfile.css"

const UserProfile = (props) => {
    const dispatch = useDispatch();
    const userId = props.match.params.id
    const userDetail = useSelector((state) => state.usersDetail)
    useEffect(() => {
        dispatch(getUserId(userId))
    }, [])

    return (
        <>
            {userDetail[0] &&
                <div>
                    <h2 className="title3">USER PROFILE</h2>
                    <div className="container3">
                        <div className="card-container3">
                            <div className="description3">
                                <div>
                            <p>Name: {userDetail[0].name}</p>
                            <p>Email: {userDetail[0].email}</p>
                            <Link to="/stream"> 
                            <button>CREATE CHANNEL</button>
                            </Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>}
        </>
    )
}

export default UserProfile;