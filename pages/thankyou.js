import styles from '@components/common/layout/Layout.module.scss'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

const ThankYou = () => {

  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 6000)
  }, [])

  return (
    <motion.section className={styles.mainSection}
      initial={{x: "-100%", opacity: 0}}
      animate={{x: 0, opacity: 1}}
      transition={{type: "spring", bounce: 0.6, duration: 0.5, damping: 14}}
      exit={{opacity: 0}}
    >
      <div className={styles.displayContent}>
        <div className={styles.container}>
          <div className={styles.thankYou}>
            <div className={styles.tyContent}>
              <h1>Thank you for your message!</h1>
              <p>I will get back to you as soon as possible</p>
              <p>...go <Link href='/'><a className="btnS">Home</a></Link></p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default ThankYou