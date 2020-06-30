import React, {useState} from 'react';
import './App.css';
import TodoForm from './component/TodoForm';

const App = () => {
    const [todos, setTodos] = useState([]);
    const addTodo = text => {
      const newTodos = [{ text }, ...todos];
      setTodos(newTodos);
      console.log(...todos);
    };
  return (
    <div className="App">
      <TodoForm addTodo={addTodo}></TodoForm>
    </div>
  );
}

export default App;
