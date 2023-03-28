import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0); // setting the state of the count to 0 (initially);

  useEffect(() => {
    document.title = `Count: ${count}`; // the count will be increment at the title of the document(browser's tab)
  }, [count]);

  const incrementCount = () => { // functionality to increment the count
    setCount(count + 1);
  };

  return (
    <div>
    <center>
    {/* no. of count will be displayed here */}
      <h1>Count: {count}</h1>
      {/* button for incrementing the count by clicking on it */}
      <button onClick={incrementCount}>Increment Count</button>
      </center>
    </div>
  );
}

export default App;
