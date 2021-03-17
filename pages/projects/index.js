import stylesLayout from '../../styles/Layout.module.scss'
import stylesProjects from '../../styles/Projects.module.scss'
import {motion} from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import Testimonials from '../../components/Testimonials'
import ProjectCard from '../../components/ProjectCard'

export const getStaticProps = async () => {

  const res = await fetch('https://lucian-yabu.dev/wp-json/wp/v2/project?_embed&per_page=100')
  const testimonials = await fetch('https://lucian-yabu.dev/wp-json/acf/v3/options/options')
  const data = await res.json()
  const testimonialsData = await testimonials.json()

  return {
    props: {projects: data, testimonials: testimonialsData}
  }

}

const Projects = ({projects, testimonials}) => {

  return (
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
  )
}

export default Projects
