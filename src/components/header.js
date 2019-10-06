import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/header.scss"

const Header = () => {
  return (
    <header>
      <div className="headerContainer">
        <div className="nav mainHeading">
          <Link to="/">Zach Irvin</Link>
        </div>
        <div className="nav">
          <div className="subNav iconSubNav">
            <i className="fas fa-envelope-square"></i>
            <i className="fab fa-github-square"></i>
            <i className="fab fa-linkedin"></i>
          </div>
          <div className="subNav">
            <div className="mainHeading">
              <Link to="/resume">Resume</Link>
            </div>
            <div className="mainHeading">
              <Link to="/about">About Me</Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div */}
      {/*   style={{ */}
      {/*     margin: `0 auto`, */}
      {/*     maxWidth: 960, */}
      {/*     padding: `1.45rem 1.0875rem`, */}
      {/*   }} */}
      {/* > */}
      {/*   <h1 style={{ margin: 0 }}> */}
      {/*     <Link */}
      {/*       to="/" */}
      {/*       style={{ */}
      {/*         color: `white`, */}
      {/*         textDecoration: `none`, */}
      {/*       }} */}
      {/*     > */}
      {/*       {siteTitle} */}
      {/*     </Link> */}
      {/*   </h1> */}
      {/* </div> */}
    </header>
  )
}

// style={{
// 	background: `rebeccapurple`,
// 		marginBottom: `1.45rem`,
// }}
export default Header
