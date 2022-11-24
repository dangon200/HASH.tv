import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { allVideoGamesDataBase, popularVideo } from '../store/actions/actions';
import './Home.css'

function Home() {

  const dispatch = useDispatch()
  const videos = useSelector(state => state.getVideoFromDatabase)
  const popVideo = useSelector(state => state.popVideo)

  useEffect(() => {
    dispatch(popularVideo())
    dispatch(allVideoGamesDataBase())
  },[])

  return (
    <div className='home'>
      <div className='home-popGame'>
        <h2>The Best Game in Live</h2>
        <Link to={'/details'} key={popVideo.id}>
          <img className='gifPOP' src={popVideo.url} alt="gifRandom" />
        </Link>
        <div className='description'>
            <p className='titleGame'>{popVideo.title}</p>
            <p className='description-Game'>Description for Game</p>
            <p className='description-Game'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At distinctio deserunt recusandae, alias a provident repellat qui libero. Recusandae accusantium dolores voluptatem incidunt placeat ipsa hic dolorum temporibus cum maiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia totam facilis sapiente dignissimos, quia maiores eaque dicta optio velit architecto dolore corporis voluptatibus eveniet, alias, soluta accusamus laudantium dolorum voluptas!</p>
        </div>
      </div>
      <div className='home-allgame'>
        {videos.map(singleGif => (
          <Link to={'/details'} key={singleGif.id}>
            <p>{singleGif.title}</p>
            <img className='gif' src={singleGif.url} alt='gifGame'/>
          </Link>))}
      </div>
    </div>
  );
}

export default Home;
