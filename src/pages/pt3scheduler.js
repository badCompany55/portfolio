import React from "react"
import Layout from "../components/layout.js"

const Pt3Scheduler = () => {
  return (
    <Layout>
      <div className="appCont">
        <div class="intro">
          <h2>A scheduler app for the busy contractor and client</h2>
          <div>
            Simplifies the scheduling process between client and the Contractor
            to improve efficiency and satisfaction
          </div>
        </div>
        <div class="appBody">
          <p>
            A group of developers were given the task to create a application
            that would allow for scheduling of appointments between a contractor
            and client completly online. As with many things in the busy
            lifestyle that people lead, one doesn't always have time for a phone
            conversation just for setting an appointment. This app seeks to
            remedy this situation and provide an intuitive interface for both
            parties in the transaction in regards to scheduling and
            appointments.
          </p>
        </div>
        <div className="content">
          <div>
            <h2>Backend and Database</h2>
            <p>
              The backend of this project was constructed in Nodejs. It utilizes
              google oAuth for the sign up and login for easier convenience. If
              the user doesn't have a google account, or if they want to use a
              standard login method, they can opt for the typical username and
              password signup. The authentication is conducted via a JWT token
              when the user signs up and logs in using this method.
            </p>

            <p>
              For the database, the app uses PostgreSQL. The schema is set up
              with tables for Contactors, Schedules, Users, Services,
              Appointments, and Feedback allowing for quick querying of the data
              for each particular use case. For a more in depth read of the
              particulars feel free to check out the github repo for the
              project.
            </p>
          </div>
          <div>
            <h2>Front End / UI</h2>
            <p>
              The Front end is build entirely in React. The calendar / scheduler
              is built using the date-fns library. It provides helper methods
              for date objects that make creating a calendar from scratch more
              intuitive.
            </p>
            <p>
              For animation purposes, such as dropdowns for the calendar, page
              transitions, etc, the GSAP library was used as well a fair amount
              of standard css animations.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Pt3Scheduler
