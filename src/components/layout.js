import * as React from "react"
import { Link } from 'gatsby'
import { title, siteNav, siteNavItem, browTitle } from './layout.module.css'
import { useStaticQuery, graphql } from 'gatsby'

const Layout = ( { children, pageTitle } ) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <main>
      <title>{ pageTitle }</title>
      <p className={browTitle}>{ data.site.siteMetadata.title }</p>
      <h1 className={title}>{ pageTitle }</h1>
      <nav>
        <ul className={siteNav}>
          <li className={siteNavItem}><Link to='/'>Home</Link></li>
          <li className={siteNavItem}><Link to='/about'>About this site</Link></li>
          <li className={siteNavItem}><Link to="/blog">Blog</Link></li>
        </ul>
      </nav>
      { children }
    </main>
  )
}

export default Layout
