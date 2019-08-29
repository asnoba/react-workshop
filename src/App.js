import React from 'react';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <form>
          <input type="text" />
          <button type="submit">Tilføj</button>
        </form>
        <ul className={styles.list}>
          <li>
            <input type="checkbox" /> Køb mælk
          </li>
          <li>
            <input type="checkbox" /> Slå græs
          </li>
        </ul>
      </main>
    </div>
  );
};

export default App;
