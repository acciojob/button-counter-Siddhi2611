
import React from "react";
import './../styles/App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
   };
  return (
    <div>
        {/* Do not remove the main div */}
    <h2>Button Counter</h2>
      <p>Button clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default App
