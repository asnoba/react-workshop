import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import actionTypes from '../redux/actionTypes';
import Button from './Button';
import Input from './Input';

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
    <form onSubmit={add} style={{ display: 'flex', width: '100%' }}>
      <Input
        type="text"
        value={text}
        onChange={handleChange}
        style={{ flex: 1 }}
      />
      <Button>Add</Button>
    </form>
  );
}

export default TodoForm;
