import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from "../../store/actions/actions"
import { useEffect } from "react"
import Cookies from 'universal-cookie'

function Logout() {
    const cookies = new Cookies()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    
    useEffect(() => {
        dispatch(logoutUser)
        cookies.remove('TOKEN')
    }, [dispatch ,user._id])
    document.location ="http://localhost:3000/"
    return (
        <div>
            
        </div>
    );
}

export default Logout;