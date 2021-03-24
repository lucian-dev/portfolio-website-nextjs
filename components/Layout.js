import styles from '@styles/Layout.module.scss'
import Footer from '@components/Footer'
import Nav from '@components/Nav'

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
