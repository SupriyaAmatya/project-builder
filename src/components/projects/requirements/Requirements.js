import React from 'react'

const Requirements = () => {
  return (
    <div className="requirement__section">
      <div className="requirement__top">
        <p className="small-text">camping planning / phase 1</p>
        <h5>Requirements</h5>
        <form>
          <div className="filter_input">
            <label htmlFor="filter">Filters</label>
            <input type="text" placeholder="Filter by name" id="filter"/>
          </div>
          <div className="risk_input">
            <label htmlFor="risk">Risk</label>
            <select name="risk" id="risk">
              <option value="all">All</option>
              <option value="all">all</option>
            </select>
          </div>
        </form>
      </div>
      
    </div>
  )
}

export default Requirements
