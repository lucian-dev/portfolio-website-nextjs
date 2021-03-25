import Head from 'next/head'
import stylesLayout from '@styles/Layout.module.scss'
import stylesProjects from '@styles/Projects.module.scss'
import {motion} from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import Testimonials from '@components/Testimonials'
import ProjectCard from '@components/ProjectCard'

const Projects = ({projects, testimonials}) => {

  return (
    <>
      <Head>
        <title>Projects - Lucian-DEV</title>
      </Head>
      <motion.section className={stylesLayout.mainSection}
      initial={{x: "-100%", opacity: 0}}
      animate={{x: 0, opacity: 1}}
      transition={{type: "spring", bounce: 0.6, duration: 0.5, damping: 14}}
      exit={{opacity: 0}}
    >
      <div className={stylesLayout.displayContent}>
        <div className={stylesLayout.container}>
          <div className={stylesProjects.projects}>
            <div className="mainTitle textCenter">
              <h1>Selected <span>projects</span></h1>
            </div>
            <div className={stylesLayout.projectsGrid}>
              {projects.map(project => (
                <ProjectCard
                  key={project.id}
                  item={project}
                />
              ))}
            </div>
          </div>
          <div className={stylesLayout.testimonials}>
            <div className="mainTitle">
              <h2>They <span>say...</span></h2>
            </div>
            <Swiper
              slidesPerView={1}
              navigation
              pagination
              spaceBetween={50}
              breakpoints={{
                768: {
                  slidesPerView: 2
                }
              }}
            >
            {testimonials.acf.loop_testimonials.map((testimonial, id) => (
              <SwiperSlide key={id}>
                <Testimonials
                  item={testimonial}
                />
              </SwiperSlide>
            ))}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
    </>
  )
}

export default Projects

export const getStaticProps = async () => {

  const resProjects = await fetch(`${process.env.WP_API_URL}/project?_embed&per_page=100`)
  const resTestimonials = await fetch(`${process.env.WP_ACF_API_URL}/options/options`)
  const projects = await resProjects.json()
  const testimonials = await resTestimonials.json()

  return {
    props: {projects, testimonials}
  }

}
