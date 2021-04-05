import Head from 'next/head'
import styles from '@components/common/layout/Layout.module.scss'
import { fetchQuery } from '@utils/fetcher'
import {motion} from 'framer-motion'
import ProjectsList from '@components/projects/ProjectsList'
import Testimonials from '@components/testimonials/Testimonials'

const Projects = ({projects, testimonials}) => {

  return (
    <>
      <Head>
        <title>Projects - Lucian-DEV</title>
      </Head>
      <motion.section className={styles.mainSection}
        initial={{x: "-100%", opacity: 0}}
        animate={{x: 0, opacity: 1}}
        transition={{type: "spring", bounce: 0.6, duration: 0.5, damping: 14}}
        exit={{opacity: 0}}
      >
        <div className={styles.displayContent}>
          <div className={styles.container}>
            <ProjectsList projects={projects}/>
            <Testimonials testimonials={testimonials}/>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default Projects

export const getStaticProps = async () => {

  const projects = await fetchQuery('wp/v2/project?_embed&per_page=100')
  const testimonials = await fetchQuery('acf/v3/options/options')

  return {
    props: {projects, testimonials}
  }

}
