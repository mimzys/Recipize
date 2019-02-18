import React from 'react';
import { browserHistory, Link } from 'react-router';
import MicroTableRow from './MicroTableRow'

const MicroTable = (props) => {

  let tableRows = props.digest.map((ntr) =>{
    let ntrSub = []
    if (ntr.sub) {
      ntrSub = ntr.sub.map((subNtr) => {
        let dv = "---"
        if (subNtr.hasRDI) {
          dv = String((subNtr.daily).toFixed(1)) + "%"
        }
        return(
          <MicroTableRow
            key={subNtr.label}
            label={subNtr.label}
            unit={subNtr.unit}
            total={subNtr.total}
            daily={dv}
          />
        )
      })
    }
    let dv = "---"
    if (ntr.hasRDI) {
      dv = String((ntr.daily).toFixed(1)) + "%"
    }
    let parentNtr = [
      <MicroTableRow
        key={ntr.label}
        label={ntr.label}
        unit={ntr.unit}
        total={ntr.total}
        daily={dv}
      />
    ]
    return parentNtr.concat(ntrSub)
  })

  return(
    <table className="stack">
      <thead>
        <tr>
          <th width="300">Nutrient:</th>
          <th width="150">Total Value:</th>
          <th width="150">Daily Value:</th>
        </tr>
      </thead>
      <tbody>
        {tableRows}
      </tbody>
    </table>
  )
}
export default MicroTable;
