import React from 'react'

function Row(props) {

    const cells = props.cells

    return (
        <div className='row'>
            {cells}
        </div>
    )
}

export default Row