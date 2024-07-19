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
  function handleRest() {
    setStep((s) => (s = 1));
    setCount((c) => (c = 0));
  }
  date.setDate(date.getDate() + count);
  return (
    <div>
      <div className="step">
        <input
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={(e) => setStep((s) => (s = Number(e.target.value)))}
        />
        <p>Step: {step}</p>
      </div>
      <div className="count">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount((c) => (c = Number(e.target.value)))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        {count == 0 && "Today is" + date.toLocaleDateString()}
        {count < 0 && count + " days ago was " + date.toLocaleDateString()}
        {count > 0 &&
          count + " days from today is " + date.toLocaleDateString()}
      </p>
      {(count != 0 || step != 1) && <button onClick={handleRest}>Reset</button>}
    </div>
  );
}
