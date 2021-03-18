import React from 'react'
import { Link } from 'gatsby'

import './index.scss'

export const Header = ({ title, location, rootPath }) => {
  const isRoot = location.pathname === rootPath
  return (
    isRoot && (
      <>
      <span style={{paddingLeft:13,fontSize:12}}>사회적 기업</span>
      <h1 className="home-header">
        <Link to={`/`} className="link">
          {title}
        </Link>
      </h1>
      </>
    )
  )
}
