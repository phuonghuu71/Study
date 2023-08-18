import { useEffect, useRef, useState } from 'react';
import styles from './use-ref-studycase.module.css';

/* eslint-disable-next-line */
export interface UseRefStudycaseProps {}

/**
 * * ref doesn't trigger re-render of the component
 * * ref value is not used in the return body of the component
 * * is used for the value that not needed re-rendering
 */

export function UseRefStudycase(props: UseRefStudycaseProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleIncrement = () => {
    setCount(count + 1);
    countRef.current++;

    // ! state update will trigger a new render of component
    // ! the update of value is only accessible in the new render
    // ! the value still run the value in first initial render
    console.log('state:', count);

    // ! useRef not triggering re-render
    // ! not needed for re-rendering
    // ! if you pass the current value to return body
    // ! it won't change the value unless you re-render the component
    console.log('ref:', countRef.current);
  };

  // * will trigger focusing on the first render
  useEffect(() => {
    // * ref is manipulating the focus of the input element
    inputRef.current?.focus();
  }, []);

  return (
    <div className={styles['container']}>
      {/* re-render will have access to the new value */}
      <p>{count}</p>
      <button onClick={handleIncrement}>Increment</button>

      {/* ref can also be used to manipulate DOM Element */}
      <input ref={inputRef} type="text" />
    </div>
  );
}

export default UseRefStudycase;
