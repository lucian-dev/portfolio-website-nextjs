import stylesLayout from './../styles/Layout.module.scss'
import stylesAbout from './../styles/About.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import Testimonials from '../components/Testimonials'
import {motion} from 'framer-motion'
import LastProjects from '../components/LastProjects'

export const getStaticProps = async () => {

  const res = await fetch('http://lucian-yabu.dev/wp-json/wp/v2/pages/?slug=about')
  const res2 = await fetch('https://lucian-yabu.dev/wp-json/wp/v2/project?_embed&per_page=3')
  const testimonials = await fetch('https://lucian-yabu.dev/wp-json/acf/v3/options/options')

  const data = await res.json()
  const lastProjects = await res2.json()
  const testimonialsData = await testimonials.json()
  

  return {
    props: {about: data, projects: lastProjects, testimonials: testimonialsData}
  }

}


const About = ({about, projects, testimonials}) => {
  return (
    <motion.section className={stylesLayout.mainSection}
      initial={{x: "-100%", opacity: 0}}
      animate={{x: 0, opacity: 1}}
      transition={{type: "spring", bounce: 0.6, duration: 0.5, damping: 14}}
      exit={{opacity: 0}}
    >
      <div className={stylesLayout.displayContent}>
        <div className={stylesLayout.container}>
          <div className={stylesAbout.aboutSection}>
            <div className="mainTitle textCenter">
              <h1>About <span>Me</span></h1>
              <p>I am a Front-End Developer based in Bucharest, Romania.</p>
            </div>
            <div className={stylesAbout.content}>
              {about.map(item => (
                <div className={stylesAbout.info} key={item.id} dangerouslySetInnerHTML={{__html: item.acf.about_text}}></div>
              ))}
            </div>
          </div>
          <div>
            <h1>Last projects...</h1>
            {projects.map(project => (
              <LastProjects
                key={project.id}
                item={project}
              />
            ))}
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

export default About
