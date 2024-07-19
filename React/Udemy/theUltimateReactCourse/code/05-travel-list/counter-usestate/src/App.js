import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  let date = new Date();
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  function handleDecreseStep() {
    setStep((s) => s - 1);
  }
  function handleIncreseStep() {
    setStep((s) => s + 1);
  }
  function handleDecreseCount() {
    setCount((c) => c - step);
  }
  function handleIncreseCount() {
    setCount((c) => c + step);
  }
  function handleRest() {
    setStep((s) => (s = 1));
    setCount((c) => (c = 0));
  }
  date.setDate(date.getDate() + count);
  return (
    <div>
      <div className="step">
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <p>Step: {step}</p>
        <button onClick={handleIncreseStep}>+</button>
      </div>
      <div className="count">
        <button onClick={handleDecreseCount}>-</button>
        <p>Count: {count}</p>
        <button onClick={handleIncreseCount}>+</button>
      </div>
      <p>
        {count == 0 && "Today is" + date.toLocaleDateString()}
        {count < 0 && count + " days ago was " + date.toLocaleDateString()}
        {count > 0 &&
          count + " days from today is " + date.toLocaleDateString()}
      </p>
      <button onClick={handleRest}>Reset</button>
    </div>
  );
}
