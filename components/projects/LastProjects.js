import styles from "./Projects.module.scss";
import ProjectCard from "@components/projects/ProjectCard";

const LastProjects = ({ lastProjects }) => {
  return (
    <div className={styles.lastProjects}>
      <div className="mainTitle">
        <h2>
          Last <span>projects...</span>
        </h2>
      </div>
      <div className={styles.projectsGrid}>
        {lastProjects.map((project) => (
          <ProjectCard key={project.id} item={project} />
        ))}
      </div>
    </div>
  );
};

export default LastProjects;
