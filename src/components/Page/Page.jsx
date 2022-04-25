import { Main } from '../Main';
import { Side } from '../Side';

import styles from './styles.module.scss';

const Page = () => (
  <article className={styles.page}>
    <Side />
    <Main />
  </article>
);

export default Page;
