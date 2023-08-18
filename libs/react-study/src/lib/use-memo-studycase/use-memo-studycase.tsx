import styles from './use-memo-studycase.module.css';
import React, { useMemo, useState } from 'react';
import { initialItems } from './utils';

/* eslint-disable-next-line */
export interface UseMemoStudycaseProps {}

export function UseMemoStudycase(props: UseMemoStudycaseProps) {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  // we call this in order to re-render the component everytime button is clicked
  // So everytime we click, the state is set and it related to performance issues
  // Because everytime page re-render, it loads the items completely new
  // Which is inconvenient because in the case all items are identical
  // Then it stills need to re-compute it
  // The useMemo is used to re-compute only the dependencies change
  // useMemo is a hook that memorize the value and return the same value
  // until the dependency in dependencies array changes
  // that it'll re-compute the new value
  const selectedItem = useMemo(
    () => items.find((item) => item.isSelected),
    [items]
  );

  return (
    <div className={styles['container']}>
      <h1>Count: {count}</h1>
      <h1>Selected Item: {selectedItem?.id}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default UseMemoStudycase;
