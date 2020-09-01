import React from 'react'

function Cell(props) {

    const value = props.value
    const row = props.row
    const column = props.column
    const selected = props.selected

    const handleMouseDown = () => {
        props.onMouseDown(row, column)
    }

    const handleDoubleClick = () => {
        props.onDoubleClick(row, column)
    }

    return (
        <span className={selected === true ? 'selected-cell' : 'cell'}
        onMouseDown={handleMouseDown}
        onDoubleClick={handleDoubleClick}>
                {value}
        </span>
    )
}

export default Cell