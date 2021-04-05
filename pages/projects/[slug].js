import Head from 'next/head'
import styles from '@components/common/layout/Layout.module.scss'
import { fetchQuery } from '@utils/fetcher'
import {motion} from 'framer-motion'
import ProjectItem from '@components/projects/ProjectItem'
import Testimonials from '@components/testimonials/Testimonials'

const ProjectPage = ({project, testimonials}) => {
  return (
    <>
      <Head>
        {project[0].title.rendered &&
          <title>{project[0].title.rendered}</title>
        }
      </Head>
      <motion.section className={styles.mainSection}
        initial={{x: "-100%", opacity: 0}}
        animate={{x: 0, opacity: 1}}
        transition={{type: "spring", bounce: 0.6, duration: 0.5, damping: 14}}
        exit={{opacity: 0}}
      >
        <div className={styles.displayContent}>
          <div className={styles.container}>
            <ProjectItem project={project}/>
            <Testimonials testimonials={testimonials}/>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export const getStaticProps = async ({params: { slug }}) => {

  const project = await fetchQuery(`wp/v2/project?_embed&slug=${slug}`)
  const testimonials = await fetchQuery('acf/v3/options/options')

  return { props: { project, testimonials }}

}

export const getStaticPaths = async () => {

  const projects = await fetchQuery('wp/v2/project?_embed&per_page=100')

  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }))

  return { paths, fallback: false }

}

export default ProjectPage