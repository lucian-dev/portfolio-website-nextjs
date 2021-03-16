import stylesLayout from './../styles/Layout.module.scss'
import stylesHome from './../styles/Home.module.scss'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import Testimonials from '../components/Testimonials'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'

export const getStaticProps = async () => {

  const res = await fetch('https://lucian-yabu.dev/wp-json/wp/v2/pages/?slug=home')
  const res2 = await fetch('https://lucian-yabu.dev/wp-json/wp/v2/project?_embed&per_page=2')
  const testimonials = await fetch('https://lucian-yabu.dev/wp-json/acf/v3/options/options')

  const data = await res.json()
  const lastProjects = await res2.json()
  const testimonialsData = await testimonials.json()

  return {
    props: {home: data, projects: lastProjects, testimonials: testimonialsData}
  }

}


const Home = ({home, projects, testimonials}) => {
  return (
      <motion.section className={stylesLayout.mainSection}
        initial={{x: "-100%", opacity: 0}}
        animate={{x: 0, opacity: 1}}
        transition={{type: "spring", bounce: 0.6, duration: 0.5, damping: 14}}
        exit={{opacity: 0}}
      >
        <div className={stylesLayout.displayContent}>
          <div className={stylesLayout.container}>
            {home.map(item => (
              <div className={`${stylesHome.content} dGrid`} key={item.id}>
                <div className={stylesHome.info}>
                  <h1 dangerouslySetInnerHTML={{__html: item.acf.hero_brief.title}}></h1>
                  <div dangerouslySetInnerHTML={{__html: item.acf.hero_brief.sub_title}}></div>
                  <Link href="/about">
                    <a className="btnS">...more about me</a>
                  </Link>
                </div>
                <div className={stylesHome.features}>
                  <h3>Your website will be...</h3>
                  {item.acf.features_loop.map((feature, id) => (
                    <div className={stylesHome.item} key={id}>
                      <span className={stylesHome.icon}>
                        <img src={feature.feature_icon}/>
                      </span>
                      <h4>{feature.feature_title}</h4>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
            <div  className={stylesLayout.testimonials}>
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

export default Home