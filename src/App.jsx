import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Character2d from './components/Character2d'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello Stranger</h1>
      <div className="chat">
        <div className="messages">
          <ul className="message-list">
            <li className="message-item item-primary card">
              Bot says: Hey, how are you?
            </li>
          </ul>
          <div className="message-input">
            <input type="text" placeholder="Type your message..." />
            <button type="button" className="btn">Send</button>
          </div>
        </div>
      </div>
      <Character2d />
    </>
  )
}

export default App
