import React from 'react'

function MemoComp({name}) {
    console.log('Rendering Component')
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(MemoComp) // this a higher-order component 

// React.memo avoids the re-rendering of the memo component on the parent component if the name prop state doesn't change 
