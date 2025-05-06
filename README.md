# CS 394 Todo Application

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

A Todo application built with React, Nx, and Firebase, using Vite as the bundler.

## Project Structure

- `apps/my-test-app` - Main Todo application
- `libs/todo` - Shared Todo components library

## Applications and Libraries

### Main Application

The Todo application (`apps/my-test-app`) features:

- Todo list display
- Todo item management
- Add todo functionality
- React Router integration

### Todo Library

The Todo library (`@cs394-vite-nx-template/todo`) exports:

- `TodoListItem` component
- `Todo` component
- Todo interfaces and types

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npx nx serve my-test-app
```

Run tests:

```bash
npx nx test my-test-app
npx nx test todo
```

## Firebase Deployment

Build the application:

```bash
npx nx build my-test-app
```

Deploy to Firebase:

```bash
firebase deploy
```

The application will be deployed from the `apps/my-test-app/dist` directory.

## Technology Stack

- React 19.0.0
- TypeScript
- Nx 21.0.0
- Vite 6.0.0
- Firebase Hosting
- Vitest for testing

## Project Commands

### Development

- `nx serve my-test-app` - Start development server
- `nx build my-test-app` - Build the application
- `nx test my-test-app` - Run application tests
- `nx lint my-test-app` - Lint the application

### Library Development

- `nx build todo` - Build the todo library
- `nx test todo` - Run library tests
- `nx lint todo` - Lint the library
