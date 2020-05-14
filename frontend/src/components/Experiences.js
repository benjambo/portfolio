import React from 'react'

export const Experiences = (props) => {
  return (
    <div className="exp-grid">
      <div className="exp-left">
        <p>
          {props.startYear} - {props.endYear}
        </p>
      </div>
      <div className="exp-right">
        <h5 style={{ marginTop: '0px', fontFamily: 'Montserrat' }}>{props.place}</h5>
        <p>{props.description}</p>
      </div>
    </div>
  )
}
