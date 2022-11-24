const initialState = {
  getVideoFromDatabase: [],
  popVideo: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_PUBLICATIONS':
      return { ...state, allPublications: action.payload, publications: action.payload, error: action.payload }
    
    case 'ALLVIDEOS':
      return {
        ...state,
        getVideoFromDatabase: action.payload
      }
    
    case 'POPVIDEO':
      return {
        ...state,
        popVideo: action.payload
      }

    default:
      return { ...state };
  }
}
