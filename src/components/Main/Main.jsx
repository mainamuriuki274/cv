import { Basic } from '../Basic';
import { Education } from '../Education';
import styles from './styles.module.scss';

const Main = () => (
  <div className={styles.main_details}>
    <Basic />
    <Education />
  </div>
);

export default Main;
