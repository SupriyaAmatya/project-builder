import React from 'react'
import MainContainer from './MainContainer'

const Requirements = () => {
  return (
    <div className="requirement__section">
      <div className="requirement__top">
        <p className="small-text">camping planning / phase 1</p>
        <div className="title-bar">
          <h5>Requirements</h5>
          <button>create requirement</button>
        </div>
        <form>
          <div className="filter_input">
            <label htmlFor="filter">Filters</label>
            <input type="text" placeholder="Filter by name" id="filter" />
          </div>
          <div className="risk_input">
            <label htmlFor="risk">Risk</label>
            <select name="risk" id="risk">
              <option value="all">All</option>
              <option value="all">High</option>
              <option value="all">Low</option>
              <option value="all">Medium</option>
            </select>
          </div>
        </form>
      </div>

      <MainContainer />

    </div>
  )
}

export default Requirements
