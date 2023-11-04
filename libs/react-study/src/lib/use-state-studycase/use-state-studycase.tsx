import React from 'react';

/* eslint-disable-next-line */
export interface UseStateStudycaseProps {}

export function UseStateStudycase(props: UseStateStudycaseProps) {
  const [number, setNumber] = React.useState<number>(0);

  function handleIncrement() {
    // setNumber(number + 1);
    // setNumber(number + 1);
    // => return 1

    setNumber((prev) => prev + 1);
    setNumber((prev) => prev + 1);
    // => return 2

    /**
     * . 1. The first scenario call the number which has state of 0
     * .    => It call the number twice which is (0 + 1) 2 times
     * . 2. On the other hand, the second scenario call previous value of number
     * .    => 0 -> 1 -> 2
     */
  }

  console.log('re-render');

  return (
    <div>
      <p>{number}</p>
      <button onClick={handleIncrement}>Increase by 1</button>
    </div>
  );
}

export default UseStateStudycase;
