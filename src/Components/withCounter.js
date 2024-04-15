import React from "react";

const withCounter = (OriginalComponent) => {
    class NewComponent extends React.Component {
        render() {
            return <OriginalComponent name='Will' />
        }
    }
    return NewComponent
}

export default withCounter