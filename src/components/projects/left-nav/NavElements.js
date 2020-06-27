import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdDashboard } from 'react-icons/md'
import { FaRegListAlt } from 'react-icons/fa'
import { RiFileList2Line } from 'react-icons/ri'
import { MdWeb } from 'react-icons/md'
import { MdFlag } from 'react-icons/md'

const NavElements = () => {
  return (
    <div className="nav-elements">
      <div className="top">
        <ul className="left-nav__items">
          <li><NavLink exact to="/projects" ><MdDashboard />Dashboard</NavLink></li>
          <li><NavLink exact to="/projects" activeClassName="is-active"><FaRegListAlt />Requirements</NavLink></li>
          <li><NavLink exact to="/projects" ><RiFileList2Line />Project Information</NavLink></li>
        </ul>
      </div>
      <div className="bottom">
        <ul className="left-nav__items">
          <li><NavLink exact to="/projects" ><MdFlag />Phases</NavLink></li>
          <li><NavLink exact to="/projects" ><MdWeb />Modules</NavLink></li>
        </ul>
      </div>
    </div>
  )
}

export default NavElements
