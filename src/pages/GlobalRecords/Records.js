import React, { useContext } from 'react'
import { Record } from '../../components/Record'
import RecordContext from './RecordContext'
//this the stage managment for the Records themself.
function Records() {
  return (
    <div className="aura-page-content">
      <RecordContext.Consumer>
        {(data) => data.map(record => <Record key={record.id} data={record} />)}
      </RecordContext.Consumer>
    </div>
  )
}

export default Records
