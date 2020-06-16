import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const SleepTrackInitialImg = () => {
  const data = useStaticQuery(graphql`
    query {
      noteTakingImg: file(relativePath: { eq: "starterImg.png" }) {
        childImageSharp {
          fixed(width: 320, height: 320) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return <Link to="/sleepTracker"><Img fixed={data.noteTakingImg.childImageSharp.fixed} /></Link>
}

export default SleepTrackInitialImg