import React, { useState } from 'react';
import TestHeader from './TestHeader';

function App() {
  const [counter, setCounter] = useState(0);

  function increment(){
    setCounter(counter + 1);
  }

  return (
    <div>
      <TestHeader>Contador: {counter}</TestHeader>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default App;