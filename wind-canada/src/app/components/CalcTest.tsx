'use client';

import { useState } from 'react';

export default function Calculator() {
  const [input, setInput] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Calculation failed');
      }

      const data = await response.json();
      setResult(data.result);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Calculation failed');
      setResult(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <button onClick={handleCalculate} disabled={isLoading}>
        {isLoading ? 'Calculating...' : 'Calculate'}
      </button>

      {error && <p>{error}</p>}
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
}
