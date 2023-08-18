import { createContext, useContext } from 'react';
import { User } from './use-context-studycase';

// Context should only hold user
// Initial state for the context should be undefined because we still not have access to User at this point
export const DashboardContext = createContext<User | undefined>(undefined);

// We handle the problem if the Provider is undefined (not wrapped inside Provider or value mistakes)
// by throwing out the Error
export const useUserContext = () => {
  const user = useContext(DashboardContext);

  if (user === undefined) {
    throw new Error('User is undefined');
  }

  return user;
};
