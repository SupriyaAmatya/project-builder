import React, { Component } from "react";
import styled from "styled-components";

const ProgressBarContainer = styled.div`
  width: 60px;
  margin-top: 6px;
  position: relative;
`;

const Track = styled.div`
  width: 100%;
  height: 6px;
  background: #eeeeee;
  border-radius: 50px;
  margin-left: 6px;
`;
const Thumb = styled.div`
  & {
    width: ${props => props.percentage}%;
    height: 100%;
    background: ${props => (props.percentage === 100 ? "#66BB6A" : "#eaa800")};
    border-radius: 50px;
  }
  &:before {
    content: '${props => props.percentage}%';
    color: ${props => (props.percentage === 100 ? "#66BB6A" : ( props.percentage === 50 ? "#eaa800" : " #9E9E9E"))};
    position: relative;
    top:-3px;
    left:-30px;
    font-size:12px;
    line-height:14px;
    text-align: center;
  }
`;

export default class ProgressBar extends Component {
  clamp = (min, value, max) => {
    return Math.min(Math.max(min, value), max);
  };
  render() {
    return (
      <ProgressBarContainer>
        <Track>
          <Thumb percentage={this.clamp(0, this.props.percentage, 100)} />
        </Track>
      </ProgressBarContainer>
    );
  }
}
