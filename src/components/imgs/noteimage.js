import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const NoteTakingImg = () => {
  const data = useStaticQuery(graphql`
    query {
      noteTakingImg: file(relativePath: { eq: "noteTakingApp.png" }) {
        childImageSharp {
          fixed(width: 195, height: 195) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return <Img fixed={data.noteTakingImg.childImageSharp.fixed} />
}

export default NoteTakingImg
