import React from "react"
import { useState, useRef, useEffect } from "react"
import Layout from "../components/layout.js"
import "../styles/apps.scss"
import contScheduleGIF from "../components/gifs/contractorSetSchedule.gif"
import contScheduleIMG from "../images/contractorSetSchedule.png"
import contConfirmDenyGIF from "../components/gifs/contractorConfirmDenySched.gif"
import contConfirmDenyIMG from "../images/contractorConfirmDeny.png"
import userRequestAppointGIF from "../components/gifs/userRequestAppointment.gif"
import userRequestAppointIMG from "../images/requestAppointment.png"
import userFeedbackGIF from "../components/gifs/userFeedback.gif"
import userFeedbackIMG from "../images/userFeedback.png"
import { TweenMax } from "gsap"

const Pt3Scheduler = () => {
  const [active, setActive] = useState()
  const [show, setShow] = useState({
    firstGif: true,
    secondGif: false,
    thirdGif: false,
    fourthGif: false,
  })

  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)

  useEffect(() => {
    if (ref1) {
      TweenMax.to(ref1.current, 0, { x: -850 })
    }
  }, ref1)

  const playGif = e => {
    const target = e.target.id
    setActive({ [target]: true })
  }
  const stopGif = e => {
    const target = e.target.id
    setActive({ [target]: false })
  }

  const cycleLeft = e => {
    const id = e.target.id
    if (id === "firstGifLeft") {
      TweenMax.from(ref4.current, 1, { x: 0 })
      TweenMax.to(ref4.current, 1, { x: -850 })
    }
    if (id === "secondGifLeft") {
      TweenMax.from(ref1.current, 1, { x: 0 })
      TweenMax.to(ref1.current, 1, { x: -850 })
    }
    if (id === "thirdGifLeft") {
      TweenMax.from(ref2.current, 1, { x: 0 })
      TweenMax.to(ref2.current, 1, { x: -850 })
    }
    if (id === "fourthGifLeft") {
      TweenMax.from(ref3.current, 1, { x: 0 })
      TweenMax.to(ref3.current, 1, { x: -850 })
    }
    switch (true) {
      case show.firstGif:
        setShow({ ...show, firstGif: false, fourthGif: true })
        break
      case show.secondGif:
        setShow({ ...show, secondGif: false, firstGif: true })
        break
      case show.thirdGif:
        setShow({ ...show, thirdGif: false, secondGif: true })
        break
      case show.fourthGif:
        setShow({ ...show, fourthGif: false, thirdGif: true })
        break
      default:
        setShow({ ...show, firstGif: false, fourthGif: true })
    }
  }

  const cycleRight = e => {
    const id = e.target.id
    if (id === "firstGifRight") {
      TweenMax.from(ref2.current, 1, { x: -1650 })
      TweenMax.to(ref2.current, 1, { x: -850 })
    }
    if (id === "secondGifRight") {
      TweenMax.from(ref3.current, 1, { x: -1650 })
      TweenMax.to(ref3.current, 1, { x: -850 })
    }
    if (id === "thirdGifRight") {
      TweenMax.from(ref4.current, 1, { x: -1650 })
      TweenMax.to(ref4.current, 1, { x: -850 })
    }
    if (id === "fourthGifRight") {
      TweenMax.from(ref1.current, 1, { x: -1650 })
      TweenMax.to(ref1.current, 1, { x: -850 })
    }

    switch (true) {
      case show.firstGif:
        setShow({ ...show, firstGif: false, secondGif: true })
        break
      case show.secondGif:
        setShow({ ...show, secondGif: false, thirdGif: true })
        break
      case show.thirdGif:
        setShow({ ...show, thirdGif: false, fourthGif: true })
        break
      case show.fourthGif:
        setShow({ ...show, fourthGif: false, firstGif: true })
        break
      default:
        setShow({ ...show, firstGif: false, secondGif: true })
    }
  }

  return (
    <Layout>
      <div className="main">
        <div className="appCont">
          <div class="intro">
            <h2 className="mainHeading appHeading">
              A scheduler app for the busy contractor and client
            </h2>
            <div className="subHeading">
              Simplifies the scheduling process between client and the
              Contractor to improve efficiency and satisfaction
            </div>
          </div>
          <div class="appBody">
            <p className="text notHidden">
              We were given the task to create a application that would allow
              for scheduling of appointments between a contractor and client
              completely online. As with many things in the busy lifestyle that
              people lead, one doesn't always have time for a phone conversation
              just for setting an appointment. This app seeks to remedy this
              situation and provide an intuitive interface for both parties in
              the transaction in regards to scheduling and appointments.
            </p>
          </div>
          <div className="content">
            <div>
              <h2 className="subHeading">Backend and Database</h2>
              <p className="text">
                The backend of this project was constructed in Nodejs. It
                utilizes google oAuth for the sign up and login for easier
                convenience. If the user doesn't have a google account, or if
                they want to use a standard login method, they can opt for the
                typical username and password signup. The authentication is
                conducted via a JWT token when the user signs up and logs in
                using this method.
              </p>

              <p className="text">
                For the database, the app uses PostgreSQL. The schema is set up
                with tables for Contactors, Schedules, Users, Services,
                Appointments, and Feedback allowing for quick querying of the
                data for each particular use case. For a more in depth read of
                the particulars feel free to check out the github repo for the
                project.
              </p>
            </div>
            <div>
              <h2 className="subHeading">Front End / UI</h2>
              <p className="text">
                The Front end is build entirely in React. The calendar /
                scheduler is built using the date-fns library. It provides
                helper methods for date objects that make creating a calendar
                from scratch more intuitive.
              </p>
              <p className="text">
                For animation purposes, such as dropdowns for the calendar, page
                transitions, etc, the GSAP library was used as well a fair
                amount of standard css animations.
              </p>
            </div>
            <div>
              <h2 className="subHeading">My Contributions</h2>
              <p className="text">
                My Responsibilies on the project include the following...
                <ul>
                  <li>Plan and Implementation of project with team.</li>
                  <li>Creation of database schema.</li>
                  <li>Fabrication of backend enpoinds / connection to the DB.</li>
                  <li> Design of the client facing contactor calendar.</li>
                  <li> Implementation of functionallity in calendar including animations for a crisp user experience.</li>
                  <li> Implementation of complex state managment between customers and contactors.</li>
                </ul>
              </p>
            </div>
            <div className="repo subHeading">
              <div className="github">
                The <strong>Github</strong> repo can be found{" "}
                <a href="https://github.com/pt3-labs-contractor">Here</a>
              </div>
              <div className="website">
                The <strong>Deployed</strong> website can be found{" "}
                <a href="https://affectionate-almeida-c22cb1.netlify.com/">
                  Here
                </a>
              </div>
            </div>
            <div className="gifCont">
              <div className="gifHeadCont">
                <h2 className="subHeading gifHead">Demonstration</h2>
                <div className="listGifsCont">
                  <ul>
                    <li
                      className={
                        show.firstGif
                          ? "selected listGifs text"
                          : "listGifs text"
                      }
                    >
                      Contractor Set Schedule
                    </li>
                    <li
                      className={
                        show.secondGif
                          ? "selected listGifs text"
                          : "listGifs text"
                      }
                    >
                      Contractor Confirm / Deny Appointment
                    </li>
                    <li
                      className={
                        show.thirdGif
                          ? "selected listGifs text"
                          : "listGifs text"
                      }
                    >
                      Customer Request Appointment
                    </li>
                    <li
                      className={
                        show.fourthGif
                          ? "selected listGifs text"
                          : "listGifs text"
                      }
                    >
                      Customer Leave Review
                    </li>
                  </ul>
                </div>
              </div>
              <div
                id="firstGif"
                className={show.firstGif ? "subCont" : "subCont hidden"}
              >
                <div className="topCont">
                  <h2 className="subHeading">
                    Contractor Setting Up The Schedule
                  </h2>
                  <p className="text">
                    Contractor selects days that he/she wants to work and also
                    selects the time that they are available.
                  </p>
                </div>
                <div className="bottomCont">
                  <div className="left" onClick={cycleLeft}>
                    <i id="firstGifLeft" class="fas fa-chevron-left"></i>
                  </div>
                  <div className="imgCont" ref={ref1}>
                    <img src={contConfirmDenyIMG} className="gifs" alt="" />
                    <img
                      id="setSched"
                      className="gifs"
                      src={
                        active && active.setSched
                          ? contScheduleGIF
                          : contScheduleIMG
                      }
                      alt="calendar"
                      onMouseEnter={playGif}
                      onMouseLeave={stopGif}
                    />
                    <img className="gifs" src={userFeedbackIMG} alt="" />
                  </div>
                  <div className="right" onClick={cycleRight}>
                    <i id="firstGifRight" class="fas fa-chevron-right"></i>
                  </div>
                </div>
              </div>
              <div
                id="secondGif"
                className={show.secondGif ? "subCont" : "subCont hidden"}
              >
                <div className="topCont">
                  <h2 className="subHeading">
                    Contractor Confirm / Deny Requested Appointment
                  </h2>
                  <p className="text">
                    Contractor goes through appointments and and can either
                    confirm or deny them.
                  </p>
                </div>
                <div className="bottomCont">
                  <div className="left" onClick={cycleLeft}>
                    <i id="secondGifLeft" class="fas fa-chevron-left"></i>
                  </div>
                  <div className="imgCont" ref={ref2}>
                    <img src={userRequestAppointIMG} className="gifs" alt="" />
                    <img
                      id="confirmDenySched"
                      className="gifs"
                      src={
                        active && active.confirmDenySched
                          ? contConfirmDenyGIF
                          : contConfirmDenyIMG
                      }
                      alt="calendar"
                      onMouseEnter={playGif}
                      onMouseLeave={stopGif}
                    />
                    <img src={contScheduleIMG} className="gifs" alt="" />
                  </div>
                  <div className="right" onClick={cycleRight}>
                    <i id="secondGifRight" class="fas fa-chevron-right"></i>
                  </div>
                </div>
              </div>
              <div
                id="thirdGif"
                className={show.thirdGif ? "subCont" : "subCont hidden"}
              >
                <div className="topCont">
                  <h2 className="subHeading">
                    Potential customer requests appointments
                  </h2>
                  <p className="text">
                    Customer goes through contractors, selects one, and selects
                    availability.
                  </p>
                </div>
                <div className="bottomCont">
                  <div className="left" onClick={cycleLeft}>
                    <i id="thirdGifLeft" class="fas fa-chevron-left"></i>
                  </div>
                  <div className="imgCont" ref={ref3}>
                    <img src={userFeedbackIMG} className="gifs" alt="" />
                    <img
                      id="userRequestAppoint"
                      className="gifs"
                      src={
                        active && active.userRequestAppoint
                          ? userRequestAppointGIF
                          : userRequestAppointIMG
                      }
                      alt="calendar"
                      onMouseEnter={playGif}
                      onMouseLeave={stopGif}
                    />
                    <img src={contConfirmDenyIMG} className="gifs" />
                  </div>
                  <div className="right" onClick={cycleRight}>
                    <i id="thirdGifRight" class="fas fa-chevron-right"></i>
                  </div>
                </div>
              </div>
              <div
                id="fourthGif"
                className={show.fourthGif ? "subCont" : "subCont hidden"}
              >
                <div className="topCont">
                  <h2 className="subHeading">Customer Review</h2>
                  <p className="text">Customer leaves review of Contractor</p>
                </div>
                <div className="bottomCont">
                  <div className="left" onClick={cycleLeft}>
                    <i id="fourthGifLeft" class="fas fa-chevron-left"></i>
                  </div>
                  <div className="imgCont" ref={ref4}>
                    <img className="gifs" src={contScheduleIMG} alt="" />
                    <img
                      id="userFeedback"
                      className="gifs"
                      src={
                        active && active.userFeedback
                          ? userFeedbackGIF
                          : userFeedbackIMG
                      }
                      alt="calendar"
                      onMouseEnter={playGif}
                      onMouseLeave={stopGif}
                    />
                    <img className="gifs" src={userRequestAppointIMG} alt="" />
                  </div>
                  <div className="right" onClick={cycleRight}>
                    <i id="fourthGifRight" class="fas fa-chevron-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Pt3Scheduler
