import React from "react";
import MyLayout from "../comps/MyLayout";
import { StyledButton } from "./global-styles";
import companylogos from "../assets/svg/company-logos.svg"
import Image from 'next/image'
import { Box } from "../styled/home";

const about = () => {
  return <MyLayout>
      <div style={{display: 'flex', padding: '80px 50px 20px 100px', backgroundColor: 'white', minHeight: '400px'}}>
          <div style={{width: '45%', display: 'flex', flexDirection: 'column'}}>
          <h1 style={{fontSize: '64px', fontFamily: 'Overlock'}}>About <span style={{color: '#00B3BE'}}>Viou</span></h1>
          <p style={{fontSize:'18px', lineHeight: '1.6em', fontFamily: 'Avenir'}}>Viou is the go-to destination for finding and hiring amazing visual content creators and showcasing creative work. It is home to the best of African Photographers and Cinematographers.</p>
          </div>
          <div style={{width: '55%'}}>

          </div>
      </div>
      <div style={{display: 'flex', padding: '80px 50px 100px 100px', backgroundColor: 'white', minHeight: '400px'}}>
          <div style={{width: '50%'}}></div>
          <div style={{width: '50%'}}>
              <h1 style={{fontSize: '64px', fontFamily: 'Overlock'}}>We have a vibrant community</h1>
              <p style={{fontSize:'18px', lineHeight: '1.6em', fontFamily: 'Avenir'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate veli</p>
              <StyledButton background="#1EAAB2" width="160px">join viou</StyledButton>
          </div>
      </div>
      <div style={{backgroundColor: '#C4C4C4', width: '100%', padding: '50px 100px', minHeight: '400px'}}>
            <h1 style={{fontFamily: 'Overlock', textAlign: 'center'}}>Top Brands that love us</h1>
            <div style={{width: '80%', margin: '0 auto'}}>
            <Image src={companylogos} width={1000} height={300} />
            </div>
      </div>
      <div style={{width: '100%', textAlign: 'center', backgroundColor: 'white', padding: '50px 0 100px 0', fontFamily: 'Overlock'}}>
        <div style={{width: '60%', margin: '0 auto 50px auto'}}>
        <h1>The Team</h1>
        <p>
        The incredible team members at Viou work together tirelessly to create the best possible experience for clients and artists alike. We are a passionate group, comprised of industry leaders in curation, design, business, customer service, and IT, who love our community—and what we do.
        </p>
        </div>
        <div style={{width: '90%', flexWrap: 'wrap', margin: '0 auto 70px auto', display: 'flex', gap: '30px', justifyContent: 'center'}}>
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
        </div>
        <StyledButton background="#1EAAB2" width="160px" >join our team</StyledButton>
      </div>
  </MyLayout>;
};

export default about;
