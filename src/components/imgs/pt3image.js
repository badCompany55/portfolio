import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Pt3SchedulerImg = () => {
  const data = useStaticQuery(graphql`
    query {
      pt3Image: file(relativePath: { eq: "pt3scheduler.png" }) {
        childImageSharp {
          fixed(width: 250, height: 220) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img classNameName="previewImage" fixed={data.pt3Image.childImageSharp.fixed}/>
}

export default Pt3SchedulerImg
