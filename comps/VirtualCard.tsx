import React from 'react'
import { StyledDisplayPicture } from '../styled/styles'
import { VirtualWrapper } from '../styled/virtual'
import Image from 'next/image'
import brand from '../assets/svg/viou-digital.svg'
import { StyledFacebook, StyledInstagram, StyledPinterset, StyledQrCode, StyledTwitter, StyledVimeo } from '../styled/icons'

const VirtualCard = () => {
    return (
        <VirtualWrapper>
            <div style={{display: 'flex', justifyContent: 'flex-end', margin: '10px 20px'}}>
            <StyledDisplayPicture width="40px" height="40px" >
                <Image src={brand} layout="fill" loading="lazy"/>
            </StyledDisplayPicture>
            </div>
            <div style={{margin: '0 40px', gap: '2em', display: 'flex'}}>
                <div>
                    <StyledDisplayPicture rounded="50%" width="150px" height="150px" border={true}>
                        <Image src="/mydp.svg" loading="lazy" layout="fill"/>
                    </StyledDisplayPicture>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', color: '#fff', fontFamily: 'Overlock'}}>
                    <h2>Big Nana Studios</h2>
                    <div style={{margin: '10px 0'}}>Lagos, Nigeria<br/>
                        25537 Assets
                        1204 Followers
                    </div>
                    <div style={{display: 'flex', gap: '10px'}}>
                        <StyledFacebook/>
                        <StyledTwitter/>
                        <StyledVimeo/>
                        <StyledPinterset/>
                        <StyledInstagram/>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <StyledQrCode/>
                    </div>
                </div>
            </div>
        </VirtualWrapper>
    )
}

export default VirtualCard
