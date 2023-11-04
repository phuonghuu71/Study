import React from 'react';

/* eslint-disable-next-line */
export interface SieveOfEratosthenesProps {}

export function SieveOfEratosthenes(props: SieveOfEratosthenesProps) {
  const [input, setInput] = React.useState<number>(0);
  const [result, setResult] = React.useState<number[]>([]);

  function handleFunction(input: number) {
    const prime = Array.from({ length: input + 1 }, (_, i) => true);
    const result: number[] = [];

    for (let p = 2; p * p <= input; p++) {
      if (prime[p]) {
        for (let i = p * p; i <= input; i += p) {
          prime[i] = false;
        }
      }
    }

    for (let i = 2; i <= input; i++) {
      if (prime[i]) result.push(i);
    }

    setResult(result);
  }

  return (
    <>
      <h1>Calculate a list of prime number smaller than n</h1>
      <div>
        <input
          type="text"
          placeholder="Enter the limit"
          value={input}
          onChange={(e) =>
            setInput(Number(e.target.value.replace(/[^0-9]/g, '')))
          }
          style={{ marginRight: '4px' }}
        />
        <button onClick={() => handleFunction(input)}>Calculate</button>
      </div>

      <p>Result:[{result.join(', ')}]</p>
    </>
  );
}

export default SieveOfEratosthenes;
