import styles from './ProjectsStyles.module.css';
import snapsum from '../../assets/snapsum.png';
import flipzo from '../../assets/flipzo.png';
import polyglot from '../../assets/polyglot.png';
import auction from '../../assets/auction.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={snapsum}
          link="https://github.com/Devronaut/SnapSum"
          h3="SnapSum"
          p="Article Summarizer"
        />
        <ProjectCard
          src={flipzo}
          link="https://github.com/Devronaut/Flipzo"
          h3="FlipZo"
          p="Game"
        />
        <ProjectCard
          src={polyglot}
          link="https://github.com/Devronaut/Polyglot"
          h3="Polyglot"
          p="AI tool"
        />
        <ProjectCard
          src={auction}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Auction Avenue"
          p="Online auction"
        />
      </div>
    </section>
  );
}

export default Projects;