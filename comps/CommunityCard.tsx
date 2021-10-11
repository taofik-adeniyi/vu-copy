import React from 'react'
import { StyledComCard } from '../styled/community-card'

const CommunityCard = ({content}:any) => {
    const {heading, title, description, background} = content
    return (
        <StyledComCard background={background}>
            <div style={{fontFamily: 'Open sans', fontSize: '13px', textTransform: 'uppercase'}}>{heading}</div>
            <h1 style={{color: '#000', fontFamily: 'Overlock', padding: '20px 0 10px 0', fontSize: '2.2em'}}>{title}</h1>
            <p style={{fontFamily: 'Open sans', fontSize: '13px', color: '#000'}}>{description}</p>
        </StyledComCard>
    )
}

export default CommunityCard
