import { useEffect, useState } from "react";

function ComponentLifeCycle() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);
  const [isMounted, setIsMounted] = useState(true);

  const handleCounter = () => {
    console.log("Counter button clicked");
  };

  const handleData = () => {
    console.log("Data button clicked");
  };

  useEffect(() => {
    handleCounter();
  }, []); // Mounting

  useEffect(() => {
    handleData();
  }, [data]); // Updating

  useEffect(() => {
    return () => {
      console.log("Component unmounted");
    };
  }, []); // unmounting of the component

  return (
    <div>
      {isMounted && (
        <>
          <h1>Component LifeCycle UseEffect Hook</h1>
          <p>
            This component demonstrates the use of the useEffect hook with
            mounting, updating, and unmounting phases. the Change in Counter
            Values are example of updating the component.
          </p>
          <p>Current Count: {counter} </p> {/*updating the values  */}
          <p>Current Data: {data}</p>
          <button onClick={() => setCounter(counter + 1)}> Counter</button>
          <button onClick={() => setData(data + 1)}> Data</button>
        </>
      )}
      <button onClick={() => setIsMounted(!isMounted)}>
        {isMounted ? "Unmount Component" : "Mount Component"}
      </button>
    </div>
  );
}

export default ComponentLifeCycle;
