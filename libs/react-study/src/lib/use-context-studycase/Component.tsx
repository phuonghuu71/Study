import { useUserContext } from './context';

export function Sidebar() {
  const user = useUserContext();

  // Since we use the useUserContext hook, we don't need to use optional ?.
  // Because if the value is undefined, it'll throw out Error
  return <div>{user.name}</div>;
}

export function Profile() {
  const user = useUserContext();
  return <div>{user.name}</div>;
}
