import React from 'react';
import AddTask from './add-task';
import TaskList from './task-list';
import { TaskProps } from './task';
import taskReducer, { ActionType } from './task-reducer';
import { TaskFunctionsContext } from './task-context';

/* eslint-disable-next-line */
interface UseReducerStudycaseProps {}

/**
 * . The reasons we should use useReducer:
 * .  + To reduce the complexity of set state.
 * .  + To keep logic in one place.
 */

/**
 * . How it works:
 * .  + It dispatches "actions" of what user just did.
 * .  + And the sate update logic will live elsewhere.
 */

export function UseReducerStudycase(props: UseReducerStudycaseProps) {
  // const [tasks, setTasks] = React.useState<TaskProps[]>(initialTasks);
  const [tasks, dispatch] = React.useReducer(taskReducer, initialTasks);

  function handleAddTask(text: string) {
    const task: TaskProps = {
      id: nextId++,
      text: text,
      done: false,
    };

    dispatch({
      type: ActionType.ADD,
      payload: task,
    });
  }

  function handleEditTask(task: TaskProps) {
    dispatch({
      type: ActionType.EDIT,
      payload: task,
    });
  }

  function handleDeleteTask(id: number) {
    dispatch({
      type: ActionType.DELETE,
      payload: id,
    });
  }

  return (
    <div>
      <h2>Prague itinerary</h2>
      <TaskFunctionsContext.Provider
        value={{
          onEditTask: handleEditTask,
          onDeleteTask: handleDeleteTask,
        }}
      >
        <AddTask onAddTask={handleAddTask} />
        <TaskList tasks={tasks} />
      </TaskFunctionsContext.Provider>
    </div>
  );
}

export default UseReducerStudycase;

let nextId = 3;
const initialTasks: TaskProps[] = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];
