import React from 'react';

import styles from './App.module.css';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
