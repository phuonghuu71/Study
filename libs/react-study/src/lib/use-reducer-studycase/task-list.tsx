import Task, { TaskProps } from './task';

interface TaskListProps {
  tasks: TaskProps[];
}

export default function TaskList({ tasks }: TaskListProps) {
  return tasks.map((task) => <Task key={task.id} task={task} />);
}
