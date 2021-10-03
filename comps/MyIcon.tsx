import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const newl = {fontSize: '1.4rem'}

const MyIcon = ({myicon, myStyle=newl, onClick}: any) => {
    return <div onClick={onClick}>
        <FontAwesomeIcon icon={myicon} style={myStyle} />
    </div>
}

export default MyIcon