import  { useState } from 'react';
import NavbarComponent from './components/Navbar.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavbarComponent />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
