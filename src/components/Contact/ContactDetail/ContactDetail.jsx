import { PropTypes } from 'prop-types';
import styles from './styles.module.scss';

const ContactDetail = ({ contact }) => (
  <a className={styles.contact_link} href={contact.link}>
    <span>{contact.icon}</span>
    {contact.contact}
  </a>
);

const detailShape = {
  id: PropTypes.number.isRequired,
  contact: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  link: PropTypes.string.isRequired,
};

ContactDetail.propTypes = {
  contact: PropTypes.arrayOf(PropTypes.shape(detailShape)).isRequired,
};

export default ContactDetail;
