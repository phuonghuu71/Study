import React from 'react';

export function useDebounce<T>(value: T, delay = 500) {
  const [debouncedValue, setDebouncedValue] = React.useState<T>();

  React.useEffect(() => {
    const timeOut = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeOut);
  }, [value, delay]);

  return debouncedValue;
}
