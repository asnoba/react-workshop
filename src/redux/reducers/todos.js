import shortid from 'shortid';

import actionTypes from '../actionTypes';

const { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } = actionTypes;

const initialState = {
  iGC40ZPQu: {
    id: 'iGC40ZPQu',
    text: 'Køb mælk',
    complete: false,
  },
  eNP82iQ2V: {
    id: 'eNP82iQ2V',
    text: 'Slå græs',
    complete: false,
  },
};

function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { text } = action.payload;
      const id = shortid.generate();
      return {
        ...state,
        [id]: {
          id,
          text,
          complete: false,
        },
      };
    }

    case REMOVE_TODO: {
      const { id } = action.payload;
      const newState = { ...state };
      delete newState[id];
      return newState;
    }

    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        [id]: {
          ...state[id],
          complete: !state[id].complete,
        },
      };
    }

    default:
      return state;
  }
}

export default todos;
