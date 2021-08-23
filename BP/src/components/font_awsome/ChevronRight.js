import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import "./style.scss"

function ChevronRight() {
    return (
        <div className="icon">
            <FontAwesomeIcon icon={faChevronRight}/>
        </div>
    )
}

export default ChevronRight
