import ProjectCard from '@components/projects/ProjectCard';
import styles from './Projects.module.scss';

const ProjectsList = ({ projects }) => {
  return (
    <div className={styles.projects}>
      <div className="mainTitle textCenter">
        <h1>
          Selected <span>projects</span>
        </h1>
      </div>
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} item={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
