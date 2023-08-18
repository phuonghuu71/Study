import { memo } from 'react';

interface onChangeProps {
  // onChange is different on every render
  // That's why when we pass a function, it'll trigger onChange
  // Even though the function is still the same
  onChange: (text: string) => void;
}

function Search({ onChange }: onChangeProps) {
  console.log('Search render');

  return (
    <input
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search here"
    />
  );
}

// re-render only when props change
export default memo(Search);
