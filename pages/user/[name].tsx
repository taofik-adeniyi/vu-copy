import React from 'react'
import MyLayout from '../../comps/MyLayout'
import { StyledImageContainer } from '../../styled/styles'
import { MyBigDisplay } from '../../styled/user'
import Image from 'next/image'
import ImageContainer from '../../comps/ImageContainer'
import { StyledButton } from '../global-styles'
import mybg from '../../assets/images/camerastanddark.png'
import Library from '../../comps/Library'
import styles from '../../styles/user.module.scss'

const user = () => {
    return (
        <MyLayout>
            <div className={styles.userdisplay}>
                <div style={{width: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', margin: '0 auto'}}>
                <div style={{marginTop: '50px'}}>
                <ImageContainer>
                <Image 
                    src="/mydp.svg"
                    alt="A beautiful dog Image"
                    layout="fill"
                    objectFit="cover"
                    loading="lazy"
                     />
                </ImageContainer>
                </div>
                <h3 style={{fontFamily: 'Overlock', fontWeight: 'bold', fontSize: '30px'}}>Big Nana Studios</h3>
                <p style={{fontSize: '18px', fontFamily: 'Avenir'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
                <address style={{fontSize: '18px', fontFamily: 'Avenir'}}>
                Lagos, Nigeria<br/> 25537 Assets 1204 Followers
                </address>
               
                <div style={{display: 'flex', marginTop: '30px', justifyContent: 'center', gap:"30px"}}>
                    <StyledButton background="#1EAAB2" width="150px">
                        hire me
                    </StyledButton>
                    <StyledButton border="white" width="150px" color="white">
                        follow
                    </StyledButton>
                </div>
                </div>
            </div>
            <div style={{width: '100%', gap: '20px', display: 'flex', padding: '50px 5%'}}>
                <StyledButton background="white">Showreel</StyledButton>
                <StyledButton border="white" color="white">Latest</StyledButton>
                <StyledButton border="white" color="white">Videos</StyledButton>
                <StyledButton border="white" color="white">Photos</StyledButton>
            </div>
            <div style={{width: '90%', margin: '0 auto'}}>

            <Library/>
            </div>
        </MyLayout>
    )
}

export default user
