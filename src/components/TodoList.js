import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { todosSelector } from '../redux/selectors/';

function TodoList() {
  const todos = useSelector(todosSelector);

  const styles = {
    base: {
      listStyle: 'none',
      paddingLeft: 0,
      fontSize: 14,
    },
  };

  return (
    <ul style={styles.base}>
      {todos.map(({ id }) => (
        <TodoItem key={id} id={id} />
      ))}
    </ul>
  );
}

export default TodoList;
