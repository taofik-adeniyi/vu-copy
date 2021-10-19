import React from 'react'
import Image from 'next/image'
import { StyledInputPassword, PassWordStrenght } from '../styled/register'
import { StyledButton } from '../styled/global-styles'
import { FogotPasswordWrap, FogotPasswordImageWrap, FogotPasswordWrapper, FogotPasswordHolder } from '../styled/forgot-password'
import Header from '../comps/Header'

const forgotpassword = () => {
    return (
      <div style={{position: 'absolute', width: '100%'}}>
    <Header noheader={true} />
        <FogotPasswordWrap>
            <FogotPasswordImageWrap>
        <Image
          alt="Forgot page background image"
          src="/forgot-password.svg"
          layout="fill"
          objectFit="cover"
          loading="lazy"
        />
      </FogotPasswordImageWrap>
      <FogotPasswordWrapper>
          <FogotPasswordHolder>
              <h1 style={{color: '#00F0FE', fontFamily: 'Overlock', fontSize: '36px'}}>Update Password</h1>
              <form style={{margin: '50px 0'}}>
                  <div style={{margin: '20px 0'}}>
                      <StyledInputPassword placeholder="Old Password" />
                  </div>
                  <div style={{margin: '20px 0'}}>
                      <StyledInputPassword placeholder="New Password" />
                  </div>
                  <div
                  style={{
                    margin: "5px 0",
                    color: "#ADADAD",
                    fontFamily: "Avenir",
                    fontSize: "14px",
                  }}
                >
                  Password Strength
                </div>
                  <div style={{display: 'flex', width: '350px', gap: '3px'}}>
                    <PassWordStrenght background="red" />
                    <PassWordStrenght/>
                    <PassWordStrenght/>
                    <PassWordStrenght/>
                    <PassWordStrenght/>
                    <PassWordStrenght/>
                </div>
                  <div style={{margin: '20px 0'}}>
                      <StyledInputPassword placeholder="Confirm Password" />
                  </div>
                  <div style={{margin: '20px 0', color: '#F7F7F7', fontFamily: 'Poppins', fontSize: '12px'}}>
                  Password must contain a minimum of 6 character with a combination of letters and digits. Password should contain uppercase letters, lowercase letters and special characters
                  </div>
                  <div style={{margin: '20px 0'}}>
                      <StyledButton background="#1EAAB2" width="350px">save changes</StyledButton>
                  </div>
              </form>
          </FogotPasswordHolder>
      </FogotPasswordWrapper>
        </FogotPasswordWrap>
        </div>
    )
}

export default forgotpassword
