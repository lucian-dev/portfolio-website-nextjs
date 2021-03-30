import SwiperCore, { Navigation, Pagination } from 'swiper'
import styles from '@styles/Testimonials.module.scss'
import Image from 'next/image'

SwiperCore.use([Navigation, Pagination])

const Testimonials = ({item}) => {
  return (
    <div className={styles.testimonialWrapper}>
      <div className={styles.authorImg}>
        <Image 
          src={item.author_image}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.authorTest}>
        <p>{item.testimonial}</p>
      </div>
      <div className={styles.authorInfo}>
        <h5>{item.author_name}</h5>
        <i>-</i>
        <a href={item.author_info}>{item.author_info}</a>
      </div>
    </div>
  )
}

export default Testimonials