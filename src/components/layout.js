import * as React from "react"
import { Link } from 'gatsby'
import { title, siteNav, siteNavItem } from './layout.module.css'

const Layout = ( { children, pageTitle } ) => {
  return (
    <main>
      <title>{ pageTitle }</title>
      <h1 class={title}>{ pageTitle }</h1>
      <nav>
        <ul className={siteNav}>
          <li className={siteNavItem}><Link to='/'>Home</Link></li>
          <li className={siteNavItem}><Link to='/about'>About this site</Link></li>
        </ul>
      </nav>
      { children }
    </main>
  )
}

export default Layout
