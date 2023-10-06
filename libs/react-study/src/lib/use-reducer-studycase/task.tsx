import React from 'react';
import { useTaskFunctionsContext } from './task-context';

export interface TaskProps {
  id: number;
  text: string;
  done: boolean;
}

export default function Task({ task }: { task: TaskProps }) {
  const { onDeleteTask, onEditTask } = useTaskFunctionsContext();

  const [editText, setEditText] = React.useState({
    isEdit: false,
    text: task.text,
    done: task.done,
  });

  function onChecked(event: React.ChangeEvent<HTMLInputElement>) {
    setEditText({
      ...editText,
      done: event.target.checked,
    });
  }

  function onTyping(event: React.ChangeEvent<HTMLInputElement>) {
    setEditText({
      ...editText,
      text: event.target.value,
    });
  }

  function onEditClicked(task: TaskProps) {
    if (!editText.isEdit) {
      setEditText({ ...editText, isEdit: true });
    } else {
      onEditTask({
        ...task,
        text: editText.text,
        done: editText.done,
      });

      setEditText({ ...editText, isEdit: false });
    }
  }

  return (
    <div style={{ marginBottom: '8px' }}>
      <input
        type="checkbox"
        onChange={(event) => onChecked(event)}
        checked={editText.done}
      />
      {editText.isEdit ? (
        <input
          type="text"
          value={editText.text}
          onChange={(event) => onTyping(event)}
        />
      ) : (
        task.text
      )}
      <button onClick={() => onEditClicked(task)} style={{ marginLeft: '8px' }}>
        {editText.isEdit ? 'Save' : 'Edit'}
      </button>
      <button
        onClick={() => onDeleteTask(task.id)}
        style={{ marginLeft: '8px' }}
      >
        Delete
      </button>
    </div>
  );
}
