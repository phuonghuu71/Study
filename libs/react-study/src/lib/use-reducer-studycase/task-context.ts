import React from 'react';
import { TaskProps } from './task';

interface TaskFunctionsProps {
  onDeleteTask: (id: number) => void;
  onEditTask: (task: TaskProps) => void;
}

export const TaskFunctionsContext = React.createContext<
  TaskFunctionsProps | undefined
>(undefined);

export const useTaskFunctionsContext = () => {
  const functions = React.useContext(TaskFunctionsContext);

  if (functions === undefined) throw new Error('TaskContext is undefined');

  return functions;
};
