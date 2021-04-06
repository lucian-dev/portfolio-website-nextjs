import styles from '@components/contact/Contact.module.scss'

const ContactContent = () => {
  return (
    <div className={styles.contact}>
      <div className="mainTitle textCenter">
        <h1>Contact</h1>
        <p>What project do you have in mind? Let's build toghether!</p>
      </div>
      <div className={styles.contactForm}>
        <form 
          name="contact-form" 
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/thankyou"
        >
          <input type="hidden" name="form-name" value="contact-form" />
          <div className="form-row-full">
            <input type="text" name="name" className={styles.input} placeholder="Your Name" required/>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formCol}>
              <input type="email" name="email" className={styles.input} placeholder="Email" required/>
            </div>
            <div className={styles.formCol}>
              <select name="project" className={styles.select} required>
                <option value="project-type" name="project-type">--Project Type</option>
                <option value="one-page" name="one-page">One-Page</option>
                <option value="multi-page" name="multi-page">Multi-Page</option>
                <option value="e-commerce" name="e-commerce">E-Commerce</option>
                <option value="blog" name="blog">Blog</option>
                <option value="other" name="other">Other</option>
              </select>
            </div>
          </div>
          <div className={styles.formRowFull}>
            <textarea name="message" className={styles.textarea} placeholder="Details about your project..." required></textarea>
          </div>
          <div className={styles.formRowFull}>
            <div data-netlify-recaptcha="true"></div>  
          </div>
          <div className="btnBottom textCenter">
            <button type="submit" value="Submit" className={styles.submit}>Send Message</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactContent
