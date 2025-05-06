# Todo Library

A React-based Todo library built with Nx and Vite.

## Components

The library consists of the following components:

- `Todo` - Core Todo component
- `TodoListItem` - Component for rendering individual todo items
- `todoInterface` - TypeScript interface definitions for Todo items

## Usage

```tsx
import { TodoInterface, TodoListItem } from '@cs394-vite-nx-template/todo';

// Example usage in your app
<TodoListItem todo={todoItem} onTodoChange={handleTodoChange} />;
```

## Development

### Running the Library

- `nx serve todo` - Serve the library
- `nx test todo` - Run unit tests via Vitest
- `nx lint todo` - Lint the library
- `nx build todo` - Build the library

### Project Structure

```
libs/todo/
├── src/
│   ├── lib/
│   │   ├── Todo/
│   │   ├── TodoListItem/
│   │   └── todoInterface.ts
│   └── index.ts
```

## Testing

The project uses Vitest for testing:

```bash
nx test todo
```

## Technology Stack

- React 19.0.0
- TypeScript
- Nx 21.0.0
- Vite 6.0.0
- Vitest for testing
