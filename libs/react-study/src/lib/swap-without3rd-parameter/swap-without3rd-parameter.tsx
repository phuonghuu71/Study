import React from 'react';

export function SwapWithout3rdParameter() {
  const [firstInput, setFirstInput] = React.useState<number>(0);
  const [secondInput, setSecondInput] = React.useState<number>(0);

  function swapNumber(a: number, b: number): void {
    a = a + b;
    b = a - b;
    a = a - b;
    setFirstInput(a);
    setSecondInput(b);
  }

  function handleFunction(a: number, b: number): void {
    swapNumber(a, b);
  }

  return (
    <>
      <h1>Swap 2 numbers</h1>
      <div>
        <input
          type="text"
          placeholder="Enter the 1st input"
          value={firstInput}
          onChange={(e) =>
            setFirstInput(Number(e.target.value.replace(/[^0-9]/g, '')))
          }
          style={{ marginRight: '4px' }}
        />

        <input
          type="text"
          placeholder="Enter the nth"
          value={secondInput}
          onChange={(e) =>
            setSecondInput(Number(e.target.value.replace(/[^0-9]/g, '')))
          }
          style={{ marginRight: '4px' }}
        />
        <button onClick={() => handleFunction(firstInput, secondInput)}>
          Calculate
        </button>
      </div>

      <p>Result:{` First: ${firstInput} & Second: ${secondInput}`}</p>
    </>
  );
}

export default SwapWithout3rdParameter;
