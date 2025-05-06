// Uncomment this line to use CSS modules
import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import { useState } from 'react';

export function App() {
  const [showAddTodo, setShowAddTodo] = useState(false);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>My Todo List</h1>
      </header>

      <main className={styles.todoList}>
        {/* Todo list component will go here */}
        <div>Todo items will appear here</div>
      </main>

      <button className={styles.addButton} onClick={() => setShowAddTodo(true)}>
        +
      </button>

      {showAddTodo && (
        <div>
          {/* Add todo modal component will go here */}
          <button onClick={() => setShowAddTodo(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default App;
