import profileImg from '../../assets/images/profile.jpg';
import styles from './styles.module.scss';

const Side = () => (
  <div className={styles.side}>
    <img
      className={styles.profile_img}
      src={profileImg}
      alt="Lewis Maina profile"
    />
  </div>
);

export default Side;
