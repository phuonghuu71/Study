import { useState } from 'react';
import styles from './use-context-studycase.module.css';
import Dashboard from './Dashboard';
import { DashboardContext } from './context';

/* eslint-disable-next-line */
export interface UseContextStudycaseProps {}

export interface User {
  name: string;
}

export function UseContextStudycase(props: UseContextStudycaseProps) {
  const [user] = useState<User>({
    name: 'Phuong',
  });

  return (
    <div className={styles['container']}>
      {/* The Provider will provide the value for the Consumer to use */}
      {/* If Dashboard isn't wrapped inside of this, the Consumer will receive undefined value */}
      <DashboardContext.Provider value={user}>
        <Dashboard />
      </DashboardContext.Provider>
    </div>
  );
}

export default UseContextStudycase;
