import React from 'react'
import { StyledButton } from '../pages/global-styles'

const TagList = () => {
    return (
        <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '25px'}}>
          <div>
          <StyledButton color="#fff" border="white" width="180px">
            All
          </StyledButton>
          </div>
          <div style={{fontFamily: 'Avenir', display: 'flex', color: 'white'}}>
            <ul className="tags">
              <li>Tags:</li>
              <li>All</li>
              <li>Ads</li>
              <li>Documentry</li>
              <li>Portraits</li>
              <li>Studios</li>
              <li>Models</li>
              <li>Skits</li>
              <li>Business</li>
            </ul>
          </div>
        </div>
    )
}

export default TagList