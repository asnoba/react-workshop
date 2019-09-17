import shortid from 'shortid';
import produce from 'immer';

import actionTypes from '../actionTypes';

const { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } = actionTypes;

const initialState = {
  iGC40ZPQu: {
    id: 'iGC40ZPQu',
    text: 'Køb mælk',
    done: false,
  },
  eNP82iQ2V: {
    id: 'eNP82iQ2V',
    text: 'Slå græs',
    done: false,
  },
};

const todos = produce((draft, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TODO: {
      const id = shortid.generate();
      draft[id] = {
        id,
        text: payload.text,
        done: false,
      };
      break;
    }

    case REMOVE_TODO:
      delete draft[payload.id];
      break;

    case TOGGLE_TODO:
      draft[payload.id].done = !draft[payload.id].done;
      break;

    default:
      return initialState;
  }
});

export default todos;
