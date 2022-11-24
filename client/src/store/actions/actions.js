import axios from "axios";
export const POST_USER = "POST_USER";
export const GET_USER_ID = "GET_USER_ID";
export const GET_USER_NAME = "GET_USER_NAME";
export const POST_STREAM = "POST_STREAM";
export const GET_STREAM_ID = "GET_STREAM_ID";
export const GET_STREAM_NAME = "GET_STREAM_NAME";
export const POST_CATEGORIES = "POST_CATEGORIES";

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

/////////////////////////////////////

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