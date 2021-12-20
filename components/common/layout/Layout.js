import Footer from '@components/common/footer/Footer';
import Nav from '@components/common/navbar/Nav';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className={styles.mainWrapper}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
