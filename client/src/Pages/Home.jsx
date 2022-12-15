import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { allVideoGamesDataBase, popularVideo, getStreams, getCategories } from '../store/actions/actions';
import CardStream from '../components/Card/CardStream';
import Card2 from '../components/Card/Card2'
import CardCategori from '../components/CardCategori/CardCategori';
import Slidershow from '../components/Slidershow/Slideshow';
import Navbar from '../components/NavBar/NavBar';
import NavBarTop from '../components/NavBarTop/NavBarTop';
import CardChannel from '../components/CardChannel/CardChannel';
import styled from 'styled-components'
import './Home.css'

function Home() {

  const dispatch = useDispatch()
  const popVideo = useSelector(state => state.popVideo)
  const streamsName = useSelector(state => state.streamName)
  console.log(streamsName)

  useEffect(() => {
    dispatch(popularVideo())
    dispatch(allVideoGamesDataBase())
    dispatch(getStreams())
    dispatch(getCategories())
  }, [])

  return (
    <div>
      <NavBarTop />
      <div className='home'>
        <Slider>
          <Slidershow />
        </Slider>

        <div className='home-cnt'>
          {
            streamsName.length ? (
            <>
              <div className="title">
                <h2>Tu Busqueda</h2>
              </div>
              <div className="container">
                {streamsName.map((e, index) => {
                  return (
                    <div>
                      <Card2
                        id={e._id}
                        name={e.name}
                        image={e.image}
                        description={e.description}
                        language={e.language}
                        key={index}
                      />
                    </div>
                  )
                })}
              </div> 
            </>)
            : <></>
          }
          <CardStream />
          <CardCategori />
          </div>
      </div>
    </div>
  );
}

const Slider = styled.div`
  position: absolute;
  margin-top: 30px;
  z-index: 0;
 `

export default Home;
