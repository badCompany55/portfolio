import React from "react"
import { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Pt3SchedulerImg from "../components/imgs/pt3image.js"
import SleepTrackerImg from "../components/imgs/sleepimage.js"
import NoteTakingImg from "../components/imgs/noteimage.js"
import "../styles/indexpage.scss"
import SEO from "../components/seo"

const IndexPage = () => {
  const [content, setContent] = useState({
    pt3Read: false,
    sleepRead: false,
    notesRead: false,
  })
  const showContent = e => {
    const clickedCont = e.target.id
    console.log(content[clickedCont])
    if (content[clickedCont] === false) {
      setContent({ [clickedCont]: true })
      console.log(content)
    } else {
      setContent({ [clickedCont]: false })
    }
  }
  return (
    <Layout>
      <SEO title="Home" />
      <div className="main">
        <div className="mainintro">
          <h1 className="mainHeading">Zachery Irvin</h1>
          <div className="subHeading">Full Stack Web Developer</div>
          <p className="text">
            I am focused on creation and inovation through the use of concise
            programing. I love making amazing apps that provide a fluid and
            productive user experience.
          </p>
        </div>
        <div class="mainContentCont">
          <div className="appCont">
            <div class="intro">
              <h2 className="mainHeading headLink">
                <Link to="/pt3scheduler">
                  A scheduler app for the busy contractor and client
                </Link>
              </h2>
              <div className="subHeading">
                Simplifies the scheduling process between client and the
                Contractor to improve efficiency and satisfaction
              </div>
            </div>
            <div class="appBody">
              <div>
                <p
                  className={
                    content.pt3Read === true
                      ? "text notHidden"
                      : "text indexHidden"
                  }
                >
                  A group of developers were given the task to create a
                  application that would allow for scheduling of appointments
                  between a contractor and client completly online. As with many
                  things in the busy lifestyle that people lead, one doesn't
                  always have time for a phone conversation just for setting an
                  appointment. This app seeks to remedy this situation and
                  provide an intuitive interface for both parties in the
                  transaction in regards to scheduling and appointments.
                </p>
                <p id="pt3Read" className="dots text" onClick={showContent}>
                  ... Read More
                </p>
              </div>
              <div className="link">
                <Link to="/pt3scheduler">
                  <Pt3SchedulerImg />
                </Link>
              </div>
            </div>
          </div>
          <div className="appCont">
            <div className="intro">
              <h2 className="mainHeading headLink">
                <Link to="/sleeptracker">Sleep Tracking App</Link>
              </h2>
              <div className="subHeading">
                Provides insights into ones sleep patterns and helps analyze the
                optimal sleep duration per individual
              </div>
            </div>
            <div className="appBody">
              <div>
                <p
                  className={
                    content.sleepRead === true
                      ? "text notHidden"
                      : "text indexHidden"
                  }
                >
                  Sleep is an essencial part of everyones life. However due to
                  the fast paced lifestyle, getting the right amount of sleep,
                  let alone knowing the right amount that one needs in order to
                  function at ones best ability, is a feat hard to come by. This
                  aims to provide insight into ones sleep patters and give the
                  optimal amount of sleep time per user, based on the
                  information that user inputs.
                </p>
                <p id="sleepRead" className="dots text" onClick={showContent}>
                  ... Read More
                </p>
              </div>
              <div className="link">
                <Link to="/sleeptracker">
                  <SleepTrackerImg />
                </Link>
              </div>
            </div>
          </div>
          <div className="appCont">
            <div className="intro">
              <h2 className="mainHeading headLink">
                <Link to="/notetaker">Note Taking App</Link>
              </h2>
              <div className="subHeading">
                A implementation of reminders and notes in a web app
              </div>
            </div>
            <div className="appBody">
              <div>
                <p
                  className={
                    content.notesRead === true
                      ? "text notHidden"
                      : "text indexHidden"
                  }
                >
                  Keeping a todo list and reminders is a valid way to stay on
                  track with the goals and tasks that need to be completed
                  during the day. This app offers a way to do this and is
                  accessible anywhere the one has an internet connection.
                </p>
              </div>
              <div className="link">
                <Link to="/notetaker">
                  <NoteTakingImg />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
