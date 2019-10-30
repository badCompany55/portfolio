import React from "react"
import "../styles/footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="iconCont">
        <a href="mailto:zachirvin45@gmail.com">
          <i className="fas fa-envelope-square"></i>
        </a>
        <a href="https://github.com/badCompany55">
          <i className="fab fa-github-square"></i>
        </a>
        <a href="https://www.linkedin.com/in/zach-irvin/">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <div className="copyright text">
        © 2019 - Zachery Irvin - zachirvin.com
      </div>
    </footer>
  )
}

export default Footer
