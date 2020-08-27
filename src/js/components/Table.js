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
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(url);
            setData(result.data);
        };        
        fetchData()    
            
    }, [url]);

    const headerData = Object.keys(Object(data[0]))

    const onMouseDown = (row, column) => {
        setSelectedCell({selectedRow: row, selectedColumn: column})
    }
    
    const onDoubleClick = (row, column) => {
        setEditCell({editRow: row, editColumn: column})
    }

    const rows = data.map((rowObject) => (
        <Row 
        key={rowObject.id} 
        cells={Object.values(rowObject).map((value, index) => (
            <Cell 
            key={index + value}
            column={index}
            row={rowObject.id} 
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