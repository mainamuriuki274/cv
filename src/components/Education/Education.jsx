import education from '../../config/education.json';
import { EducationDetail } from './EducationDetail';

const Education = () => (
  <section className="detail_section">
    <h2 className="section_title">Education</h2>
    <div className="content">
      {education.map((details) => (
        <EducationDetail key={details.id} details={details} />
      ))}
    </div>
  </section>
);

export default Education;
