import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SleepTrackInitialImg = () => {
  const data = useStaticQuery(graphql`
    query {
      noteTakingImg: file(relativePath: { eq: "starterImg.png" }) {
        childImageSharp {
          fixed(width: 300, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return <Img fixed={data.noteTakingImg.childImageSharp.fixed} />
}

export default SleepTrackInitialImg
