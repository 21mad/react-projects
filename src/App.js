import { useState } from 'react';
import './index.scss';

function App() {
  const [count, setCount] = useState(0);

  function handlePlus(){
    setCount(count + 1);
  }

  function handleMinus(){
    setCount(count - 1);
  }

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button className="minus" onClick={handleMinus}>- Минус</button>
        <button className="plus" onClick={handlePlus}>Плюс +</button>
      </div>
    </div>
  );
}

export default App;
