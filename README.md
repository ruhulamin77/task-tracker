# Task Tracker App

A simple yet functional Task Tracker App built using React, Redux Toolkit, and vanilla CSS. This project allows users to Create, Read, Update, and Delete tasks easily.

The app features a private task list, accessible only after a dummy login (email only). All tasks are stored in the browser’s local storage, ensuring data persists across page reloads.

**Live Demo:**  
👉 [https://task-tracker-ecru-zeta.vercel.app/](https://task-tracker-ecru-zeta.vercel.app/)

## Features

- Task list is a private route (requires login)
- Tasks stored in browser localStorage
- Dummy email-based login (no password required)
- Built with Redux Toolkit for state management
- Fully responsive layout using vanilla CSS

## Tech Stack

- [React](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ruhulamin77/task-tracker.git
cd task-tracker
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

## Project Structure

```
/src
  /app
    /store            # redux store
  /pages
    /LoginPage        # Auth page
    /TaskPage         # Task form and task list
  /components         # Reusable React components
  /features
    /auth             # Auth reducers
    /tasks            # Task reducers
/public             # Static assets
```

**Task Tracker** © 2025 — Built with ❤️ by Ruhul Amin.
