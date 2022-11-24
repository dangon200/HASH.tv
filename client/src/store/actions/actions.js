import axios from 'axios'

const urlApi = 'http://localhost:3001'

export function registerUser(data) {
  return function (dispatch) {
    fetch("http://localhost:3001/users/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: 'REGISTER_USER', payload: data });
      });
  };
}

// Search Publication by Name

export const searchByName = (name) => {
  return async function (dispatch) {
    return fetch(`${urlApi}/publications?name=${name}`).then((respuesta) =>
      respuesta.json().then((dataP) => {
        dispatch({ type: 'GET_PUBLICATIONS', payload: dataP })
      })
    )
  }
}

// AllVideos

const gifs = async () => { // Esta es la funcion que trae los gifs
  return await axios.get('https://api.giphy.com/v1/gifs/search?api_key=ZYn9uQnuaZy7FYl6wZo57ZW6XqQtA9T6&q=game&limit=100&offset=0&rating=r&lang=en')
  .then( response => {
    const {data} = response
    const gifs = data.data.map(image => {
      return {
        id: image.id,
        title: image.title,
        url: image.images.original.url
      }
    })
    return gifs
  })
}

export function allVideoGamesDataBase() {
  return async function (dispatch) {
    const videos = await gifs()
    dispatch({
      type: 'ALLVIDEOS',
      payload: videos
    })
    } 
  }


// BestGame

const BesVideo = async () => { // Esta es la funcion que trae un Gif Random
  return await axios.get('https://api.giphy.com/v1/gifs/random?api_key=ZYn9uQnuaZy7FYl6wZo57ZW6XqQtA9T6&tag=&rating=r')
  .then( response => {
    const {data} = response
    return {
        id: data.data.id,
        title: data.data.title,
        url: data.data.images.original.url
      }
  })
}

export function popularVideo() {
  return async function(dispatch) {
    const popVideo = await BesVideo()
    dispatch({
      type: 'POPVIDEO',
      payload: popVideo
    })
  }

}