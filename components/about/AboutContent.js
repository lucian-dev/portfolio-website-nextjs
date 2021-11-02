import styles from "./About.module.scss";

const AboutContent = ({ aboutData }) => {
  return (
    <div className={styles.aboutSection}>
      <div className="mainTitle textCenter">
        <h1>
          About <span>Me</span>
        </h1>
        <p>I am a Front-End Developer based in Bucharest, Romania.</p>
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
