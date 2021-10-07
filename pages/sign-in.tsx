import React, { useState } from 'react'
import Image from 'next/image'
import { StyledInputPassword, StyledInputText, StyledSelectTag, StyledTextArea } from '../styled/register'
import { StyledButton } from './global-styles'
import Link from 'next/link'
import { StyledLink } from '../styled/header'
import { useRouter } from 'next/router'

const signin = () => {
    const router = useRouter()
    const handleSignIn = (e: any) => {
        e.preventDefault()
        router.push('/new-user')
    }
    const [step, setStep] = useState(0)
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
                            <StyledLink transform="capitalize">Forgot password</StyledLink>
                        </Link>
                    </div>
                    <div style={{margin: '20px 0'}}>
                        <StyledButton 
                        background="#1EAAB2" width="350px" 
                        onClick={handleSignIn}
                        >sign in</StyledButton>
                    </div>
                    <div style={{fontFamily: 'Avenir', fontSize: '14px'}}>
                    Don’t have an account? <Link href="/register" passHref><StyledLink transform="none">Create a free account</StyledLink></Link>
                    </div>
                </form>
            </div>
      </div>
        </div>
    )
}

export default signin
