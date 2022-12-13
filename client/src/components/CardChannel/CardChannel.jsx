import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { filterCategories } from '../../store/actions/actions'
import './CardChannel.css'

const CardChannel = () => {

  const dispatch = useDispatch()
  const categories = useSelector(state => state.categories)
  const categoriesSlice=categories.slice(0,3)

  const handleCategories = (e) => {
    e.preventDefault()
    dispatch(filterCategories(e.target.value))
  }

  return (
    <>
      <div className='title'>
        <h2>Canales en tendencia</h2>
      </div>
      <div className='card_channel-cnt'>
        {
          categoriesSlice?.map((e, index)=>{
            return (
              <div key={index}>
                
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" onClick={handleCategories}>Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default CardChannel