import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoOverviewPage from "./pages/TodoOverviewPage";
import UseTodos from "./hooks/UseTodos";



export default function App() {

  const {todos, addTodo} = UseTodos();


  return (
    <div className="App">
      <header className="App-header">
        <div><TodoOverviewPage todos={todos} setTodos={addTodo}/></div>
      </header>
    </div>
  );
}


