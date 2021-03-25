import Head from 'next/head'
import stylesLayout from '@styles/Layout.module.scss'
import stylesAbout from '@styles/About.module.scss'
import {motion} from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import Testimonials from '@components/Testimonials'
import ProjectCard from '@components/ProjectCard'

const About = ({aboutData, lastProjects, testimonials}) => {
  return (
    <>
      <Head>
        {aboutData[0].title.rendered && 
          <title>{aboutData[0].title.rendered} - Lucian-DEV</title>
        } 
      </Head>
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
              {aboutData.map(about => (
                <div className={stylesAbout.info} key={about.id} dangerouslySetInnerHTML={{__html: about.acf.about_text}}></div>
              ))}
            </div>
          </div>
          <div className={stylesLayout.lastProjects}>
            <div className="mainTitle">
              <h2>Last <span>projects...</span></h2>
            </div>
            <div className={stylesLayout.projectsGrid}>
              {lastProjects.map(project => (
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

export default About

export const getStaticProps = async () => {

  const resAbout = await fetch(`${process.env.WP_API_URL}/pages/?slug=about`)
  const resLastProjects = await fetch(`${process.env.WP_API_URL}/project?_embed&per_page=2`)
  const resTestimonials = await fetch(`${process.env.WP_ACF_API_URL}/options/options`)

  const aboutData = await resAbout.json()
  const lastProjects = await resLastProjects.json()
  const testimonials = await resTestimonials.json()
  

  return {
    props: {aboutData, lastProjects, testimonials}
  }

}