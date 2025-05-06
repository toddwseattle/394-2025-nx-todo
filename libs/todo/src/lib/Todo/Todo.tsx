import { useState } from 'react';
import styles from './Todo.module.css';
import { TodoInterface } from '../todoInterface';

interface TodoProps {
  todo: TodoInterface;
  onTodoChange: (updatedTodo: TodoInterface) => void;
}

export function Todo({ todo, onTodoChange }: TodoProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState<TodoInterface>(todo);

  const handleSave = () => {
    onTodoChange(editedTodo);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTodo(todo);
    setIsEditing(false);
  };

  return (
    <div className={styles['container']}>
      {!isEditing ? (
        <div className={styles['view-mode']}>
          <h3>{todo.title}</h3>
          <p>Priority: {todo.priority || 'None'}</p>
          <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
          <p>Due: {todo.dueDate?.toLocaleDateString() || 'No due date'}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      ) : (
        <div className={styles['edit-mode']}>
          <input
            type="text"
            value={editedTodo.title}
            onChange={(e) =>
              setEditedTodo({
                ...editedTodo,
                title: (e.target as HTMLInputElement).value,
              })
            }
          />
          <select
            name="priority"
            title="Priority"
            value={editedTodo.priority || 'none'}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setEditedTodo({
                ...editedTodo,
                priority:
                  e.target.value === 'none'
                    ? undefined
                    : (e.target.value as TodoInterface['priority']),
              })
            }
          >
            <option value="none">No Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <input
            type="checkbox"
            checked={editedTodo.completed}
            onChange={(e) =>
              setEditedTodo({ ...editedTodo, completed: e.target.checked })
            }
          />
          <input
            type="date"
            value={editedTodo.dueDate?.toISOString().split('T')[0] || ''}
            onChange={(e) =>
              setEditedTodo({
                ...editedTodo,
                dueDate: e.target.value ? new Date(e.target.value) : undefined,
              })
            }
          />
          <div>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Todo;
