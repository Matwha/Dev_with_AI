import { ADD_TEXT } from './actions';

const initialState = {
  texts: [], // This will store an array of texts
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEXT:
      return {
        ...state,
        texts: [...state.texts, action.payload],
      };
    // Handle other actions
    default:
      return state;
  }
};

export default rootReducer;

