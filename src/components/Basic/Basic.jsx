import { About } from '../About';
import styles from './styles.module.scss';

const Basic = () => (
  <section className="detail_section">
    <h1 className={styles.fullname}>Lewis Maina Muriuki</h1>
    <p className={styles.role}>Junior Fullstack Developer</p>
    <About />
  </section>
);

export default Basic;
