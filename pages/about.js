import Head from "next/head";
import styles from "@components/common/layout/Layout.module.scss";
import { fetchQuery } from "@utils/fetcher";
import { motion } from "framer-motion";
import AboutContent from "@components/about/AboutContent";
import LastProjects from "@components/projects/LastProjects";
import Testimonials from "@components/testimonials/Testimonials";

const About = ({ aboutData, lastProjects, testimonials }) => {
  return (
    <>
      <Head>
        {aboutData[0].title.rendered && (
          <title>{aboutData[0].title.rendered} - Lucian-DEV</title>
        )}
      </Head>
      <motion.section
        className={styles.mainSection}
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.6, duration: 0.5, damping: 14 }}
        exit={{ opacity: 0 }}
      >
        <div className={styles.displayContent}>
          <div className={styles.container}>
            <AboutContent aboutData={aboutData} />
            <LastProjects lastProjects={lastProjects} />
            <Testimonials testimonials={testimonials} />
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default About;

export const getStaticProps = async () => {
  const aboutData = await fetchQuery("wp/v2/pages/?slug=about");
  const lastProjects = await fetchQuery("wp/v2/project?_embed&per_page=2");
  const testimonials = await fetchQuery("acf/v3/options/options");

  return {
    props: { aboutData, lastProjects, testimonials },
  };
};
