import React from 'react'

function MemoComp({name}) {
    console.log('Rendering Component')
  return (
    <div>
      {name}
    </div>
  )
}

export default MemoComp
