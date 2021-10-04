import React from "react";
import { StyledFooter } from "../styled/layout";
import brand from "../assets/svg/viou-digital.svg"
import socials from "../assets/svg/socials.svg"
import Image from "next/image"
import Link from 'next/link'
import { StyledLink } from "../styled/header";

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <StyledFooter>
      <div style={{width: '90%', display: 'flex', justifyContent: 'space-between', margin: '0 auto'}}>
        <div style={{width: '25%'}}>
          <Image src={brand} width={100} height={80} alt=" Viou Digital Logo" />
          <p style={{fontSize: '24px', padding: '20px 0 100px 0', fontWeight: 'bold'}}>
          We are changing the african continent’s global view by sharing local content creators visuals.
          </p>
        </div>
        <div style={{display: 'flex', width: '70%'}}>
        <div style={{width: '24%'}}>
          <strong>for creators</strong>
          <ul>
            <li>Explore</li>
            <li>Find work</li>
            <li>Blog</li>
            <li>Overtime podcast </li>
            <li>Viou meetups</li>
            <li>Code of conduct</li>
          </ul>
        </div>
        <div style={{width: '24%'}}>
        <strong>hire creators</strong>
          <ul>
            <li>Post a job opening</li>
            <li>Post a project</li>
            <li>Search for creators</li>
          </ul>
        </div>
        <div style={{width: '24%'}}>
        <strong>company</strong>
          <ul>
            <li><Link passHref href="/about"><a>About</a></Link></li>
            <li>Careers</li>
            <li>Support</li>
            <li>Media kit </li>
            <li>Testimonials</li>
            <li>API</li>
            <li>Terms of services</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div style={{width: '24%'}}>
        <strong>contact</strong>
          <ul>
            <li><a
                  href="mailto:support@vioudigital.com"
                  style={{ color: "#fff" }}
                >
                  support@vioudigital.com
                </a></li>
            <li>070000000</li>
            <li><Image src={socials} width={150} height={30} /></li>
          </ul>
        </div>
        </div>
      </div>
      <div style={{width: '100%', padding: '20px 0 30px 60px', fontFamily: 'Overlock', fontSize: '16px', borderTop: '1px solid #fff'}}>
        &copy; { currentYear } Viou Digital. All rights reserved.
      </div>
    </StyledFooter>
  );
};

export default Footer;
