import React from 'react'
import Columns from './Columns'

function Table() {
  return (
    <table>
      <tbody>{/* table body */}
        <tr> {/* table row */}
          <Columns />
        </tr>
      </tbody>
    </table>
  )
}

export default Table
