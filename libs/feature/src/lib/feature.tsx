import styles from './feature.module.css';

/* eslint-disable-next-line */
export interface FeatureProps {}

export function Feature(props: FeatureProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Feature!</h1>
    </div>
  );
}

export default Feature;
