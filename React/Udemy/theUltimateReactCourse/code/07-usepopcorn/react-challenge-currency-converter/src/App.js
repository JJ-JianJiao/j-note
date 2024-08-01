// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useState, useEffect } from "react";

export default function App() {
  const [currency, setCurrency] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("USD");
  const [convertedMsg, setConvertedMsg] = useState("");

  useEffect(
    function () {
      const controller = new AbortController();
      async function convertCurrency() {
        try {
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${currency}&from=${fromCurrency}&to=${toCurrency}`,
            { signal: controller.signal }
          );
          console.log(res.ok);
          if (!res.ok)
            throw new Error("Something went wrong with fetching data");
          const data = await res.json();
          console.log(data);
          setConvertedMsg(data.rates[toCurrency]);
        } catch (err) {
          setConvertedMsg(err.message);
        } finally {
        }
      }
      if (currency === "") {
        setConvertedMsg("please enter a number");
        return;
      }
      if (isNaN(Number(currency))) {
        setConvertedMsg("please input a number");
        return;
      }
      if (fromCurrency === toCurrency) {
        setConvertedMsg(currency);
        return;
      }
      convertCurrency();
    },
    [currency, fromCurrency, toCurrency]
  );

  return (
    <div>
      <input
        type="text"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      />
      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        <option value="CNY">CNY</option>
        <option value="JPY">JPY</option>
        <option value="CAD">CAD</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
      >
        <option value="CNY">CNY</option>
        <option value="JPY">JPY</option>
        <option value="CAD">CAD</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="INR">INR</option>
      </select>
      <p>{convertedMsg ? convertedMsg : "OUTPUT"}</p>
    </div>
  );
}
