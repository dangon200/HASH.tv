import axios from "axios";
export const POST_USER = "POST_USER";
export const GET_USER_ID = "GET_USER_ID";
export const GET_USER_NAME = "GET_USER_NAME";
export const POST_STREAM = "POST_STREAM";
export const GET_STREAM_ID = "GET_STREAM_ID";
export const GET_STREAM_NAME = "GET_STREAM_NAME";
export const POST_CATEGORIES = "POST_CATEGORIES";
export const ALLVIDEOS = "ALLVIDEOS";
export const POPVIDEO = "POPVIDEO";
export const FILTER_PUBLICATIONS = "FILTER_PUBLICATIONS";
export const CLEAR_FILTER = "CLEAR_FILTER";

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

export const postUser = (data) => {
  return async function () {
    try {
      await axios.post("http://localhost:3001/api/user", data);
    } catch (error) {
      return { error: error.message };
    }
  };
};

export const getUserId = (id) => {
  return async function (dispatch) {
    try {
      const json = await axios.get(`http://localhost:3001/api/user/${id}`);
      dispatch({ type: GET_USER_ID, payload: json.data });
    } catch (error) {
      return { error: error.message };
    }
  };
};

export const getUserName = (name) => {
  return async function (dispatch) {
    try {
      const json = await axios.get(
        `http://localhost:3001/api/user?name=${name}`
      );
      dispatch({ type: GET_USER_NAME, payload: json.data });
    } catch (error) {
      return { error: error.message };
    }
  };
};

export const postStream = (data) => {
  return async function () {
    try {
      await axios.post("http://localhost:3001/api/streams", data);
    } catch (error) {
      return { error: error.message };
    }
  };
};

export const getStreamId = (id) => {
  return async function (dispatch) {
    try {
      const json = await axios.get(`http://localhost:3001/api/streams/${id}`);
      dispatch({ type: GET_STREAM_ID, payload: json.data });
    } catch (error) {
      return { error: error.message };
    }
  };
};

export const getStreamName = (name) => {
  return async function (dispatch) {
    try {
      const json = await axios.get(
        `http://localhost:3001/api/streams?NAME=${name}`
      );
      dispatch({ type: GET_STREAM_NAME, payload: json.data });
    } catch (error) {
      return { error: error.message };
    }
  };
};

export const postCategories = (data) => {
  return async function () {
    try {
      await axios.post("http://localhost:3001/categories/create", data);
    } catch (error) {
      return { error: error.message };
    }
  };
};

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
  // FILTERS EPLORAR
  export const filterCanalesStream = ({ varietal, type, origin, opt }) => {
    return async function (dispatch) {
      try {
        const { data } = await axios.get(`${urlApi}/streams/filter?varietal=${varietal}&type=${type}&origin=${origin}&opt=${opt}`)
        return dispatch({
          type: 'FILTER_PUBLICATIONS',
          payload: data
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
  export const clearFilter = () => {
    return { type: 'CLEAR_FILTER', payload: null }
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