import './App.css'
import Header from './Header'

function Welcome() {
  return (
    <h1>Hello, this is welcome component</h1>
  )
}

function App() {
  return (
    <div>
      <Header />
      <p>This is React's Main Page</p>
    </div>
  )
}

export default App
