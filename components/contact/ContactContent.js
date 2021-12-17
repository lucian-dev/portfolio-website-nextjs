import styles from "./Contact.module.scss";

const ContactContent = ({ contact }) => {
  return (
    <div className={styles.contact}>
      <div className="mainTitle textCenter">
        <h1>{contact[0].title.rendered}</h1>
        <p>{contact[0].acf.main_title_contact.sub_title}</p>
      </div>
      <div className={styles.contactRow}>
        <div className={styles.social}>
          <span className={styles.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <path d="M31.8 18.7c4.6 0 8-3.5 8-8s-3.5-8-8-8-8 3.5-8 8 3.4 8 8 8zm0-10.8c1.6 0 2.7 1.1 2.7 2.7s-1.1 2.7-2.7 2.7-2.7-1.1-2.7-2.7 1.1-2.7 2.7-2.7zM23.7 28.8c2.1-2.1 5.1-3.5 8.3-3.5 3.2 0 6.2 1.3 8.3 3.5.5.5 1.3.8 1.9.8s1.3-.3 1.9-.8c1.1-1.1 1.1-2.7.3-3.8-3.2-3.5-7.5-5.4-12.1-5.4s-9.1 1.9-12.1 5.4c-1.1 1.1-.8 2.7.3 3.8.6 1.1 2.2 1.1 3.2 0zM13 50.8c4.6 0 8-3.5 8-8s-3.5-8-8-8-8 3.5-8 8 3.5 8 8 8zm0-10.7c1.6 0 2.7 1.1 2.7 2.7s-1.1 2.7-2.7 2.7-2.7-1.1-2.7-2.7 1.1-2.7 2.7-2.7zM12.7 51.6C8.1 51.6 3.6 53.5.6 57c-1.1 1.1-.8 2.7.3 3.8s2.7.8 3.8-.3C6.8 58.3 9.8 57 13 57s6.2 1.3 8.3 3.5c.5.5 1.3.8 1.9.8s1.3-.3 1.9-.8c1.1-1.1 1.1-2.7.3-3.8-3.5-2.9-8.1-5.1-12.7-5.1zM50.6 50.8c4.6 0 8-3.5 8-8s-3.5-8-8-8-8 3.5-8 8 3.4 8 8 8zm0-10.7c1.6 0 2.7 1.1 2.7 2.7s-1.1 2.7-2.7 2.7-2.7-1.1-2.7-2.7 1-2.7 2.7-2.7zM63.2 57c-3.2-3.5-7.5-5.4-12.1-5.4S42 53.5 39 57c-1.1 1.1-.8 2.7.3 3.8 1.1 1.1 2.7.8 3.8-.3 2.1-2.1 5.1-3.5 8.3-3.5 3.2 0 6.2 1.3 8.3 3.5.5.5 1.3.8 1.9.8s1.3-.3 1.9-.8c.7-.6.7-2.4-.3-3.5z" />
              <path d="M39.6 41.2c.5-1.3 0-2.9-1.3-3.5l-3.8-1.6v-4c0-1.6-1.1-2.7-2.7-2.7s-2.7 1.1-2.7 2.7v3.8l-3.8 1.9c-1.3.5-1.9 2.1-1.3 3.5.5 1.3 2.1 1.9 3.5 1.3l4-1.9 4.3 1.9c.5.3 1.1.3 1.3.3 1.1-.1 1.9-.7 2.5-1.7z" />
            </svg>
          </span>
          <h5>Social</h5>
          <a
            href="https://www.linkedin.com/in/lucian-dev/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
            </svg>
          </a>
          <a
            href="https://github.com/lucian-dev"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
            </svg>
          </a>
        </div>
        <div className={styles.email}>
          <span className={styles.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <path d="M58.7 10.7H5.3C2.4 10.7 0 13.1 0 16v32c0 2.9 2.4 5.3 5.3 5.3h53.3c2.9 0 5.3-2.4 5.3-5.3V16c.1-2.9-2.3-5.3-5.2-5.3zM52.3 16L33.1 27.7c-.5.3-1.3.3-1.9 0L11.7 16h40.6zm-47 32V18.4l22.9 13.9c1.1.8 2.4 1.1 3.7 1.1 1.3 0 2.7-.3 3.7-1.1l22.9-13.9V48H5.3z" />
            </svg>
          </span>
          <h5>Email</h5>
          <a href={`mailto:${contact[0].acf.email}`}>{contact[0].acf.email}</a>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
