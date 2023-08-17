import styles from './use-memo-studycase.module.css';

/* eslint-disable-next-line */
export interface UseMemoStudycaseProps {}

export function UseMemoStudycase(props: UseMemoStudycaseProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UseMemoStudycase!</h1>
    </div>
  );
}

export default UseMemoStudycase;
