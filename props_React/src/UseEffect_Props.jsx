import { useEffect, useState } from "react";
function UseEffectProps() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);
  const handleCounter = () => {
    console.log("Counter button clicked");
  };

  const handleData = () => {
    console.log("Data button clicked");
  };

  useEffect(() => {
    // it controll the side Effects of the component by using Props
    handleCounter();
  }, []);

  useEffect(() => {
    // it controll the side Effects of the component by using Props
    handleData();
  }, [data]);

  return (
    <div>
      <h1>UseEffect Props Example</h1>
      <p>
        This component demonstrates the use of the useEffect hook with props.
      </p>
      <p>Current Count: {counter}</p>
      <p>Current Data: {data}</p>
      <button onClick={() => setCounter(counter + 1)}>counter </button>
      <button onClick={() => setData(data + 1)}>Data</button>
    </div>
  );
}
export default UseEffectProps;
