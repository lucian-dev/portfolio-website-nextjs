import stylesLayout from '../../styles/Layout.module.scss'
import stylesProject from '../../styles/Project.module.scss'
import Link from 'next/link'
import {motion} from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import Testimonials from '../../components/Testimonials'

export const getStaticPaths = async () => {

  const res = await fetch('https://lucian-yabu.dev/wp-json/wp/v2/project?_embed')
  const projects = await res.json()

  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }))

  return { paths, fallback: false }

}

export const getStaticProps = async ({params}) => {

  const res = await fetch(`https://lucian-yabu.dev/wp-json/wp/v2/project?_embed&slug=${params.slug}`)
  const testimonials = await fetch('https://lucian-yabu.dev/wp-json/acf/v3/options/options')
  const project = await res.json()
  const testimonialsData = await testimonials.json()

  return { props: { project, testimonials: testimonialsData }}

}

const ProjectPage = ({project, testimonials}) => {
  return (
    <motion.section className={stylesLayout.mainSection}
      initial={{x: "-100%", opacity: 0}}
      animate={{x: 0, opacity: 1}}
      transition={{type: "spring", bounce: 0.6, duration: 0.5, damping: 14}}
      exit={{opacity: 0}}
    >
      <div className={stylesLayout.displayContent}>
        <div className={stylesLayout.container}>
          {project.map(item => (
            <div className={stylesProject.project} key={item.id}>
              <div className="mainTitle">
                <h1>{item.title.rendered}</h1>
              </div>
              <div className={stylesProject.gridProject}>
                <div className={stylesProject.info}>
                  <span>Project type:</span>
                  <p>{item._embedded['wp:term'][0][0].name}</p>
                  <span>Tech:</span>
                  <p>{item.acf.tech_project}</p>
                  <span>Maintenance:</span>
                  <p>{item.acf.maintenance}</p>
                  { item.acf.collab_project && (
                    <>
                      <span>Collab:</span>
                      <p>{item.acf.collab}</p>
                    </>
                  )}
                  <a href={item.acf.project_url} className={`btn ${stylesProject.linkProject}`} target="_blank" rel="noreferrer">Visit website</a>
                  <div className="btnBottom">
                    <Link href="/projects"><a className="btnS">...back to All projects</a></Link>
                  </div>
                </div>
                <div className={stylesProject.projectImages}>
                  <div className={stylesProject.imgFront}>
                    <img src={item._embedded['wp:featuredmedia'][0].source_url} alt={`Project-${item.title.rendered}`} />
                  </div>
                  <img src={item._embedded['wp:featuredmedia'][0].source_url} className={stylesProject.imgBack} alt={`Project-${item.title.rendered}`} />
                </div>
              </div>
            </div>
          ))}
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

export default ProjectPage
