import React from 'react'

function Cell(props) {

    const value = props.value
    const row = props.row
    const column = props.column
    const editRow = props.editRow
    const editColumn = props.editColumn

    const isEditable = () => {
            if  (editRow === row &&
                editColumn === column)
                return true
    }

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
        props.onDoubleClick(row, column)
    }

    return (
        <span className={className()}
            contentEditable={isEditable()}
            suppressContentEditableWarning={true}
            onMouseDown={handleMouseDown}
            // onClick={handleClick}
            onDoubleClick={handleDoubleClick}>
                {value}
        </span>
    )
}

export default Cell