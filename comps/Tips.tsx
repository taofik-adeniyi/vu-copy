import React from 'react'
import { StyledTips } from '../styled/tips'

const Tips = () => {
    return (
        <StyledTips>
            <div style={{display: 'flex', gap: '20px', margin: '0 0 10px 0', padding: '0 0 10px 0', borderBottom: '0.5px solid rgba(21, 96, 120, 0.5)'}}>
            <h3 style={{fontFamily: 'Overlock', fontWeight: 'bold', fontSize: '16px', color: '#156078'}}>Set Your Budget</h3>
            </div>
            <div style={{fontFamily: 'Open sans', color: '3F3F3F', fontSize: '12px'}}>
            Enter an amount you are willing to spend for this shoot.
            </div>
        </StyledTips>
    )
}

export default Tips
