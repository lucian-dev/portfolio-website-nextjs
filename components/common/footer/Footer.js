import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.mainFooter}>
      <div className={styles.stack}>
        Built with{' '}
        <a href="https://nextjs.org" target="_blank" rel="noreferrer noopener">
          NextJS
        </a>
        . Data from WordPress. Hosted on{' '}
        <a href="https://netlify.com" target="_blank" rel="noreferrer noopener">
          Netlify
        </a>
      </div>
      <div className={styles.copyright}>
        <span>{new Date().getFullYear()} &copy; Lucian-DEV</span>
      </div>
    </footer>
  );
};

export default Footer;
