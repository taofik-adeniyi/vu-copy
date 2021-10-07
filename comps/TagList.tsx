import React from 'react'
import { StyledButton } from '../pages/global-styles'
import Link from 'next/link'
import { StyledLink } from '../styled/header'
import { StyledUl } from '../styled/taglist'


const TagList = () => {
    return (
        <div style={{width: '100%', display: 'flex'}}>
          <div style={{fontFamily: 'Avenir', display: 'flex', color: 'white'}}>
            <StyledUl>
            <li>Tags:</li>
              <li><Link href="/library" passHref><StyledLink transform="capitalize">All</StyledLink></Link></li>
              <li>Ads</li>
              <li>Documentry</li>
              <li>Portraits</li>
              <li>Studios</li>
              <li>Models</li>
              <li>Skits</li>
              <li>Business</li>
            </StyledUl>
          </div>
        </div>
    )
}

export default TagList
