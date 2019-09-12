import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import actionTypes from './redux/actionTypes';

const { ADD_TODO } = actionTypes;

function TodoForm() {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleChange = e => {
    setText(e.target.value);
  };

  const add = e => {
    e.preventDefault();
    if (!text) {
      return;
    }

    dispatch({ type: ADD_TODO, payload: { text } });
    setText('');
  };

  return (
    <form onSubmit={add}>
      <input type="text" value={text} onChange={handleChange} />
      <button type="submit" className="btn">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
