import { useState } from 'react';
import ProjectCard from '@components/projects/ProjectCard';
import styles from './Projects.module.scss';

const ProjectsList = ({ projects, categories }) => {
  const [activeCategory, setActiveCategory] = useState();

  let activeProjects = projects;

  if (activeCategory) {
    activeProjects = activeProjects.filter(({ _embedded }) => {
      const catIds = _embedded['wp:term'][0][0].name;
      return catIds.includes(activeCategory);
    });
  }
  return (
    <div className={styles.projects}>
      <div className="mainTitle textCenter">
        <h1>
          Selected <span>projects</span>
        </h1>
      </div>
      <ul className={styles.filterProducts}>
        <li>
          <button className={`btnS ${!activeCategory ? 'isActive' : ''}`} onClick={() => setActiveCategory(null)}>
            View All
          </button>
        </li>
        {categories.map((category) => {
          const isActive = category.name === activeCategory;
          return (
            <li key={category.id}>
              <button className={`btnS ${isActive ? 'isActive' : ''}`} onClick={() => setActiveCategory(category.name)}>
                {category.name}
              </button>
            </li>
          );
        })}
      </ul>
      <div className={styles.projectsGrid}>
        {activeProjects.map((project) => (
          <ProjectCard key={project.id} item={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
