import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './TodoItem.module.css';
import actionTypes from './redux/actionTypes';

const { TOGGLE_TODO, REMOVE_TODO } = actionTypes;

function TodoItem({ id }) {
  const { text, complete } = useSelector(state => state.todos[id]);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch({ type: TOGGLE_TODO, payload: { id } });
  };

  const remove = () => {
    dispatch({ type: REMOVE_TODO, payload: { id } });
  };

  return (
    <li key={id} className={styles.item}>
      <input type="checkbox" onClick={toggle} defaultChecked={complete} />
      <div
        className={styles.text}
        style={{ textDecoration: complete && 'line-through' }}
      >
        {text}
      </div>
      <button className="btn btn-sm btn-danger" onClick={remove}>
        X
      </button>
    </li>
  );
}

export default TodoItem;
