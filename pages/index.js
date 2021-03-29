import stylesLayout from '@styles/Layout.module.scss'
import stylesHome from '@styles/Home.module.scss'
import 'react-toastify/dist/ReactToastify.css'
import { fetchQuery } from '@utils/fetcher'
import Link from 'next/link'
import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProjectCard from '@components/ProjectCard'
import Testimonials from '@components/Testimonials'

const Home = ({homeData, lastProjects, testimonials}) => {

  const MsgToast = () => (
    <div className={stylesHome.toast}>
      <p>Let's build something great!</p>
      <a href="https://lucian-dev.netlify.app/contact" rel="noreferrer noopener">Contact me!</a>
    </div>
  )

  useEffect(() => {
    toast.dark(<MsgToast/>, {
      position: "top-right",
      delay: 2000,
      autoClose: 5000,
      hideProgressBar: false,
      pauseOnHover: true,
      progressClassName: "yabu-toast"
    })
  }, [])

  return (
      <motion.section className={stylesLayout.mainSection}
        initial={{x: "-100%", opacity: 0}}
        animate={{x: 0, opacity: 1}}
        transition={{type: "spring", bounce: 0.6, duration: 0.5, damping: 14}}
        exit={{opacity: 0}}
      >
        <ToastContainer/>
        <div className={stylesLayout.displayContent}>
          <div className={stylesLayout.container}>
            {homeData.map(home => (
              <div className={stylesHome.content} key={home.id}>
                <div className={stylesHome.info}>
                  <h1 dangerouslySetInnerHTML={{__html: home.acf.hero_brief.title}}></h1>
                  <div dangerouslySetInnerHTML={{__html: home.acf.hero_brief.sub_title}}></div>
                  <Link href="/about">
                    <a className="btnS">...more about me</a>
                  </Link>
                </div>
                <div className={stylesHome.features}>
                  <h3>Your website will be...</h3>
                  {home.acf.features_loop.map((feature, id) => (
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
                {lastProjects.map(project => (
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

export default Home

export const getStaticProps = async () => {

  const homeData = await fetchQuery('wp/v2/pages/?slug=home')
  const lastProjects = await fetchQuery('wp/v2/project?_embed&per_page=2')
  const testimonials = await fetchQuery('acf/v3/options/options')

  return {
    props: {homeData, lastProjects, testimonials}
  }

}