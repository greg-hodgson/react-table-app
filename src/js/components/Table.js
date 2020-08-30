import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './Header.js'
import Row from './Row.js'
import Cell from './Cell.js'

import './Table.css'

function Table(props) {

    const url = props.url
    const [data, setData] = useState([]);
    
    const [selectedCell, setSelectedCell] = 
    useState({selectedRow: null, selectedColumn: null})

    const [editCell, setEditCell] =
    useState({editRow: null, editColumn: null})

    const [pressedKey, setPressedKey] = useState({pressedKey: null})

    const handleKeyDown = (e) => {
        setPressedKey(e.keyCode,)
    }

    const handleChangeSelectedCell = () => {
        const column = selectedCell.selectedColumn
        const row = selectedCell.selectedRow 

    if (pressedKey === 37 && column > 0) {
        setSelectedCell({...selectedCell,
            selectedColumn: column- 1})
        }
    if (pressedKey === 38 && row > 0) {
        setSelectedCell({...selectedCell,
            selectedRow: row - 1})
        }    
    if (pressedKey === 39 && column < Object.keys(data).length - 1) {
        setSelectedCell({...selectedCell,
            selectedColumn: column+ 1})
        }  
    if (pressedKey === 40 && row < data.length - 1) {
        setSelectedCell({...selectedCell,
            selectedRow: row + 1})
        }  
    }

    
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        
        if (pressedKey !== null) {
            handleChangeSelectedCell()
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            setPressedKey(null)
        }
    })

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(url);
            setData(result.data);
        };        
        fetchData()

    },[url]);

    const headerData = Object.keys(Object(data[0]))

    const onMouseDown = (row, column) => {
        setSelectedCell({selectedRow: row, selectedColumn: column})
        setEditCell({editRow: null, editColumn: null})
    }
    
    const onDoubleClick = (row, column) => {
        setEditCell({editRow: row, editColumn: column})
    }

    const rows = data.map((rowObject, rowIndex) => (
        <Row 
        key={rowObject.id}
        row={rowIndex} 
        cells={Object.values(rowObject).map((value, index) => (
            <Cell 
            key={index + value}
            column={index}
            row={rowIndex} 
            value={value}
            onMouseDown={onMouseDown}
            onDoubleClick={onDoubleClick}
            {...selectedCell}
            {...editCell} />
        ))} />
    ))

    return (
        <div className='table'>
            <div className='header'>
                <Header headerData={headerData} />
            </div>
            <div className='rowGroup'>
                {rows}
            </div>
        </div>
    )
}

export default Table