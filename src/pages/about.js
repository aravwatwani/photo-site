import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            About me.
          </h2>
          <figure className="kg-card kg-image-card kg-width">
            <Img
              fluid={data.about.childImageSharp.fluid}
              className="kg-image"
            />
          </figure>
          <p>
            Hello! I'm Arav Watwani—a first-year Computer Science student at the
            University of California, Berkeley, and an aspiring software
            engineer and product designer. My interests lie in technology,
            fashion, design, and teaching.
          </p>
          <p>
            As a UC Berkeley student, I am currently studying the structure and
            interpretation of computer programs, along with system and circuit
            design. Furthermore, I also work as an undergraduate research
            assistant in the Haas School of Business, implementing computational
            linguistics tools such as natural language processing (specifically
            latent semantic analysis) to analyze large quantities of text, and
            to create measures of similarity between corporate regulation
            documents.
          </p>
          <p>
            Aside from being a full-time student, I enjoy playing, sharing, and
            finding new music.
          </p>
          <p>
            Contact me at{" "}
            <a href="mailto:arav@berkeley.edu">arav@berkeley.edu</a>.
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    about: file(relativePath: { eq: "about2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
