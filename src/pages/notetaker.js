import React from "react"
import Layout from "../components/layout.js"
import "../styles/apps.scss"

const NoteTaker = () => {
  return (
    <Layout>
      <div className="main">
        <div className="appCont">
          <div className="intro">
            <h2 className="mainHeading">Note Taking App</h2>
            <div className="subHeading">
              A implementation of reminders and notes in a web app
            </div>
          </div>
          <div className="appBody">
            <p className="text notHidden">
              Keeping a todo list and reminders is a valid way to stay on track
              with the goals and tasks that need to be completed during the day.
              This app offers a way to do this and is accessible anywhere the
              one has an internet connection.
            </p>
          </div>
          <div className="content">
            <div>
              <h2 className="subHeading">Front End / UI</h2>
              <p className="text">
                The Front end is build out using react. The user can sort notes,
                search notes, and drag and drop notes into a different order.
                The app also integrates a word processor for formatting
                capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NoteTaker
