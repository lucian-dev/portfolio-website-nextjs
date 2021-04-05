import styles from '@components/home/Home.module.scss'

const Features = ({features}) => {
  return (
    <div className={styles.features}>
      <h3>Your website will be...</h3>
      {features.acf.features_loop.map((feature, id) => (
        <div className={styles.item} key={id}>
          <span className={styles.icon}>
            <img src={feature.feature_icon} />
          </span>
          <h4>{feature.feature_title}</h4>
        </div>
      ))}
    </div>
  )
}

export default Features
