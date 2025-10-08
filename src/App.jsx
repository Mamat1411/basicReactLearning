import './App.css'
import Header from './Header'
import UserCard from './UserCard'
import Welcome from './Welcome'

function App() {
  return (
    <div>
      {/* <Header />
      <p>This is React's Main Page</p> */}

      {/* <Welcome name="Muhammad" />
      <Welcome name="Mamat" /> */}

      <UserCard name="Muhammad" age={26} />
      <UserCard name="Mamat" age={26} />
      <UserCard name="Mujahid" age={26} />
    </div>
  )
}

export default App
