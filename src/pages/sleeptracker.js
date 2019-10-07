import React from "react"
import Layout from "../components/layout.js"
import "../styles/apps.scss"

const SleepTracker = () => {
  return (
    <Layout>
      <div className="main">
        <div className="appCont">
          <div class="intro">
            <h2 className="mainHeading">Sleep Tracking App</h2>
            <div className="subHeading">
              Provides insights into ones sleep patterns and helps analyze the
              optimal sleep duration per individual
            </div>
          </div>
          <div class="appBody">
            <p className="text">
              Sleep is an essencial part of everyones life. However due to the
              fast paced lifestyle, getting the right amount of sleep, let alone
              knowing the right amount that one needs in order to function at
              ones best ability, is a feat hard to come by. This aims to provide
              insight into ones sleep patters and give the optimal amount of
              sleep time per user, based on the information that user inputs.
            </p>
          </div>
          <div className="content">
            <div>
              <h2 className="subHeading">Backend and Database</h2>
              <p className="text">
                The backend of this project was constructed in Nodejs. For Sign
                up and Login, the project utilizes JWT tokens.
              </p>

              <p className="text">
                For data storage, the app utilizes postgreSQL. The schema if
                straitforward with a model for Users, and a model for the sleep
                data itself. This project makes use of the query builder Knex.js
                for building the database as well as all interaction with the
                database itself.
              </p>
            </div>
            <div>
              <h2 className="subHeading">Front End / UI</h2>
              <p className="text">
                The Front End is build in React. For interaction, serveral
                libraries were integrated into the app. They include the
                following:
                <ul>
                  <li>bootstrap</li>
                  <li>react-datetime-picker</li>
                  <li>recharts</li>
                  <li>styled-components</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SleepTracker
