import { useState } from 'react';
import { TodoInterface } from '../todoInterface';
import { Todo } from '../Todo/Todo';
import styles from './TodoListItem.module.css';

interface TodoListItemProps {
  todo: TodoInterface;
  onTodoChange: (todo: TodoInterface) => void;
}

export function TodoListItem({ todo, onTodoChange }: TodoListItemProps) {
  const [showDetails, setShowDetails] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(todo);

  const handleTodoChange = (updatedTodo: TodoInterface) => {
    setCurrentTodo(updatedTodo);
    onTodoChange(updatedTodo);
    setShowDetails(false);
  };

  return (
    <div className={styles.todoListItem}>
      <div className={styles.summary}>
        <input
          type="checkbox"
          checked={currentTodo.completed}
          onChange={(e) =>
            handleTodoChange({ ...currentTodo, completed: e.target.checked })
          }
        />
        <span className={styles.title}>{currentTodo.title}</span>
        <span className={styles.priority}>
          {currentTodo.priority || 'none'}
        </span>
        <span className={styles.dueDate}>
          {currentTodo.dueDate?.toLocaleDateString() || 'No due date'}
        </span>
        <button onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
      </div>

      {showDetails && (
        <div className={styles.details}>
          <Todo todo={currentTodo} onTodoChange={handleTodoChange} />
        </div>
      )}
    </div>
  );
}

export default TodoListItem;
