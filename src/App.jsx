import { useState } from 'react'
import Header from './components/Header';
import ReactDom from 'react-dom/client';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />

      </Routes>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div> */}
    
    </>
  )
}

export default App
