import navStyles from '../styles/Nav.module.scss'
import Link from './Link'
import { useState } from 'react'
import { Divide as Hamburger } from 'hamburger-react'
import { AnimatePresence, motion } from 'framer-motion'

const navVariants = {
  hidden: { opacity: 0, scale: 0},
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: .3,
      staggerChildren: .5,
    }
  }
}

const linkVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const Nav = () => {

  const [ burger, setBurger ] = useState(false) 

  const handleClick = () => setBurger(!burger)

  return (
    <>
      <nav className={`${navStyles.nav} ${burger ? `${navStyles.activeBurger}` : ''}`}>
        <div className={navStyles.logo}>
          <img src="../th_lucian.jpg" alt="Lucian-DEV Frontend Developer" />
          <h3>Lucian <span>DEV</span></h3>
        </div>
        <ul className={navStyles.navigation}>
          <li><Link href='/'><a>Home</a></Link></li>
          <li><Link href='/about'><a>About</a></Link></li>
          <li><Link href='/projects'><a>Projects</a></Link></li>
          <li><Link href='/contact'><a>Contact</a></Link></li>
        </ul>
        <div className={navStyles.social}>
          <a href="https://linkedin/lucian_dev">
            <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
          </a>
          <a href="https://github/lucian_dev">
            <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
          </a>
        </div>
        <div className={navStyles.burger}>
          <Hamburger toggled={burger} toggle={setBurger} size={26} duration={0.6} rounded label="Show menu" />
        </div>
      </nav>
      <AnimatePresence >
        { burger && (
          <motion.div 
            className={navStyles.burgerMenu}
            initial={{x: '-100%', opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{type: "spring", duration: 0.3}}
            exit={{x: '-100%', opacity: 0}}
          >
            <motion.div className={navStyles.burgerInner}>
              <motion.ul 
                className={navStyles.navigationBurger}
                variants={navVariants}
                initial='hidden'
                animate='visible'
              >
                <motion.li variants={linkVariants}><Link href='/'><a onClick={handleClick}>Home</a></Link></motion.li>
                <motion.li variants={linkVariants}><Link href='/about'><a onClick={handleClick}>About</a></Link></motion.li>
                <motion.li variants={linkVariants}><Link href='/projects'><a onClick={handleClick}>Projects</a></Link></motion.li>
                <motion.li variants={linkVariants}><Link href='/contact'><a onClick={handleClick}>Contact</a></Link></motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Nav
