import React, { Fragment } from 'react'

function Cell(props) {

    const value = props.value
    const row = props.row
    const column = props.column

    const className = () => {
        if (props.selectedRow === row &&
            props.selectedColumn === column)
            return 'selected-cell'
        return 'cell'
    }

    const handleMouseDown = () => {
        props.onMouseDown(row, column)
    }

    // var timer = 0
    // const delay = 200
    // var prevent = false

    // const handleClick = () => {
    //     timer = setTimeout(() => {
    //         if(!prevent) {
    //             console.log('click')
    //         }
    //         prevent = false
    //     }, delay)
    // }

    const handleDoubleClick = () => {
        // clearTimeout(timer)
        // prevent = true
        console.log('double click')
        props.onDoubleClick(row, column)
    }

    const render = () => {
        if (props.editRow === row && props.editColumn === column) {
            return (
                <input 
                className={className()}
                type="text" 
                value={value} />
            )
        }
        return (
            <span className={className()}
            onMouseDown={handleMouseDown}
            // onClick={handleClick}
            onDoubleClick={handleDoubleClick}>
                {value}
            </span>
        )
    }

    return (
        <Fragment>
            {render()}
        </Fragment>  
    )
}

export default Cell