import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and test the boilerplate below
          </p>
        </div>
        <p className="read-the-docs">
          Now modify the boilerplate with your own way.
        </p>
    </div>
  );
}

export default App;
