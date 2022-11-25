import {
  POST_USER,
  GET_USER_ID,
  GET_USER_NAME,
  POST_STREAM,
  GET_STREAM_ID,
  GET_STREAM_NAME,
  POST_CATEGORIES,
  ALLVIDEOS,
  POPVIDEO,
  FILTER_PUBLICATIONS,
  CLEAR_FILTER
} from "./actions/actions";

const initialState = {
  users: [],
  usersDetail: {},
  stream: [],
  allStreams: [],
  streamDetail: {},
  getVideoFromDatabase: [],
  popVideo: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PUBLICATIONS":
      return {
        ...state,
        allPublications: action.payload,
        publications: action.payload,
        error: action.payload,
      };
    case POST_USER:
      return {
        ...state,
      };
    case GET_USER_ID:
      return {
        ...state,
        usersDetail: action.payload,
      };
    case GET_USER_NAME:
      return {
        ...state,
        users: action.payload,
      };
    case POST_STREAM:
      return {
        ...state,
      };
    case GET_STREAM_ID:
      return {
        ...state,
        streamDetail: action.payload,
      };
    case GET_STREAM_NAME:
      return {
        ...state,
        stream: action.payload,
      };
    case POST_CATEGORIES:
      return {
        ...state,
      };

    case ALLVIDEOS:
      return {
        ...state,
        getVideoFromDatabase: action.payload
      };
      
    case POPVIDEO:
      return {
        ...state,
        popVideo: action.payload
      };
    case FILTER_PUBLICATIONS:
      return { ...state, stream: action.payload }
    case CLEAR_FILTER:
      return { ...state, stream: state.allStreams }
    default:
      return { ...state };
  }
};

export default rootReducer;
