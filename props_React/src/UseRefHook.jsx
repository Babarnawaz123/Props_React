import { useRef } from "react";
function UseRefHook() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "orange"; // Optional: Change background color on focus
  };

  return (
    <div>
      <h2>Using useRef Hook</h2>
      <input type="text" placeholder="Enter Your Name" ref={inputRef} />
      <button onClick={focusInput}>Focus on input Field</button>
    </div>
  );
}
export default UseRefHook;
