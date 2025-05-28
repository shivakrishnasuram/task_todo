import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="container">
      <h1>Todo List</h1>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <ToastContainer />
    </div>
  );
}
// import React from 'react'
// import MyComponent from './Progress'

// function App() {
//   return (
//     <div>
//       <MyComponent/>
//     </div>
//   )
// }

// export default App
