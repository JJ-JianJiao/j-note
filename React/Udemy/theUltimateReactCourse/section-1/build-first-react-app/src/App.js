import {useState, useEffect} from "react";
let currentAdvise = "";
function App() {
  const [advise, setAdvise] = useState("");
  const [count, setCount] = useState(0);
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    if(currentAdvise != data.slip.advice){
      currentAdvise=data.slip.advice;
      setAdvise(data.slip.advice);
      setCount((count) => count +1);
    }
  }

  useEffect(function(){
    getAdvice();
  }, [])
  return (
    <div>
      <h1>{advise}</h1>
      <button onClick={getAdvice}>Get advice</button>
      <Message count={count}/>
    </div>
  );
}

function Message(props) {
  return (
    <p>You have read <strong>{props.count}</strong> pieces of advise</p>
  )
}

export default App;
