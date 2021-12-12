import { useState } from 'react';
import AddTodos from './components/AddTodos';
import Header from './components/Header';
import Todos from './components/Todos';
import './index.css';

function App() {
  const [todos, setTodos] = useState([])

  const handleClick = (id) => {
    //console.log(id)
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }
  const handleDelete = (id) => {
    //console.log(id)
    setTodos(todos.filter(todo => todo.id !== id ? todo : ""))
  }
  const addNewTodo = (text) => {
    const id = Math.floor(Math.random() * 100) + 1 
    const newTodo = {id, ...text}
    
    setTodos([...todos, newTodo])
  }

  return (
    <div className="container">
      <Header/>
      <AddTodos onAdd={addNewTodo}/>
     { todos.length > 0 ? <Todos todos={todos} onClick={handleClick} onDelete={handleDelete}/> : ""}
    </div>
  );
}

export default App;
