import styles from "@components/common/layout/Layout.module.scss";
import { fetchQuery } from "@utils/fetcher";
import { motion } from "framer-motion";
import HomeContent from "@components/home/HomeContent";
import LastProjects from "@components/projects/LastProjects";
import Testimonials from "@components/testimonials/Testimonials";

const Home = ({ homeData, lastProjects, testimonials }) => {
  return (
    <motion.section
      className={styles.mainSection}
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", bounce: 0.6, duration: 0.5, damping: 14 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.displayContent}>
        <div className={styles.container}>
          <HomeContent homeData={homeData} />
          <LastProjects lastProjects={lastProjects} />
          <Testimonials testimonials={testimonials} />
        </div>
      </div>
    </motion.section>
  );
};

export default Home;

export const getStaticProps = async () => {
  const homeData = await fetchQuery("wp/v2/pages/?slug=home");
  const lastProjects = await fetchQuery("wp/v2/project?_embed&per_page=2");
  const testimonials = await fetchQuery("acf/v3/options/options");

  return {
    props: { homeData, lastProjects, testimonials },
  };
};
