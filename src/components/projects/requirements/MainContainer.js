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
            priority: 3,
            time: 7,
            component: "generate document",
            isActive: false,
            children: [
              {
                id: "CP-06.1",
                title: "Generate Jira Issues",
                progress: 100,
                risk: "Low",
                priority: 2,
                time: 2,
                component: '',
                isActive: false,
                children: [
                  {
                    id: "CP-06.1.1",
                    title: "Generate Jira Issues",
                    progress: 100,
                    risk: "Low",
                    priority: 2,
                    time: 2,
                    component: '',
                    isActive: false,
                    children: []
                  },
                  {
                    id: "CP-06.1.2",
                    title: "Generate Jira Issues",
                    progress: 100,
                    risk: "Low",
                    priority: 1,
                    time: 4,
                    component: '',
                    isActive: false,
                    children: []
                  }
                ]
              },
              {
                id: "CP-06.2",
                title: "Generate PPT",
                progress: 50,
                risk: "High",
                priority: 1,
                time: 5,
                component: '',
                isActive: false,
                children: [
                  {
                    id: "CP-06.2.1",
                    title: "Generate Jira Issues",
                    progress: 100,
                    risk: "Low",
                    priority: 2,
                    time: 2,
                    component: '',
                    isActive: false,
                    children: []
                  },
                  {
                    id: "CP-06.2.2",
                    title: "Data Structure for template ",
                    progress: 50,
                    risk: "High",
                    priority: 1,
                    time: 3,
                    component: '',
                    isActive: false,
                    children: []
                  }
                ]
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
            children: [
              {
                id: "CP-07.1",
                title: "Generate Jira Issues",
                progress: 50,
                risk: "Low",
                priority: 3,
                time: 7,
                component: "",
                isActive: false,
                children: []
              }
            ]
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
            children: [
                {
                  id: "CP-08.1",
                  title: "Generate Jira Issues",
                  progress: 50,
                  risk: "Low",
                  priority: 3,
                  time: 7,
                  component: "",
                  isActive: false,
                  children: []
                }
            ]
          }
        ]
      },

      todo: {
        status: 'todo',
        items: [
          {
            id: "CP-09",
            title: "User should be able to see project status at a glance",
            progress: 0,
            risk: "Low",
            priority: 3,
            time: 7,
            component: "authentication",
            isActive: false,
            children: [
              {
                id: "CP-09.1",
                title: "Generate Jira Issues",
                progress: 0,
                risk: "Low",
                priority: 3,
                time: 7,
                component: "",
                isActive: false,
                children: []
              },
              {
                id: "CP-09.2",
                title: "Generate PTT",
                progress: 0,
                risk: "Low",
                priority: 3,
                time: 7,
                component: "",
                isActive: false,
                children: []
              }
            ]
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
            children: [
              {
                id: "CP-10.1",
                title: "Generate Jira Issues",
                progress: 0,
                risk: "Low",
                priority: 3,
                time: 7,
                component: "",
                isActive: false,
                children: []
              },
              {
                id: "CP-10.2",
                title: "Generate PTT",
                progress: 0,
                risk: "Low",
                priority: 3,
                time: 7,
                component: "",
                isActive: false,
                children: []
              }
            ]
          }
        ]
      },

      done: { status: 'done', items: [] }
    }
  }

  handleClick = id => {
    let result = this.toggleChildren(0, id, this.state.inProgress.items);
    let result2 = this.toggleChildren(0, id, this.state.todo.items);
    this.setState({
      inProgress: {
        status: 'in progress',
        items: result
      },
      todo: {
        status: 'todo',
        items: result2
      }
    });
    console.log(this.state.list);
  };

  toggleChildren = (i, data_id, arr) => {
    if (i <= arr.length - 1) {
      if (arr[i].id === data_id) {
        arr[i].isActive = !arr[i].isActive;
      } 
      let newArr = this.toggleChildren(0, data_id, arr[i].children);
      arr[i].children = newArr;
      arr = this.toggleChildren(++i, data_id, arr);
    }
    return arr;
  };


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

        <RequirementStatus status={this.state.inProgress} handleClick={this.handleClick} />
        <RequirementStatus status={this.state.todo} handleClick={this.handleClick} />
        <RequirementStatus status={this.state.done} handleClick={this.handleClick} />
      </div>
    )
  }

}

export default MainContainer
