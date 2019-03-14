import React from 'react';
import { browserHistory, Link } from 'react-router';

const MinMax = (props) => {

  return(
    <div className="grid-container">
      <div className="grid-x grid-padding-x">
        <div className="medium-6 cell">
          <label>Minimum: {props.unit}
            <input type="text" placeholder="ex: 100" onChange={props.onChange}
              id={props.id + "Min"}>
            </input>
          </label>
        </div>
        <div className="medium-6 cell">
          <label>Maximum: {props.unit}
            <input type="text" placeholder="ex: 600" onChange={props.onChange}
              id={props.id + "Max"}>
            </input>
          </label>
        </div>
      </div>
    </div>
  )
}
export default MinMax;
