import * as React from "react"
import { Link } from 'gatsby'

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Workshop Site</title>
      <h1>Gatsby Workshop</h1>
      <p>Hola</p>
      <Link to="/about">About this site</Link>
    </main>
  )
}

export default IndexPage
