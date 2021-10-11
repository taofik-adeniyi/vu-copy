import React from 'react'
import { StyledTips } from '../styled/tips'

const Tips = ({title, description, eg}: any) => {
    return (
        <StyledTips>
            <div style={{display: 'flex', gap: '20px', margin: '0 0 10px 0', padding: '0 0 10px 0', borderBottom: '0.5px solid rgba(21, 96, 120, 0.5)'}}>
            <h3 style={{fontFamily: 'Overlock', fontWeight: 'bold', fontSize: '16px', color: '#156078'}}>{title ? title : 'Set Your Budget'}</h3>
            </div>
            <div style={{fontFamily: 'Open sans', color: '3F3F3F', fontSize: '12px'}}>
            {description ? description : 'Enter an amount you are willing to spend for this shoot.'}
            </div>
            {
                eg ? <div style={{fontSize: '11px', color: '#1EAAB2', margin: '10px 0'}}>{eg}</div> : ''
            }
            
        </StyledTips>
    )
}

export default Tips
