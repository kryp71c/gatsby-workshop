import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Gatsby Conf 2021 Workshop">
        <StaticImage src="../images/waves.jpg" alt="watter rippling on the surface"/>
        <p>Hello. This site was created by a human during the Gatsby Conf 2021.</p>
        <p>Pretty soon all of this will be done by AI instead.</p>
    </Layout>
  )
}

export default IndexPage
