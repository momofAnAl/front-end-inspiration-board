import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [board, setBoards] = useState([])
  const [selectedBoard, setselectedBoard] = useState(null)
  const [cards, setCards] = useState([])

  return (
    <>
      <h1>Inspiration Board App</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
