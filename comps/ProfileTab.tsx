import React from 'react'
import ImageContainer from './ImageContainer'
import Image from 'next/image'


const ProfileTab = () => {
    return (
        <div style={{display: 'flex', fontFamily: 'Poppins', gap: '20px', justifyContent: 'start', alignItems: 'center'}}>
            <div style={{borderRadius: '10px', color: 'white', fontSize: '10px', display: 'flex'}}>
                <div style={{backgroundColor: '#1EAAB2', display: "flex", justifyContent: 'center', alignItems: 'center', minWidth: '80px', minHeight: '35px', fontWeight: 'bold', borderRadius: '10px 0 0 10px', padding: '0 10px',}}>Viou Coins</div>
                <div style={{background: 'transparent', display: "flex", justifyContent: 'center', alignItems: 'center', minWidth: '80px',minHeight: '35px', fontWeight: 'bold', borderRadius: '0 10px 10px 0', padding: '0 10px', border: '1px solid #606060'}}>10,000</div>
            </div>
            <div>
            <ImageContainer small={true}>
                <Image 
                alt="Forgot page background image"
                src="/mydp.svg"
                layout="fill"
                objectFit="cover"
                loading="lazy"
                />
            </ImageContainer>
            </div>
            <div>
            <Image 
                alt="Arrow Down"
                src="/smallarrow.svg"
                layout="fixed"
                loading="lazy"
                width={15}
                height={15}
                />
            </div>
        </div>
    )
}

export default ProfileTab
