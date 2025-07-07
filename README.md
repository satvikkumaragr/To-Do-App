# To-Do App

This project is a simple and interactive To-Do application built with React and Vite. It allows users to add, view, and manage their daily tasks efficiently. The app demonstrates the use of React functional components, Redux Toolkit for state management, and modern frontend development practices.

## Features

- Add new tasks to your to-do list
- Mark tasks as completed
- Delete tasks
- Persistent state management using Redux Toolkit
- Responsive and clean user interface

## Tech Stack

- [React](https://react.dev/) (UI library)
- [Vite](https://vitejs.dev/) (build tool)
- [Redux Toolkit](https://redux-toolkit.js.org/) (state management)
- [ESLint](https://eslint.org/) (code linting)

## Getting Started

1. Install dependencies:
   ```sh
   pnpm install
   ```
2. Start the development server:
   ```sh
   pnpm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

## Project Structure

- `src/` - Main source code
  - `components/` - React components (AddTodo, Todo)
  - `features/todo/` - Redux slice for todos
  - `app/store.js` - Redux store configuration
- `public/` - Static assets
- `index.html` - Main HTML file

## License

This project is open source and available under the [MIT License](LICENSE).
