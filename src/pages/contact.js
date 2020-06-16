import React from 'react'
import Layout from '../components/layout.js'

const ContactForm = () => {
	return (
		<Layout>
			<div class="formCont">
				<div class="contactButtons">
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
				<form
					name="contact"
					method="post"
					data-netlify-honeypot="bot-field"
					data-netlify="true"
				>
					<input type="hidden" name="form-name" value="contact" />
					<div className="infoCont">
						<input type="text" name="name" required placeholder="Name" />
					</div>
					<div className="infoCont">
						<input type="email" name="email" required placeholder="Email" />
					</div>
					<div className="infoCont">
						<textarea
							id="message"
							name="message"
							rows="10"
							required
							placeholder="Message"
						></textarea>
					</div>
				<button type="submit">Send</button>
				</form>
			</div>
		</Layout>
	)
}

export default ContactForm;