import styles from "./About.module.scss";

const AboutContent = ({ aboutData }) => {
  return (
    <div className={styles.aboutSection}>
      <div className="mainTitle textCenter">
        <h1>
          About <span>Me</span>
        </h1>
        <p>{aboutData[0].acf.main_title_about.sub_title}</p>
      </div>
      <div className={styles.content}>
        {aboutData.map((about) => (
          <div
            className={styles.info}
            key={about.id}
            dangerouslySetInnerHTML={{ __html: about.acf.about_text }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AboutContent;
