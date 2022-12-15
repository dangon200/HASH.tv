import React from 'react';
import './streamPro.css'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserId } from "../../store/actions/actions"
import { getStreamId } from "../../store/actions/actions"

const StreamProfile = () => {
  const dispatch = useDispatch()
  const user1 = useSelector( state => state.user)
  const user = useSelector( state => state.usersDetail)
  const streamDetail = useSelector( state => state.streamDetail)
  const [id, setId] = useState()

    useEffect(() => {
      dispatch(getUserId(user1._id))
      dispatch(getStreamId(id))
  },[id])

    return (
      <div className="card">
      <div className="card-header"
      >

            <div className="card-header-slanted-edge">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><img src={user1.image} className="btn-follow" /><path className="polygon" d="M-30,100,1000,200V0Z" /></svg>
                
            </div>
      </div>

      <div className="card-body">
          <h2 className="name">{user1.name} </h2>
          <h4 className="job-title">{streamDetail.title}</h4>
          <div className="bio">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, aperiam.</div>
          <div className="social-accounts">
            <a href="#"><img src="https://res.cloudinary.com/dj14cmwoz/image/upload/v1491077480/profile-card/images/dribbble.svg" alt="" /><span className="sr-only">Dribbble</span></a>
            <a href="#"><img src="https://res.cloudinary.com/dj14cmwoz/image/upload/v1491077480/profile-card/images/twitter.svg" alt="" /><span className="sr-only">Twitter</span></a>
            <a href="#"><img src="https://res.cloudinary.com/dj14cmwoz/image/upload/v1491077480/profile-card/images/instagram.svg" alt="" /><span className="sr-only">Instagram</span></a>
          </div>
      </div>

      <div className="card-footer">
          <div className="stats">
              <div className="stat">
                <span className="label">Following</span>
                <span className="value">56K</span>
              </div>
              <div className="stat">
                <span className="label">Followers</span>
                <span className="value">940</span>
              </div>
              <div className="stat">
                <span className="label">Likes</span>
                <span className="value">320</span>
              </div>
          </div>
      </div>
  </div>
    )
};

export default StreamProfile;