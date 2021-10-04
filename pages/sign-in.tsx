import React, { useState } from 'react'
import Image from 'next/image'
import { StyledInputPassword, StyledInputText, StyledSelectTag, StyledTextArea } from '../styled/register'
import { StyledButton } from './global-styles'
import Link from 'next/link'
import { StyledLink } from '../styled/header'

const signin = () => {
    const [step, setStep] = useState(0)
    if(step === 0) {

    
    return (
        <div style={{display: 'flex'}}>
            <div style={{ width: "45%", minHeight: "100vh", position: "relative" }}>
        <Image
          alt="Login page background image"
          src="/loginbackground.svg"
          layout="fill"
          objectFit="cover"
          loading="lazy"
        />
      </div>
      <div style={{width: '55%', minHeight: '100vh'}}>
            <div style={{margin: '100px 0 0 100px', color: '#F4F4F4', fontFamily: 'Overlock'}}>
                <h1 style={{color: '#00F0FE', fontSize: '36px', fontWeight: 'bold'}}>Log in to Viou</h1>
                <h4>Enter your account credentials</h4>

                <form>
                    <div style={{margin: '20px 0'}}>
                        <StyledInputText placeholder="Email" />
                    </div>
                    <div style={{margin: '20px 0'}}>
                        <StyledInputPassword placeholder="Password" />
                    </div>
                    <div style={{fontFamily: 'Avenir'}}>
                        <Link href="/forgot-password" passHref>
                            <StyledLink>Forgot password</StyledLink>
                        </Link>
                    </div>
                    <div style={{margin: '20px 0'}}>
                        <StyledButton background="#1EAAB2" width="350px">sign in</StyledButton>
                    </div>
                    <div style={{fontFamily: 'Avenir', fontSize: '14px'}}>
                    Don’t have an account? <Link href="/register" passHref><StyledLink>Create a free account</StyledLink></Link>
                    </div>
                </form>
            </div>
      </div>
        </div>
    )
}else {
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
                            <StyledButton background="#1EAAB2" width="350px">save and continue</StyledButton>
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
}

export default signin
