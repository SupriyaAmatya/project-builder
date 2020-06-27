import React from 'react'
import logo from '../../../assets/project-logo.png'
import { MdArrowDropDown } from 'react-icons/md';
import NavElements from './NavElements';
import'./left-navigation.css'


const LeftNavigation = () => {
  return (
    <div className="left-navbar__wrapper">
      <div className="nav-head">
        <div className="project-info__container">
          <div className="project-logo">
            <img src={logo} alt="project-logo" />
          </div>
          <div className="project-infos">
            <p className="project-title">Delphi <span>Health Services</span></p>
            <MdArrowDropDown />
          </div>
        </div>

        <div className="module-selector">
          <form className="dropdown">
            <label htmlFor="module">Module:</label>
            <select name="module" id="module">
              <option value="campaign planning">Campaign Planning</option>
              <option value="campaign planning">Campaign Planning</option>
              <option value="campaign planning">Campaign Planning</option>
            </select>
          </form>
        </div>
        <div className="phase-selector">
          <form className="dropdown">
            <label htmlFor="phase">Phase:</label>
            <select name="phase" id="phase">
              <option value="phase 1">Phase 1</option>
              <option value="phase 2">Phase 2</option>
              <option value="phase 3">Phase 3</option>
            </select>
          </form>
        </div>
      </div>
      <NavElements />
    </div>
  )
}

export default LeftNavigation
