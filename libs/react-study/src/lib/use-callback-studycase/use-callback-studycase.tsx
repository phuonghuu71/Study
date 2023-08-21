import { useCallback, useState } from 'react';
import styles from './use-callback-studycase.module.css';
import Search from './Search';

/* eslint-disable-next-line */
export interface UseCallbackStudycaseProps {}

const allUsers = ['john', 'alex', 'george', 'simon', 'james'];

function shuffle(array: string[]) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export function UseCallbackStudycase(props: UseCallbackStudycaseProps) {
  const [users, setUsers] = useState(allUsers);

  console.log('re-render');

  // functions are different from every render by default
  // function === function will return false
  // useCallback will wrap your function and return a new memorized function
  // Freeze everything in the function at the certain point of time
  const handleSearch = useCallback(
    (text: string) => {
      // Freeze at user[0] on the first render
      console.log(users[0]);

      const filteredUsers = allUsers.filter((user) => user.includes(text));
      setUsers(filteredUsers);
    },
    // the dependencies we pass will unfreeze the function
    // which means it'll re-render the component if the value is different
    // Here we have users, everytime we type a name
    // It'll log the users[0] out
    // And also it happens when we setUsers, it's also re-render the component
    // Because it's now unfreeze due to the users dependencies we pass below
    [users]
  );

  return (
    <div className={styles['container']}>
      <Search onChange={handleSearch} />
      <button onClick={() => setUsers([...shuffle(allUsers)])}>Shuffle</button>
      <ul>
        {users.map((user, index) => {
          return <li key={index}>{user}</li>;
        })}
      </ul>
    </div>
  );
}

export default UseCallbackStudycase;
