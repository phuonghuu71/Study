import React from 'react';

export default function AddTask({
  onAddTask,
}: {
  onAddTask: (text: string) => void;
}) {
  const [input, setInput] = React.useState<string>('');

  return (
    <div>
      <input
        onChange={(e) => setInput(e.target.value)}
        style={{ marginRight: '8px', marginBottom: '8px' }}
        type="text"
      />
      <button onClick={() => onAddTask(input)}>Add</button>
    </div>
  );
}
