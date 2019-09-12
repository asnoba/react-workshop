import React from 'react';
import { useSelector } from 'react-redux';
import styles from './TodoList.module.css';
import TodoItem from './TodoItem';
import { selectTodos } from './redux/selectors/';

function TodoList() {
  const todos = useSelector(selectTodos);

  return (
    <ul className={styles.list}>
      {todos.map(({ id }) => (
        <TodoItem key={id} id={id} />
      ))}
    </ul>
  );
}

export default TodoList;
