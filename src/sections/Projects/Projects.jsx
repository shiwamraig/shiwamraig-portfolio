import styles from './ProjectsStyles.module.css';
import college from '../../assets/college2.jpg'
import google from '../../assets/google-logo-9822.png'
import passwordGenerator from '../../assets/password1.png';
import currencyConverter from '../../assets/currency1.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={college}
          link="https://github.com/shiwamraig/collegeWebsite"
          h3="EduCollege"
          p="A College Website"
        />
        <ProjectCard
          src={google}
          link="https://github.com/shiwamraig/geminiClone"
          h3="GeminiClone"
          p="Google gemini Ai"
        />
        <ProjectCard
          src={currencyConverter}
          link="https://github.com/shiwamraig/currencyConverter"
          h3="CurrencyGuide"
          p="Currency Converter"
        />
        <ProjectCard
          src={passwordGenerator}
          link="https://github.com/shiwamraig/passwordGenerator"
          h3="Password Generator"
          p="Generate Password"
        />
      </div>
    </section>
  );
}

export default Projects;