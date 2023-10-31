import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Contagem: {count}</h1>
      <button onClick={incrementCount}>Incrementar</button>
    </div>
  );
}

export default App