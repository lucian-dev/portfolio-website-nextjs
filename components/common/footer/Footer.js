import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.mainFooter}>
      <div className="copyright">
        <span>
          {new Date().getFullYear()} &copy; Lucian-DEV. All Rights Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
