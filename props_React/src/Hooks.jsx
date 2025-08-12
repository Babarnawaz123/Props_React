import React, { useState, useEffect } from 'react';

function Hooks() {
  const [Counter, setCounter] = useState(0);
  const [data, setData] = useState(0);

  function callOnce() {
    console.log("This function is called only once");
  }

  useEffect(() => {  // this help to not render the function again and again
    callOnce(); 
  }, [Counter]);
  // useEffect with empty dependency array runs only once after the initial render
  return (
    <div>
      <h1>Hooks Example</h1>
      <p>This is a simple example of using hooks in a functional component.</p>
      <button onClick={() => setCounter(Counter + 1)}>Counter {Counter}</button>
      <button onClick={() => setData(data + 1)}>Data {data}</button>
    </div>
  );
}

export default Hooks;