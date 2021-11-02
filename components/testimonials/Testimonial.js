import styles from "./Testimonials.module.scss";

const Testimonial = ({ testimonial }) => {
  return (
    <div className={styles.testimonialWrapper}>
      <div className={styles.authorImg}>
        <img src={testimonial.author_image} alt={testimonial.author_name} />
      </div>
      <div className={styles.authorTest}>
        <p>{testimonial.testimonial}</p>
      </div>
      <div className={styles.authorInfo}>
        <h5>{testimonial.author_name}</h5>
        <i>-</i>
        <a
          href={testimonial.author_info}
          target="_blank"
          rel="noreferrer noopener"
        >
          {testimonial.author_info}
        </a>
      </div>
    </div>
  );
};

export default Testimonial;
