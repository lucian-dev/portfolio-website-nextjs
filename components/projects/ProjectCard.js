import styles from "./Projects.module.scss";
import Link from "next/link";
import { IoLinkOutline } from "react-icons/io5";

const ProjectCard = ({ item }) => {
  return (
    <div className={styles.lpCard}>
      <div className={styles.lpWrapper}>
        <Link href={`/projects/${item.slug}`}>
          <a className={styles.lpLink}>
            <div className={styles.lpImgBig}>
              <img
                src={item._embedded["wp:featuredmedia"][0].source_url}
                alt={item.title.rendered}
                loading="lazy"
              />
              <div className={styles.lpInfo}>
                <IoLinkOutline />
                <h3>{item.title.rendered}</h3>
              </div>
            </div>
            <div className={styles.lpImgSm}>
              <span className={styles.category}>
                {item._embedded["wp:term"][0][0].name}
              </span>
              <img
                src={item._embedded["wp:featuredmedia"][0].source_url}
                alt={item.title.rendered}
                loading="lazy"
              />
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
