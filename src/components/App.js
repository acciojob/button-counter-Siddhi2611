
import React, { useState } from "react";

import './../styles/App.css';

const App = () => {
  // Step 1: Initialize state with 0
  const [count, setCount] = useState(0);

  // Step 2: Handle button click
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div id="main">
      {/* Step 3: Display counter */}
      <p>Button clicked {count} times</p>
      
      {/* Step 4: Button with onClick */}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};


export default App
