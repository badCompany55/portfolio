import React from "react"
import Layout from "../components/layout.js"
import "../styles/about.scss"

const AboutMe = () => {
  return (
    <Layout>
      <div className="aboutCont">
        <div className="aboutPar">
          <h2 className="aboutHead mainHeading">About Me</h2>

          <p className="about text">
            Building is my passion. I enjoy taking a problem and finding a
            solution that not only solves the problem, but expands the way that
            I break down and approach the challenge at hand.
          </p>
          <p className="about text">
            The goal of everything that I make is to for it to be{" "}
            <strong>intuitive, provide a fluid user interface, </strong> and be{" "}
            <strong> pleasing to the eye.</strong>
          </p>
        </div>
        <div className="skillsCont">
          <h2 className="skills mainHeading"> Skills </h2>
          <ul>
            <li>
              <i class="fab fa-react"></i>
            </li>
            <li>
              <i class="fab fa-node"></i>
            </li>
            <li>
              <i class="fab fa-js-square"></i>
            </li>
            <li>
              <i class="fab fa-html5"></i>
            </li>
            <li>
              <i class="fab fa-css3-alt"></i>
            </li>
            <li>
              <i class="fab fa-sass"></i>
            </li>
            <li>
              <i class="fab fa-python"></i>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default AboutMe
