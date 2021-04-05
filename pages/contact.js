import Head from 'next/head'
import styles from '@components/common/layout/Layout.module.scss'
import { fetchQuery } from '@utils/fetcher'
import {motion} from 'framer-motion'
import ContactContent from '@components/contact/ContactContent'
import LastProjects from '@components/projects/LastProjects'
import Testimonials from '@components/testimonials/Testimonials'

const Contact = ({lastProjects, testimonials}) => {
  return (
    <>
      <Head>
        <title>Contact - Lucian-DEV</title>
      </Head>
      <motion.section className={styles.mainSection}
        initial={{x: "-100%", opacity: 0}}
        animate={{x: 0, opacity: 1}}
        transition={{type: "spring", bounce: 0.6, duration: 0.5, damping: 14}}
        exit={{opacity: 0}}
      >
        <div className={styles.displayContent}>
          <div className={styles.container}>
            <ContactContent />
            <LastProjects lastProjects={lastProjects}/>
            <Testimonials testimonials={testimonials}/>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default Contact

export const getStaticProps = async () => {

  const lastProjects = await fetchQuery('wp/v2/project?_embed&per_page=2')
  const testimonials = await fetchQuery('acf/v3/options/options')

  return {
    props: {lastProjects, testimonials}
  }

}