import React, { useState } from "react";
import { StyledButton } from "./global-styles";
import Image from "next/image";
import {
    PassWordStrenght,
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

  if (step === 0) {
    return (
      <div style={{ width: "100%", height: "100%", color: "white" }}>
        <h1
          style={{
            color: "#00F0FE",
            padding: "50px 100px 0 100px",
            fontFamily: "Overlock",
            fontSize: "36px",
          }}
        >
          Create your Viou account
        </h1>

        <h4
          style={{
            textAlign: "center",
            fontFamily: "Overlock",
            padding: "0 0 20px 0",
            fontSize: "24px",
          }}
        >
          Choose your account type?
        </h4>

        <div
          style={{
            display: "flex",
            fontFamily: "Avenir",
            width: "100%",
            gap: "40px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              minHeight: "350px",
              padding: "20px 0",
              textAlign: "center",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
              width: "300px",
              borderRadius: "10px",
              backgroundColor: "white",
            }}
          >
            <h2
              style={{ fontFamily: "Avenir", color: "#000", fontSize: "36px" }}
            >
              I am looking to engage professionals
            </h2>
            <div style={{ padding: "20px 0 10px 0" }}>
              <div style={{ color: "#3C3C3C", padding: "5px 0" }}>
                Choose your account type?
              </div>
              <div style={{ color: "#3C3C3C", padding: "5px 0" }}>
                Choose your account type?
              </div>
              <div style={{ color: "#3C3C3C", padding: "5px 0" }}>
                Choose your account type?
              </div>
              <div style={{ color: "#3C3C3C", padding: "5px 0" }}>
                Choose your account type?
              </div>
            </div>
            <StyledButton background="#1EAAB2" hover="#1EAAB2" hcolor="#000" onClick={handleAccountType}>create my account</StyledButton>
          </div>
          <div
            style={{
              minHeight: "350px",
              padding: "20px 0",
              textAlign: "center",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
              width: "300px",
              borderRadius: "10px",
              backgroundColor: "white",
            }}
          >
            <h2
              style={{ fontFamily: "Avenir", color: "#000", fontSize: "36px" }}
            >
              I am a visual content creator
            </h2>
            <div style={{ padding: "20px 0 10px 0" }}>
              <div style={{ color: "#3C3C3C", padding: "5px 0" }}>
                Choose your account type?
              </div>
              <div style={{ color: "#3C3C3C", padding: "5px 0" }}>
                Choose your account type?
              </div>
              <div style={{ color: "#3C3C3C", padding: "5px 0" }}>
                Choose your account type?
              </div>
              <div style={{ color: "#3C3C3C", padding: "5px 0" }}>
                Choose your account type?
              </div>
            </div>
            <StyledButton background="#93D500" hover="#93D500" hcolor="#000" onClick={handleAccountType}>create my account</StyledButton>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ width: "45%", minHeight: "100vh", position: "relative" }}>
          <Image
            alt="Mountains"
            src="/register.svg"
            layout="fill"
            objectFit="cover"
            loading="lazy"
          />
        </div>
        <div
          style={{
            width: "55%",
            minHeight: "100vh",
            padding: "50px 50px 50px 100px",
          }}
        >
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
              <div
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
              </div>
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
        </div>
      </div>
    );
  }
};

export default register;
