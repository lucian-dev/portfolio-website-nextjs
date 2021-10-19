import styles from "./Projects.module.scss";
import Link from "next/link";

const ProjectItem = ({ project }) => {
  return (
    <>
      {project.map((item) => (
        <div className={styles.project} key={item.id}>
          <div className="mainTitle">
            <h1>{item.title.rendered}</h1>
          </div>
          <div className={styles.gridProject}>
            <div className={styles.info}>
              <span>Project type:</span>
              <p>{item._embedded["wp:term"][0][0].name}</p>
              <span>Tech:</span>
              <p>{item.acf.tech_project}</p>
              <span>Maintenance:</span>
              <p>{item.acf.maintenance}</p>
              {item.acf.collab_project && (
                <>
                  <span>Collab:</span>
                  <p>{item.acf.collab}</p>
                </>
              )}
              <a
                href={item.acf.project_url}
                className={`btn ${styles.linkProject}`}
                target="_blank"
                rel="noreferrer"
              >
                Visit website
              </a>
              <div className="btnBottom">
                <Link href="/projects">
                  <a className="btnS">...back to All projects</a>
                </Link>
              </div>
            </div>
            <div className={styles.projectImages}>
              <div className={styles.imgFront}>
                <img
                  src={item._embedded["wp:featuredmedia"][0].source_url}
                  alt={`Project-${item.title.rendered}`}
                />
              </div>
              <img
                src={item._embedded["wp:featuredmedia"][0].source_url}
                className={styles.imgBack}
                alt={`Project-${item.title.rendered}`}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectItem;
