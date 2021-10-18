import React from 'react'
import { StyledButton } from "./global-styles";
import { useRouter } from 'next/router'
import { StyledRegisterType, RegisterTypeFlex, Create, Choose, TypeCreator } from '../styled/register-type';
import Header from '../comps/Header'


const registertype = () => {
    const router = useRouter()
    return (
      <div style={{position: 'absolute', width: '100%'}}>
      <Header noheader={true} />
        <StyledRegisterType>
        <Create>
          Create your Viou account
        </Create>

        <Choose>
          Choose your account type?
        </Choose>

        <RegisterTypeFlex>
          <TypeCreator>
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
            <StyledButton background="#1EAAB2" hover="#1EAAB2" hcolor="#000" onClick={()=> router.push('/register')}>create my account</StyledButton>
          </TypeCreator>
          <TypeCreator>
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
            <StyledButton background="#93D500" hover="#93D500" hcolor="#000" onClick={()=> router.push('/register')}>create my account</StyledButton>
          </TypeCreator>
        </RegisterTypeFlex>
      </StyledRegisterType>
      </div>
    )
}

export default registertype
