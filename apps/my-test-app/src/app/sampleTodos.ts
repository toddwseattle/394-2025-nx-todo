import { TodoInterface } from '@cs394-vite-nx-template/todo';

const now = new Date();
const daysFromNow = (days: number) =>
  new Date(now.getTime() + days * 24 * 60 * 60 * 1000);

export const sampleTodos: TodoInterface[] = [
  {
    id: '1',
    title: 'Set up project repository and branching strategy',
    completed: true,
    createdAt: daysFromNow(-2),
    dueDate: daysFromNow(1),
    priority: 'high',
  },
  {
    id: '2',
    title: 'Configure CI/CD pipeline',
    completed: false,
    createdAt: daysFromNow(-1),
    dueDate: daysFromNow(3),
    priority: 'high',
  },
  {
    id: '3',
    title: 'Define coding standards and linting rules',
    completed: false,
    createdAt: now,
    dueDate: daysFromNow(2),
    priority: 'medium',
  },
  {
    id: '4',
    title: 'Set up development environment documentation',
    completed: false,
    createdAt: now,
    dueDate: daysFromNow(5),
    priority: 'medium',
  },
  {
    id: '5',
    title: 'Schedule weekly team sync meetings',
    completed: false,
    createdAt: daysFromNow(-1),
    dueDate: daysFromNow(1),
    priority: 'low',
  },
  {
    id: '6',
    title: 'Create initial project architecture diagram',
    completed: false,
    createdAt: now,
    dueDate: daysFromNow(7),
    priority: 'high',
  },
  {
    id: '7',
    title: 'Set up testing framework',
    completed: false,
    createdAt: now,
    dueDate: daysFromNow(4),
    priority: 'medium',
  },
];
