import React, { Component } from 'react'
import { MdKeyboardArrowDown, MdAdd } from "react-icons/md";
import Accordion from './accordion/Accordion';

class RequirementStatus extends Component {
  state = {
    showContent: false
  }

  handleToggle = () => {
    this.setState({
      showContent: !this.state.showContent
    })
  }

  render() {
    const { status , handleClick }= this.props;
    
    return (
      <div className="requirement-status">
        <div className="stauts__bar" onClick={this.handleToggle}>
          <MdKeyboardArrowDown className={this.state.showContent ? 'arrow-up' : 'arrow-down'} />
          <p className={`status ${status.status === 'in progress' ? 'bgOrange' : (status.status === 'todo' ? 'bgGray' : 'bgGreen')}`}>
            {status.status}
          </p>
        </div>

        <div className={`status__content ${this.state.showContent ? 'showContent' : ''}`}>
          <Accordion status={status} handleClick={handleClick}/>

          <div className="add__btn">
            <MdAdd /> <p>add requirement</p>
          </div>
        </div>

      </div>
    )
  }

}

export default RequirementStatus
