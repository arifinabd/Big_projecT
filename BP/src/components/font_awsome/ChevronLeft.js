import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import "./style.scss"

function ChevronLeft() {
    return (
        <div className="icon">
            <FontAwesomeIcon icon={faChevronLeft}/>
        </div>
    )
}

export default ChevronLeft
