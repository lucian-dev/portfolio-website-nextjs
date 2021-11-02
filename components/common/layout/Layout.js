import styles from "./Layout.module.scss";
import Footer from "@components/common/footer/Footer";
import Nav from "@components/common/navbar/Nav";

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
