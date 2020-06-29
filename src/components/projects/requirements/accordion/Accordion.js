import React from 'react'
import ProgressBar from '../../../ProgressBar';
import Priority from '../../../Priority';
import { MdKeyboardArrowDown, MdMoreVert, MdInfoOutline } from 'react-icons/md'
import SecondLevel from './Chlidren';

const Accordion = (props) => {
  const { status, handleClick } = props
  const items = status.items

  const itemsList = items ? (
    items.map((item, index) => {
      return (
        <div key={item.id} style={{ background: 'white' }}>
          <div className="grid-container requirement__item" onClick={() => handleClick(item.id)}>
            <div className="title">
              <MdKeyboardArrowDown className={item.isActive ? "arrow-up" : "arrow-down"} />
              <span>{item.id}: </span>
              {item.title}
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

          <SecondLevel children={item.children} handleClick={handleClick} parentActive={item.isActive} />

        </div>
      )
    })
  ) : null
  return (
    <div className="accordion__section">
      {itemsList}
    </div>
  )
}

export default Accordion
