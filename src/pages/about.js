import * as React from "react"
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="About this site">
      <p>This site was created during gatsby conf 2021</p>
      <p>Here are some resources used during the workshop:</p>
      <ul>
        <li><a href="https://intro-workshop-gatsbyconf-2021.gatsbyjs.io/">Workshop Curriculum</a></li>
        <li><a href="http://bit.ly/3e4LCnY">Slides</a></li>
      </ul>
    </Layout>
  )
}

export default AboutPage
