// import { useState } from 'react'
import { useState } from 'react'
import './App.css'
import Header from './Header'
import UserCard from './UserCard'
import Welcome from './Welcome'

function App() {
  // const [message, setMessage] = useState("Hello, React");
  // const [count, setCount] = useState(0);
  // const [todos, setTodos] = useState(["Learn React", "Learn JSX"]);

  // const addTodo = () => {
  //   setTodos([...todos, "Learn State"])
  // }

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  // const handleClick = () => {
  //   alert("Button Clicked");
  // };

  // const handleChange = () => {
  //   setName(event.target.value);
  // };

  // const handleSubmit = () => {
  //   event.preventDefault();
  //   alert(`Email sent: ${email}`);
  // };

  // const sayHello = (name) => {
  //   alert(`Hello, ${name}!`);
  // };

  // const isLoggedIn = true;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const showMessage = true;

  return (
    <div>
      {/* <Header />
      <p>This is React's Main Page</p> */}

      {/* <Welcome name="Muhammad" />
      <Welcome name="Mamat" /> */}

      {/* <UserCard name="Muhammad" age={26} />
      <UserCard name="Mamat" age={26} />
      <UserCard name="Mujahid" age={26} /> */}
      {/* <h1>{message}</h1>
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
      <button onClick={addTodo}>Add To Do</button> */}

      {/* <button onClick={handleClick}>Click Me!</button>

      <br />
      <br />

      <input type="text" placeholder='Insert name...' onChange={handleChange} />
      <p>Hello, {name}</p>

      <form onSubmit={handleSubmit}>
        <input type="email" placeholder='Insert email...' value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Send</button>
      </form>

      <button onClick={() => sayHello("Mamat")}>Greet Mamat</button>
      <button onClick={() => sayHello("Muhammad")}>Greet Muhammad</button> */}

      { isLoggedIn ? <h1>Dashboard</h1> : <h1>Login Page</h1>}

      <h1>Hello, React!</h1>
      { showMessage && <p>This message occurs only when showMessage is true</p> }

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        { isLoggedIn ? "Logout" : "Login" }
      </button>
    </div>
  );

  // if (isLoggedIn) {
  //   return (
  //     <div>
  //       <h1>Welcome Back</h1>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <h1>Log In First</h1>
  //     </div>
  //   );
  // }

}

export default App
