import React from "react"
import "../styles/footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="iconCont">
        <i class="fas fa-envelope-square"></i>
        <i class="fab fa-github-square"></i>
        <i class="fab fa-linkedin"></i>
      </div>
      <div className="copyright text">
        © 2019 - Zachery Irvin - zachirvin.com
      </div>
    </footer>
  )
}

export default Footer
