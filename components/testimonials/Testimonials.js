import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './Testimonials.module.scss'
import Testimonial from '@components/testimonials/Testimonial'

SwiperCore.use([Navigation, Pagination])

const Testimonials = ({testimonials}) => {
  return (
    <div  className={styles.testimonials}>
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
            <Testimonial
              testimonial={testimonial}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Testimonials