import React, { useState } from "react";
import { StyledButton } from "./global-styles";
import Image from "next/image";
import {
    PassWordStrenght,
  RegisterWrapper,
  RegisterImageHolder,
  RegisterBox,
  StyledInputEmail,
  StyledInputPassword,
  StyledInputText,
} from "../styled/register";
import { StyledLink } from "../styled/header";
import Link from 'next/link'
import { useRouter } from 'next/router'

const register = () => {
  const router = useRouter()
  const [step, setStep] = useState(0);
    const handleAccountType = (e: any) => {
      e.preventDefault()
      setStep(1)
    }
    const handleRegister = (e: any) => {
      e.preventDefault()
      router.push('/confirm-email')
    }

  
    return (
      <RegisterWrapper>
        <RegisterImageHolder>
          <Image
            alt="Mountains"
            src="/register.svg"
            layout="fill"
            objectFit="cover"
            loading="lazy"
          />
        </RegisterImageHolder>
        <RegisterBox>
          <h2
            style={{
              color: "#00F0FE",
              fontSize: "36px",
              fontFamily: "Overlock",
            }}
          >
            Sign up to Viou
          </h2>
          <h3
            style={{ color: "#fff", fontSize: "24px", fontFamily: "Overlock" }}
          >
            Create your account
          </h3>
          <form>
            <div style={{ margin: "20px 0" }}>
              <StyledInputText placeholder="Full name" />
            </div>
            <div style={{ margin: "20px 0" }}>
              <StyledInputEmail placeholder="Email" />
            </div>
            <div style={{ margin: "20px 0", display: "flex", width: "100%" }}>
              <div>
                <StyledInputPassword placeholder="Password" />
                <div
                  style={{
                    margin: "20px 0",
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
              </div>
              {/* <div
                style={{
                  fontFamily: "Poppins",
                  color: "#C1C1C1",
                  padding: "0 0 0 10px",
                  fontSize: "10px",
                }}
              >
                Password must contain a minimum of 6 character with a
                combination of letters and digits. Password should contain
                uppercase letters, lowercase letters and special characters
              </div> */}
            </div>
            <div style={{color: 'rgba(227, 227, 227, 0.85)', margin : '20px 0', fontFamily: 'Avenir', display: 'flex', width: '350px'}}>
                <input type="checkbox"/>
                <div style={{padding: '0 0 0 20px', fontSize: '14px'}}>
                Creating an account means you’re okay with our Terms of Service, Privacy Policy, and our default Notification Settings.
                </div>
            </div>
            <div style={{color: 'rgba(227, 227, 227, 0.85)', margin : '20px 0', fontFamily: 'Avenir', display: 'flex', width: '350px'}}>
                <input type="checkbox" />
                <div style={{padding: '0 0 0 20px', fontSize: '14px'}}>
                Creating an account means you’re okay with our Terms of Service, Privacy Policy.
                </div>
            </div>
            <div>
                <StyledButton background="#1EAAB2" width="350px" onClick={handleRegister}>create my account</StyledButton>
            </div>
            <div style={{color: '#fff', fontSize: '14px', margin: '10px 0 0 0', fontFamily: 'Avenir'}}>
            Already a member? <Link href="/sign-in" passHref><StyledLink transform="none">Sign In</StyledLink></Link>
            </div>
          </form>
        </RegisterBox>
      </RegisterWrapper>
    );
  }

export default register;
