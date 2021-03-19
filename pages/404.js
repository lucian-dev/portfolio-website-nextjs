import stylesLayout from '@styles/Layout.module.scss'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import {motion} from 'framer-motion'

const NotFound = () => {

  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 5000)
  }, [])

  return (
    <motion.section className={stylesLayout.mainSection}
      initial={{x: "-100%", opacity: 0}}
      animate={{x: 0, opacity: 1}}
      transition={{type: "spring", bounce: 0.6, duration: 0.5, damping: 14}}
      exit={{opacity: 0}}
    >
      <div className={stylesLayout.displayContent}>
        <div className={stylesLayout.container}>
          <div className={stylesLayout.page404}>
            <div className={stylesLayout.page404Content}>
              <h1>Oooops...</h1>
              <p>...go <Link href='/'><a className="btnS">Home</a></Link></p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default NotFound
