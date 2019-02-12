import React from 'react';
import { browserHistory, Link } from 'react-router';

const MicroTableRow = (props) => {

  return(
    <tr>
      <td>{props.label}</td>
      <td>{(props.total).toFixed(1)} {props.unit}</td>
      <td>{props.daily}</td>
    </tr>
  )
}
export default MicroTableRow;
