import React, { useState } from 'react'
import Image from 'next/image'
import { StyledInputPassword, StyledInputText, StyledSelectTag, StyledTextArea } from '../styled/register'
import { StyledButton } from '../styled/global-styles'
import Link from 'next/link'
import { StyledLink } from '../styled/header'
import { useRouter } from 'next/router'
import { LogInImageHolder, LogInWrapper, LogInBox } from '../styled/login'
import Header from '../comps/Header'

const Signin = () => {
    const router = useRouter()
    console.log('path name is >>>>', router.pathname)
    const vans = router.pathname === "/sign-in" ? "SIGN UP" : "SIGN IN"
    const handleSignIn = (e: any) => {
        e.preventDefault()
        router.push('/new-user')
    }
    const [step, setStep] = useState(0)
    return (
        <div style={{position: 'absolute', width: '100%'}}>
        <Header noheader={true} showvans={vans} />
        <LogInWrapper>
            <LogInImageHolder>
        <Image
          alt="Login page background image"
          src="/loginbackground.svg"
          layout="fill"
          objectFit="cover"
          loading="lazy"
        />
      </LogInImageHolder>
      <LogInBox>
            <div>
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
      </LogInBox>
        </LogInWrapper>
        </div>
    )
}

export default Signin
