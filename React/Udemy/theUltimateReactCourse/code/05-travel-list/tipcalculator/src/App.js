import { useState } from "react";
import "./styles.css";

export default function App() {
  const [bill, setBill] = useState("");
  const [myTip, setMyTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);
  function handleClear() {
    setBill((b) => (b = ""));
    setMyTip((t) => (t = 0));
    setFriendTip((t) => (t = 0));
  }
  return (
    <div className="App">
      <BillInput bill={bill} setBill={setBill}>
        <p>How much was the bill?</p>
      </BillInput>
      <TipInput tip={myTip} setTip={setMyTip}>
        <p>How do you like the service?</p>
      </TipInput>
      <TipInput tip={friendTip} setTip={setFriendTip}>
        <p>How did your firend like the service?</p>
      </TipInput>
      <Receipt
        bill={bill}
        tipPercentage={(Number(myTip) + Number(friendTip)) / 200}
      />
      <Rest bill={bill} onClear={handleClear} />
    </div>
  );
}

function BillInput({ bill, setBill, children }) {
  return (
    <div className="bill">
      {children}
      <input
        type="text"
        name="bill"
        id="bill"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />
    </div>
  );
}

function TipInput({ tip, setTip, children }) {
  return (
    <div className="tip">
      {children}
      <select
        name="tip"
        id="tip"
        value={tip}
        onChange={(e) => setTip(e.target.value)}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It waas okey (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Receipt({ bill, tipPercentage }) {
  return (
    <>
      {Number(bill) && Number(bill) > 0 ? (
        <p className="total">
          You pay ${(bill * (tipPercentage + 1)).toFixed(2)} ($
          {Number(bill).toFixed(2)} + ${(bill * tipPercentage).toFixed(2)} tip)
        </p>
      ) : (
        ""
      )}
    </>
  );
}

function Rest({ bill, onClear }) {
  return (
    <>
      {Number(bill) && Number(bill) > 0 ? (
        <button className="reset" onClick={() => onClear()}>
          Reset
        </button>
      ) : (
        ""
      )}
    </>
  );
}
