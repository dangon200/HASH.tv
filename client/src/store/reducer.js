const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_PUBLICATIONS':
      return { ...state, allPublications: action.payload, publications: action.payload, error: action.payload }
    default:
      return { ...state };
  }
}
