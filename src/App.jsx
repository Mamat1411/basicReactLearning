import { useState } from 'react'
import './App.css'
import Header from './Header'
import UserCard from './UserCard'
import Welcome from './Welcome'

function App() {
  const [message, setMessage] = useState("Hello, React");
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["Learn React", "Learn JSX"]);

  const addTodo = () => {
    setTodos([...todos, "Learn State"])
  }

  return (
    <div>
      {/* <Header />
      <p>This is React's Main Page</p> */}

      {/* <Welcome name="Muhammad" />
      <Welcome name="Mamat" /> */}

      {/* <UserCard name="Muhammad" age={26} />
      <UserCard name="Mamat" age={26} />
      <UserCard name="Mujahid" age={26} /> */}
      <h1>{message}</h1>
      <button onClick={() => setMessage("State has changed!")}>Change message</button>

      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Substract</button>

      <h1>To Do List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <button onClick={addTodo}>Add To Do</button>
    </div>
  )
}

export default App
