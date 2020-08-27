import React, { Fragment } from 'react'

function Header(props) {

    const headerData = props.headerData
    const labels = headerData.map(
       (label, index) => (
            <span className='cell' 
            key={label + index}>
                {label}
            </span>
       )
    ) 

    return (
        <Fragment>
            {labels}
        </Fragment>
    )
}

export default Header