import { contacts } from './constants';
import { ContactDetail } from './ContactDetail';

const Contact = () => (
  <div className="side_section">
    <h3 className="section_title-alt">Contact Information</h3>
    <div className="content">
      {contacts.map((contact) => (
        <ContactDetail key={contact.id} contact={contact} />
      ))}
    </div>
  </div>
);

export default Contact;
