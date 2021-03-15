import stylesLayout from '../../styles/Layout.module.scss'
import stylesProjects from '../../styles/Projects.module.scss'
import { VscOpenPreview } from 'react-icons/vsc'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import Testimonials from '../../components/Testimonials'
import {motion} from 'framer-motion'

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
              <h1>Projects</h1>
            </div>
            <div className={stylesProjects.gridProjects}>
              {projects.map(project => (
                <Link href={'/projects/' + project.slug} key={project.id}>
                  <a className={stylesProjects.projectCard}>
                    <img src={project._embedded['wp:featuredmedia'][0].source_url} alt={project.title.rendered} className={stylesProjects.projectImage} loading=
                    "lazy"/>
                    <div className={stylesProjects.projectInfo}>
                      <span className={stylesProjects.projectCategory}>{project._embedded['wp:term'][0][0].name}</span>
                      <h4>{project.title.rendered}</h4>
                      <div className={stylesProjects.projectView}>
                        <VscOpenPreview />
                        <span>View</span>
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h1>They say...</h1>
            <Swiper
              slidesPerView={2}
              navigation
              pagination
              spaceBetween={50}
            >
              {testimonials.acf.loop_testimonials.map(testimonial => (
                <SwiperSlide key={testimonial.id}>
                  <Testimonials
                    key={testimonial.id}
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
