import {
  GET_USERS,
  POST_USER,
  GET_USER_ID,
  GET_USER_NAME,
  POST_STREAM,
  GET_STREAM_ID,
  GET_STREAM_NAME,
  POST_CATEGORIES,
  ALLVIDEOS,
  POPVIDEO,
  GET_STREAMS,
  GET_CATEGORIES
} from "./actions/actions";

const initialState = {
  users: [],
  usersDetail: {},
  streams:[],
  streamName: [],
  streamDetail: [],
  categories:[],
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
    case GET_USERS:
      return {
        ...state,
        users:action.payload
    };
    case POST_USER:
      return {
        ...state,
      };
    case GET_USER_ID:
      return {
        ...state,
        
      };
    case GET_USER_NAME:
      return {
        ...state,
        users: action.payload,
      };
    case GET_STREAMS:
      return{
        ...state,
        streams:action.payload
      }  
    
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
        streamName: action.payload,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories:action.payload
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
    default:
      return { ...state };
  }
};

export default rootReducer;
