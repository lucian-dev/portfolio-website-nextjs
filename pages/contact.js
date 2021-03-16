import stylesLayout from './../styles/Layout.module.scss'
import stylesContact from './../styles/Contact.module.scss'
import {motion} from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import Testimonials from '../components/Testimonials'
import ProjectCard from '../components/ProjectCard'

export const getStaticProps = async () => {

  const res2 = await fetch('https://lucian-yabu.dev/wp-json/wp/v2/project?_embed&per_page=2')
  const testimonials = await fetch('https://lucian-yabu.dev/wp-json/acf/v3/options/options')

  const lastProjects = await res2.json()
  const testimonialsData = await testimonials.json()

  return {
    props: {projects: lastProjects, testimonials: testimonialsData}
  }

}

const Contact = ({projects, testimonials}) => {
  return (
    <motion.section className={stylesLayout.mainSection}
      initial={{x: "-100%", opacity: 0}}
      animate={{x: 0, opacity: 1}}
      transition={{type: "spring", bounce: 0.6, duration: 0.5, damping: 14}}
      exit={{opacity: 0}}
    >
      <div className={stylesLayout.displayContent}>
        <div className={stylesLayout.container}>
          <div className={stylesContact.contact}>
            <div className="mainTitle textCenter">
              <h1>Contact</h1>
              <p>What project do you have in mind? Let's build toghether!</p>
            </div>
            <div className={stylesContact.contactForm}>
              <form 
                name="contact-form" 
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                >
                <input type="hidden" name="form-name" value="contact-form" />
                <div className="form-row-full">
                  <input type="text" name="name" className={stylesContact.input} placeholder="Your Name" required/>
                </div>
                <div className={stylesContact.formRow}>
                  <div className={stylesContact.formCol}>
                    <input type="email" name="email" className={stylesContact.input} placeholder="Email" required/>
                  </div>
                  <div className={stylesContact.formCol}>
                    <select name="project" className={stylesContact.select} required>
                      <option value="project-type" name="project-type">--Project Type</option>
                      <option value="one-page" name="one-page">One-Page</option>
                      <option value="multi-page" name="multi-page">Multi-Page</option>
                      <option value="e-commerce" name="e-commerce">E-Commerce</option>
                      <option value="blog" name="blog">Blog</option>
                      <option value="other" name="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className={stylesContact.formRowFull}>
                  <textarea name="message" className={stylesContact.textarea} placeholder="Details about your project..." required></textarea>
                </div>
                <div className={stylesContact.formRowFull}>
                  <div data-netlify-recaptcha="true"></div>  
                </div>
                <div className="btnBottom textCenter">
                  <button type="submit" value="Submit" className={stylesContact.submit}>Send Message</button>
                </div>
              </form>
            </div>
          </div>
          <div className={stylesLayout.lastProjects}>
            <div className="mainTitle">
              <h2>Last <span>projects...</span></h2>
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
                slidesPerView={2}
                navigation
                pagination
                spaceBetween={50}
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

export default Contact
