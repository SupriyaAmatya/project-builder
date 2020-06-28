import React, { Component } from 'react'
import RequirementStatus from './RequirementStatus'

class MainContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inProgress: {
        status: 'in progress',
        items: [
          {
            id: "CP-06",
            title: "Presentation should be generated from existing data",
            progress: 50,
            risk: "High",
            priority: 2,
            time: 7,
            component: "generate document",
            isActive: false,
            children: [
              {
                id: "CP-06.1",
                title: "Generate Jira Issues",
                progress: 50,
                risk: "High",
                priority: 2,
                time: 7,
                component: '',
                isActive: false,
                children:[]
              },
              {
                id: "CP-06.2",
                title: "Generate PPT",
                progress: 50,
                risk: "High",
                priority: 2,
                time: 7,
                component: '',
                isActive: false,
                children:[]
              }
            ]
          },
          {
            id: "CP-07",
            title: "Authentication Module",
            progress: 50,
            risk: "Low",
            priority: 3,
            time: 7,
            component: "authentication",
            isActive: false,
            children: []
          },
          {
            id: "CP-08",
            title: "Data Structure",
            progress: 50,
            risk: "Medium",
            priority: 3,
            time: 7,
            component: "data structure",
            isActive: false,
            children: []
          }
        ]
      },

      todo: {
        status: 'todo',
        items:[
          {
            id: "CP-09",
            title: "User should be able to see project status at a glance",
            progress: 0,
            risk: "Low",
            priority: 3,
            time: 7,
            component: "authentication",
            isActive: false,
            children: []
          },
          {
            id: "CP-10",
            title: "User should be able to delete the project",
            progress: 0,
            risk: "Medium",
            priority: 3,
            time: 7,
            component: "data structure",
            isActive: false,
            children: []
          }
        ]
      },

      done: { status: 'done',items:[] }  
    }
  }
  render() {
    return (
      <div className="requirement-main__container">
        <div className="grid-container table-heading">
          <div />
          <div>progress</div>
          <div>risk</div>
          <div>priority</div>
          <div>estimated time</div>
          <div>components</div>
          <div />
        </div>

        <RequirementStatus status={this.state.inProgress} />
        <RequirementStatus status={this.state.todo} />
        <RequirementStatus status={this.state.done} />
      </div>
    )
  }

}

export default MainContainer
