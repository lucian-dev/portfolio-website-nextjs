import styles from '../styles/Layout.module.scss'
import Footer from './Footer'
import Nav from './Nav'

const Layout = ({ children }) => {

  return (
    <>
      <Nav />
        <main className={styles.mainWrapper}>
          {children}
        </main>
      <Footer />
    </>
  )
}

export default Layout
