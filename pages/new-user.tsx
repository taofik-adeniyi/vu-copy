import React from 'react'
import Image from 'next/image'
import { StyledInputText, StyledSelectTag, StyledTextArea } from '../styled/register'
import { StyledButton } from './global-styles'
import { useRouter } from 'next/router'

const newuser = () => {
    const router = useRouter()
    const handleConfirm = (e: any) => {
        e.preventDefault()
        router.push('/library')
    }
    return (
        <div style={{display: 'flex'}}>
            <div style={{width: '55%', minHeight: '100vh'}}>
                <div style={{width: '350px', margin: '60px 0 0 100px', fontFamily: 'Overlock'}}>
                    <h1 style={{color: '#00F0FE', fontSize: '36px'}}>Welcome Asabe! <br/>Let us get to know you</h1>
                    <div style={{fontSize: '18px', color: '#F4F4F4'}}>PERSONAL DETAILS</div>
                    <form style={{marginTop: '30px'}}>
                        <div style={{width: '73px', height: '73px', backgroundColor: '#F4F4F4', position: 'relative', borderRadius: '50%'}}>

                        </div>
                        <div style={{margin: '20px 0'}}>
                            <StyledInputText placeholder="Firstname" />
                        </div>
                        <div style={{margin: '20px 0'}}>
                            <StyledSelectTag>
                                <option>Location</option>
                                <option>Abuja</option>
                                <option>Lagos</option>
                                <option>Phortharcout</option>
                            </StyledSelectTag>
                        </div>
                        <div style={{margin: '20px 0'}}>
                            <StyledTextArea placeholder="Bio" />
                        </div>
                        <div style={{margin: '20px 0'}}>
                            <StyledButton background="#1EAAB2" width="350px" onClick={handleConfirm}>save and continue</StyledButton>
                        </div>
                    </form>
                </div>
            </div>
 <div style={{ width: "45%", backgroundColor: '#C4C4C4', minHeight: "100vh", position: "relative" }}>
        <Image
          alt="Welcome page background image"
          src="/welcomebackground.svg"
          layout="fill"
          objectFit="cover"
          loading="lazy"
        />
      </div>
      
        </div>
    )
}

export default newuser
