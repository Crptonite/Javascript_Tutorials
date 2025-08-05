'use client';

import { useState } from 'react';

export default function Home() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);

  const handleAddition = () => setResult(num1 + num2);
  const handleSubtraction = () => setResult(num1 - num2);
  const handleMultiplication = () => setResult(num1 * num2);
  const handleDivision = () => {
    if (num2 === 0) {
      alert("Cannot divide by zero!");
      setResult(null); // Clear the result
      return;
    }
    setResult(num1 / num2);
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Simple Calculator</h1>

      <div style={{ marginBottom: '1rem' }}>
        <input
          type="number"
          placeholder="First number"
          value={num1}
          onChange={(e) => setNum1(Number(e.target.value))}
          style={{ marginRight: '1rem' }}
        />
        <input
          type="number"
          placeholder="Second number"
          value={num2}
          onChange={(e) => setNum2(Number(e.target.value))}
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <button onClick={handleAddition} style={{ marginRight: '0.5rem' }}>Add</button>
        <button onClick={handleSubtraction} style={{ marginRight: '0.5rem' }}>Subtract</button>
        <button onClick={handleMultiplication} style={{ marginRight: '0.5rem' }}>Multiply</button>
        <button onClick={handleDivision}>Divide</button>
      </div>

      {result !== null ? (
        <h2>Result: {result}</h2>
      ) : (
        <h2>No result yet</h2>
      )}
    </main>
  );
}