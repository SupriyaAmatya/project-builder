import React from 'react'
import ProgressBar from '../../../ProgressBar';
import Priority from '../../../Priority';
import { MdKeyboardArrowDown, MdMoreVert, MdInfoOutline } from 'react-icons/md'

const Children = (props) => {
  const { children, handleClick, parentActive } = props

  const childrenItemsList = children.length ? (
    children.map(item => {
      return (
        <div key={item.id}>
          <div className="grid-container children" key={item.id} onClick={() => handleClick(item.id)}>
            <div className="title">
              {item.children.length > 0 ? <MdKeyboardArrowDown className={item.isActive ? "arrow-up" : "arrow-down"} /> : null}
              <span>{item.id}: </span>
              {item.title}
              {item.progress === 100 ? <span className="completed"> Done</span> : <span className="not-completed"> In progress</span>}
            </div>
            <div className="progress"><ProgressBar percentage={item.progress} /> </div>
            <div className={`risk ${item.risk === 'High' ? 'redColor' :
              (item.risk === 'Medium' ? 'yellowColor' :
                (item.risk === 'Low' ? 'greenColor' : ''))}`}
            >
              {item.risk}
            </div>
            <div className="priority"><Priority priority={item.priority} /></div>
            <div className="time">
              <p className={item.time >= 5 ? 'bgGray' : ''}>
                {item.time >= 5 ? <MdInfoOutline /> : null}
                {item.time}<span>hrs</span>
              </p>
            </div>
            <div className="component"><p>{item.component}</p></div>
            <div className="more"><MdMoreVert /> </div>
          </div>
          <div className="next-children">
            <Children children={item.children} handleClick={handleClick} parentActive={item.isActive} />
          </div>
        </div>
      )
    })
  ) : null
  return (
    <div className={`children__container ${parentActive ? 'showContent' : ''}`}>
      {childrenItemsList}
    </div>
  )
}

export default Children

