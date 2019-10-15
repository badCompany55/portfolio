import React from "react"
import { useState, useRef } from "react"
import Layout from "../components/layout.js"
import "../styles/apps.scss"
import addNoteGIF from "../components/gifs/addNote.gif"
import addNoteIMG from "../images/addNote.png"
import editAndDeleteGIF from "../components/gifs/editAndDelete.gif"
import editAndDeleteIMG from "../images/editAndDelete.png"
import sortAndSearchGIF from "../components/gifs/sortAndSearch.gif"
import sortAndSearchIMG from "../images/sortAndSearch.png"
import { TweenMax } from "gsap"

const NoteTaker = () => {
  const [active, setActive] = useState()
  const [show, setShow] = useState({
    firstGif: true,
    secondGif: false,
    thirdGif: false,
  })

  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)

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
      TweenMax.from(ref3.current, 1, { x: 0 })
      TweenMax.to(ref3.current, 1, { x: -850 })
    }
    if (id === "secondGifLeft") {
      console.log("called")
      TweenMax.from(ref1.current, 1, { x: 0 })
      TweenMax.to(ref1.current, 1, { x: -850 })
    }
    if (id === "thirdGifLeft") {
      TweenMax.from(ref2.current, 1, { x: 0 })
      TweenMax.to(ref2.current, 1, { x: -850 })
    }
    switch (true) {
      case show.firstGif:
        setShow({ ...show, firstGif: false, thirdGif: true })
        break
      case show.secondGif:
        setShow({ ...show, secondGif: false, firstGif: true })
        break
      case show.thirdGif:
        setShow({ ...show, thirdGif: false, secondGif: true })
        break
      default:
        setShow({ ...show, secondGif: false, firstGif: true })
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
        setShow({ ...show, thirdGif: false, firstGif: true })
        break
      default:
        setShow({ ...show, firstGif: false, secondGif: true })
    }
  }
  return (
    <Layout>
      <div className="main">
        <div className="appCont">
          <div className="intro">
            <h2 className="mainHeading appHeading">Note Taking App</h2>
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
                The Front end is build out using react. The app makes use of the
                react-beautiful-dnd libraries for the drop and drop feature, as
                well as gsap for basic animations. The user can:
                <ul>
                  <li> Create new notes </li>
                  <li> Edit existing notes </li>
                  <li> Search through the notes by title </li>
                  <li>
                    {" "}
                    Add basic text formating through the use of the built in
                    editor{" "}
                  </li>
                </ul>
              </p>
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
                      Sort and Search Notes
                    </li>
                    <li
                      className={
                        show.secondGif
                          ? "selected listGifs text"
                          : "listGifs text"
                      }
                    >
                      Create New Note
                    </li>
                    <li
                      className={
                        show.thirdGif
                          ? "selected listGifs text"
                          : "listGifs text"
                      }
                    >
                      Edit and Delete Note
                    </li>
                  </ul>
                </div>
              </div>
              <div
                id="firstGif"
                className={show.firstGif ? "subCont" : "subCont hidden"}
              >
                <div className="topCont">
                  <h2 className="subHeading">Search and Order Notes</h2>
                  <p className="text">
                    The user can search through notes by title. The app supports
                    sorting ascending, descending by title. User can custom sort
                    notes using click and drag.
                  </p>
                </div>
                <div className="bottomCont">
                  <div className="left" onClick={cycleLeft}>
                    <i id="firstGifLeft" class="fas fa-chevron-left"></i>
                  </div>
                  <div className="imgCont" ref={ref1}>
                    <img className="gifs" src={addNoteIMG} alt="" />
                    <img
                      id="setSched"
                      className="gifs"
                      src={
                        active && active.setSched
                          ? sortAndSearchGIF
                          : sortAndSearchIMG
                      }
                      alt="calendar"
                      onMouseEnter={playGif}
                      onMouseLeave={stopGif}
                    />
                    <img className="gifs" src={editAndDeleteIMG} alt="" />
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
                  <h2 className="subHeading">User Add New Note</h2>
                  <p className="text">
                    The user can add new notes to the list. The note is appended
                    to the bottom of the list.
                  </p>
                </div>
                <div className="bottomCont">
                  <div className="left" onClick={cycleLeft}>
                    <i id="secondGifLeft" class="fas fa-chevron-left"></i>
                  </div>
                  <div className="imgCont" ref={ref2}>
                    <img className="gifs" src={editAndDeleteIMG} alt="" />
                    <img
                      id="confirmDenySched"
                      className="gifs"
                      src={
                        active && active.confirmDenySched
                          ? addNoteGIF
                          : addNoteIMG
                      }
                      alt="calendar"
                      onMouseEnter={playGif}
                      onMouseLeave={stopGif}
                    />
                    <img className="gifs" src={sortAndSearchIMG} alt="" />
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
                  <h2 className="subHeading">User Edit / Delete Note</h2>
                  <p className="text">
                    The user can edit existing notes using the built in editor
                    which supports basic text manipulation. User can also delete
                    an existing note.
                  </p>
                </div>
                <div className="bottomCont">
                  <div className="left" onClick={cycleLeft}>
                    <i id="thirdGifLeft" class="fas fa-chevron-left"></i>
                  </div>
                  <div className="imgCont" ref={ref3}>
                    <img className="gifs" src={sortAndSearchIMG} alt="" />
                    <img
                      id="userRequestAppoint"
                      className="gifs"
                      src={
                        active && active.userRequestAppoint
                          ? editAndDeleteGIF
                          : editAndDeleteIMG
                      }
                      alt="calendar"
                      onMouseEnter={playGif}
                      onMouseLeave={stopGif}
                    />
                    <img className="gifs" src={addNoteIMG} alt="" />
                  </div>
                  <div className="right" onClick={cycleRight}>
                    <i id="thirdGifRight" class="fas fa-chevron-right"></i>
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

export default NoteTaker
