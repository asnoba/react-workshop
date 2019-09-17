import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actionTypes from '../redux/actionTypes';
import Button from './Button';

const { TOGGLE_TODO, REMOVE_TODO } = actionTypes;

function TodoItem({ id }) {
  const { text, done } = useSelector(state => state.todos[id]);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch({ type: TOGGLE_TODO, payload: { id } });
  };

  const remove = () => {
    dispatch({ type: REMOVE_TODO, payload: { id } });
  };

  const styles = {
    item: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '2px',
    },
    text: {
      flex: 1,
      textDecoration: done && 'line-through',
    },
  };

  return (
    <li key={id} style={styles.item}>
      <input type="checkbox" onClick={toggle} defaultChecked={done} />
      <div style={styles.text}>{text}</div>
      <Button size="sm" type="danger" onClick={remove} rounded>
        &times;
      </Button>
    </li>
  );
}

export default TodoItem;
