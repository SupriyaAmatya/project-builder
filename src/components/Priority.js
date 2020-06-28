import React, { Component } from "react";
import styled from "styled-components";

const PriorityContainer = styled.div`
  width: 23px;
  /* margin-left: 5px; */
  margin: 0 auto;
`;

const Bar = styled.div`
&{
  width: 100%;
  height: 4px;
  margin-bottom: 3px;
  /* background-color: ${props =>
    props.priority === 1
      ? "#DE350B"
      : props.priority === 2
      ? "#FFAB00"
      : props.priority === 3
      ? "#36B37E"
      : "#e0e0e0"}; */
  background-color: #e0e0e0;
  border-radius: 30px;
}
&:nth-child(1){
  background-color: ${props => (props.priority === 3 ? "#DE350B" : "#e0e0e0")};
}
&:nth-child(2){
  background-color: ${props => (props.priority === 2 ? "#FFAB00" : "#e0e0e0")};
}
&:nth-child(3){
  background-color: ${props => (props.priority === 1 ? "#36B37E" : "#e0e0e0")};
}
 
`;

export default class Priority extends Component {
  render() {
    return (
      <PriorityContainer>
        <Bar priority={this.props.priority} />
        <Bar priority={this.props.priority} />
        <Bar priority={this.props.priority} />
      </PriorityContainer>
    );
  }
}
