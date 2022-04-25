import { PropTypes } from 'prop-types';
import styles from './styles.module.scss';

const EducationDetail = ({ details }) => (
  <div className={styles.card}>
    <h4 className={styles.title}>{details.title}</h4>
    <p className={styles.school}>
      {details.school}
      &nbsp;
      <span className={styles.from_to}>{details.from_to}</span>
    </p>
    <p className={styles.grade}>{details.grade}</p>
  </div>
);

const detailShape = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
  from_to: PropTypes.string.isRequired,
  grade: PropTypes.string.isRequired,
};

EducationDetail.propTypes = {
  details: PropTypes.arrayOf(PropTypes.shape(detailShape)).isRequired,
};

export default EducationDetail;
