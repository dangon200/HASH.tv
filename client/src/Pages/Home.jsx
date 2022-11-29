import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { allVideoGamesDataBase, popularVideo, getStreams, getCategories } from '../store/actions/actions';
import './Home.css'
import Card from '../components/Card/Card';
import Card2 from '../components/Card/Card2'
import CardCategori from '../components/CardCategori/CardCategori';

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
    // dispatch(getUsers())
  }, [])

  return (

    <div className='home'>
      <div className='home-popGame'>
        <h2>The Best Game in Live</h2>
        <Link to={`/stream/${streamsName.id}`} key={popVideo.id}>
        <img className='gifPOP' src={popVideo.url} alt="gifRandom"/> 
        </Link>
        <div className='description'>
          <p className='titleGame'>{popVideo.title}</p>
          <p className='description-Game'>Description for Game</p>
          <p className='description-Game'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At distinctio deserunt recusandae, alias a provident repellat qui libero. Recusandae accusantium dolores voluptatem incidunt placeat ipsa hic dolorum temporibus cum maiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia totam facilis sapiente dignissimos, quia maiores eaque dicta optio velit architecto dolore corporis voluptatibus eveniet, alias, soluta accusamus laudantium dolorum voluptas!</p>
        </div>
      </div>
      {/* <div className='home-allgame'>
        {videos.map(singleGif => (
          <Link to={'/details'} key={singleGif.id}>

            <img className='gif' src={singleGif.url} alt='gifGame'/>
          </Link>))}
      </div> */}
      {streamsName.length ? (<>
      <div className="title">
            <h2>Tu Busqueda</h2>
            </div>
            <div className="container">
          {streamsName.map((e, index)=>{
            return(
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
          </div> </>)
       : <></>}
      <Card />
      <CardCategori />
    </div>
  );
}

export default Home;
