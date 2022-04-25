import styles from './styles.module.scss';

const About = () => (
  <section className={styles.about_section}>
    <h2 className="section_title">About</h2>
    <p className={`content ${styles.about_txt}`}>
      I am a diligent, energetic, ambitious person who strives to do any task
      that I am presented with and do it to the best of my ability. I adapt
      easily to new environments and work well with people around me. My goal is
      to gain experience and a deeper understanding in the field of information
      technology and apply the skills and knowledge acquired in school to bring
      value to the organization and the society.
    </p>
  </section>
);

export default About;
