import { TaskProps } from './task';

export enum ActionType {
  ADD = 'ADD',
  EDIT = 'EDIT',
  DELETE = 'DELETE',
}

interface TaskAction {
  type: ActionType;
  payload: string | number | TaskProps;
}

export default function taskReducer(
  state: TaskProps[],
  action: TaskAction
): TaskProps[] {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload as TaskProps];
    case 'EDIT':
      return state.map((rootTask: TaskProps) => {
        const editTask = action.payload as TaskProps;
        if (rootTask.id === editTask.id) {
          return editTask;
        }
        return rootTask;
      });
    case 'DELETE':
      return state.filter(
        (t: TaskProps) => t.id !== (action.payload as number)
      );
    default:
      throw Error('Unknown action type: ' + action.type);
  }
}
