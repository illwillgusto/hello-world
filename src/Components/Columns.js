import React from 'react'

function Columns() {
    const items = [];
  return (
    <> {/* the shorthand syntax for the React.Fragment tag */}
        {
            items.map( item => (
                <React.Fragment key={item.id}> {/* the key attribute is the only attribute that can be passed through */}
                    <h1>Title</h1>
                    <p>{item.title}</p>
                </React.Fragment>
            ))
        }
      <td>Name</td>
      <td>Will</td>
    </>
  )
}

export default Columns
