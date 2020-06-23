import React from 'react'

let dataset = require('../../employee_data.json')
const Table = () => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>id</th>
          <th>first name</th>
          <th>surname</th>
          <th>department</th>
          <th>title</th>
        </tr>
      </thead>
      <tbody>
        
      </tbody>
    </table>
  )
}

export default Table