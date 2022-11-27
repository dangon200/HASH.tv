import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserId } from "../../store/actions/actions"
import Navbar from "../../components/NavBar/NavBar"
import { Link } from "react-router-dom";

const UserProfile = (props) => {
    const dispatch = useDispatch();
    const userId = props.match.params.id
    const userDetail = useSelector((state) => state.usersDetail)

    useEffect(() => {
        dispatch(getUserId(userId))
    }, [])

    return (
        <>
            <Navbar />
            {userDetail[0] &&
                <div>
                    <h2>USER PROFILE</h2>
                    <p>Name: {userDetail[0].name}</p>
                    <p>Email: {userDetail[0].email}</p>
                    <Link to="/">
                    <button>CREATE CHANNEL</button>
                    </Link>
                </div>}
        </>
    )
}

export default UserProfile;