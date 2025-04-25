import { useState } from 'react';
import './App.css';
import Reorder from './Reorder';

function App() {
  const [count, setCount] = useState(5);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const handleReorder = () => {
    setCount(5);
  };

  return (
    <div className="app-container">
      <div className="inventory-control">
        <button className="control-button" onClick={decreaseCount} disabled={!count}>-</button>
        <span className="inventory-count">{count}</span>
        <button className="control-button" onClick={increaseCount}>+</button>
        
        {count === 0 && <Reorder onReorder={handleReorder} />}
      </div>
    </div>
  );
}

export default App;
