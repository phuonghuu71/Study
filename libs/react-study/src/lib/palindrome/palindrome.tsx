import React from 'react';

export function Palindrome() {
  const [input, setInput] = React.useState<string>('');
  const [result, setResult] = React.useState<boolean>(false);

  function checkPalindrome(n: string): boolean {
    for (let i = 0; i < n.length; i++)
      if (n[i] !== n[n.length - i - 1]) return false;
    return true;
  }

  function handleFunction(input: string) {
    setResult(checkPalindrome(input));
  }

  return (
    <>
      <h1>Check if string is palindrome</h1>
      <div>
        <input
          type="text"
          placeholder="Enter the string"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ marginRight: '4px' }}
        />
        <button onClick={() => handleFunction(input)}>Calculate</button>
      </div>

      <p>Result:{result.toString()}</p>
    </>
  );
}

export default Palindrome;
