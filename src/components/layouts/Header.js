import React from 'react'
import logo from '../../assets/app-logo.png';
import userImage from '../../assets/user-image.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="main-header__wrapper">
      <div className="top-navbar">
        <div className="logo__wrapper">
          <img src={logo} alt="Project-Builder" />
          <h6 className="app-name">Project Builder</h6>
        </div>
        <nav className="navigation">
          <ul className="nav__links">
            <li><NavLink exact to="/projects" activeClassName="is-active">Projects</NavLink></li>
            <li><NavLink exact to="/users" activeClassName="is-active">Users</NavLink></li>
          </ul>
        </nav>
        <div className="user-profile">
          <img src={userImage} alt="user"/>
          <span className="user-name">John Smith</span>
        </div>
      </div>
    </header>
  )
}

export default Header
