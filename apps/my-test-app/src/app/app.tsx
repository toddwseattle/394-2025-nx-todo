// Uncomment this line to use CSS modules
import styles from './app.module.css';
import { useState } from 'react';
import { TodoInterface, TodoListItem } from '@cs394-vite-nx-template/todo';
import { sampleTodos } from './sampleTodos';
export function App() {
  const [showAddTodo, setShowAddTodo] = useState(false);
  const [todos, setTodos] = useState<TodoInterface[]>(sampleTodos);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>My Todo List</h1>
      </header>

      <main className={styles.todoList}>
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onTodoChange={(updatedTodo) => {
              setTodos((prevTodos) =>
                prevTodos.map((t) =>
                  t.id === updatedTodo.id ? updatedTodo : t
                )
              );
            }}
          />
        ))}
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
