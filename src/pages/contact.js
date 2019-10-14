import React from "react"
import Layout from "../components/layout.js"
import "../styles/contact.scss"

const ContactForm = () => {
  return (
    <Layout>
      <div className="contactPageCont">
        <div className="contactPageSplit">
          <a href="mailto:zachirvin45@gmail.com">
            <i className="fas fa-envelope-square"></i>
          </a>
          <a href="https://github.com/badCompany55">
            <i className="fab fa-github-square"></i>
          </a>
          <a href="https://www.linkedin.com/in/zach-irvin-2373a1150/">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className="split"></div>
        <div class="formCont">
          <form
            action="/formSuccess"
            name="contact"
            method="post"
            data-netlify-honeypot="bot-field"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="infoCont">
              <input type="text" placeholder="Name" />
            </div>
            <div className="infoCont">
              <input type="email" placeholder="Email" />
            </div>
            <div className="infoCont">
              <textarea
                id="message"
                name="message"
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default ContactForm
