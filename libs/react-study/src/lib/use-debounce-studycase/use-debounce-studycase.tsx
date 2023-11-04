import React from 'react';
import { useDebounce } from './useDebounce';

export function UseDebounceStudycase() {
  const [search, setSearch] = React.useState<string>('');
  const debouncedValue = useDebounce(search);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  React.useEffect(() => {
    console.log(debouncedValue);
  }, [debouncedValue]);

  return (
    <div>
      <input type="text" onChange={(e) => handleChange(e)} />
    </div>
  );
}

export default UseDebounceStudycase;
