import React, { useEffect, useState } from 'react';
import TradingChart from './TradingChart';

export default function App() {
  const [signals, setSignals] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/signals', { credentials: 'include' })
      .then((res) => res.json())
      .then(setSignals)
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>TradinAI</h1>
      <TradingChart signals={signals} />
    </div>
  );
}
