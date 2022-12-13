import React from 'react'

const cardFavorites = ({id, name, title, description}) => {
  return (
    <div className=''>
        <h2>{title}</h2>
        <h3>{name}</h3>
        <p>{description}</p>

    </div>
  )
}

export default cardFavorites