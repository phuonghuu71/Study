import React from 'react';

/* eslint-disable-next-line */
export interface FibonacciProps {}

export function Fibonacci(props: FibonacciProps) {
  const [input, setInput] = React.useState<number>(0);
  const [result, setResult] = React.useState<number>(0);

  function findFibonacci(n: number): number {
    if (n <= 1) return n;
    return findFibonacci(n - 1) + findFibonacci(n - 2);
  }

  function handleFunction(input: number) {
    setResult(findFibonacci(input));
  }

  return (
    <>
      <h1>Calculate a fibonacci of nth</h1>
      <div>
        <input
          type="text"
          placeholder="Enter the nth"
          value={input}
          onChange={(e) =>
            setInput(Number(e.target.value.replace(/[^0-9]/g, '')))
          }
          style={{ marginRight: '4px' }}
        />
        <button onClick={() => handleFunction(input)}>Calculate</button>
      </div>

      <p>Result:{result}</p>
    </>
  );
}

export default Fibonacci;
