import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFavorites } from '../../store/actions/actions'
import {cardFavorites} from "../Favorites/cardFavorites"

const Favorites = () => {
  const dispatch = useDispatch()
  const allFavorites = useSelector((state) => state.favorites)
  console.log(allFavorites)
  const userDetail = useSelector((state) => state.user)
  const userId = userDetail._id
  useEffect(()=>{
    dispatch(getFavorites())
  })

  return (
    <div>
    {allFavorites && allFavorites.map((f)=>{
      <cardFavorites
        key={f.id}
        id={f.id}
        title={f.title}
        name={f.name}
        description={f.description}
        />
      
    })}
    </div>
  )
}

export default Favorites