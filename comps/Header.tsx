import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { StyledButton } from '../styled/global-styles';
import { StyledHeader, StyledMobileHeder } from "../styled/layout";
import brand from "../assets/svg/viou-digital.svg"
import cartsearch from "../assets/svg/cart-search.svg"
import { faCartPlus, faSearchLocation, faSearch } from "@fortawesome/free-solid-svg-icons";
import MyIcon from "./MyIcon";
import { StyledLink, PlainDiv, StyledNav } from '../styled/header';
import { useRouter } from 'next/router';
import ProfileTab from './ProfileTab';
import Portal from './hoc/Portal'
import Modal from './Modal'
import Uploads from './Uploads';
import MobileMenu from './MobileMenu';
import { StyledDisplayPicture } from '../styled/styles';
import { StyledBars } from '../styled/icons';

const Header = ({isBorder, noheader, showvans}: any) => {
  const router = useRouter()
  const [upload, setUpload] = useState(false)
  const [mobilenav, setMobileNav] = useState(false)
  
    return (
      <>
      {/* <Portal> */}
      {/* <MobileMenu/> */}
      {/* </Portal> */}
      {
        mobilenav && <MobileMenu close={()=> setMobileNav(!mobilenav)} />
      }
      {
        upload && <Portal>
         <Modal width="55%">
          <Uploads />
         </Modal>
        </Portal>
      }
        <StyledHeader border={isBorder} hideheader={noheader}>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Link href="/" passHref><StyledLink margin="0">

          <Image src={brand} alt="Viou Digital Logo" width={80} height={50} />
            </StyledLink></Link>
        <StyledNav style={{marginLeft: '30px'}}>
          <Link href="/library" passHref><StyledLink>explore</StyledLink></Link>
          <Link href="/" passHref><StyledLink>find work</StyledLink></Link>
          <Link href="/" passHref><StyledLink>academy</StyledLink></Link>
          {/* <PlainDiv onClick={()=> setUpload(!upload)}>upload visuals</PlainDiv> */}
          <Link href="/"><StyledLink onClick={()=> setUpload(!upload)}>upload visuals</StyledLink></Link>
          <Link href="/" passHref><StyledLink>how it works</StyledLink></Link>
        </StyledNav>
          </div>
         <div style={{display: 'flex', alignItems: 'center'}}>
         <div style={{ margin: '0 10px'}}>
          <Image src={cartsearch} width={60} height={40} alt="Your Cart and Search" />
          </div>
        <aside style={{display: 'flex', margin: '0 10px', justifyContent: 'space-around', minWidth: 'fit-content'}}>
          <StyledButton color="#fff" onClick={()=>router.push('/sign-in')}>
          sign in
          </StyledButton>
          <StyledButton background="#1EAAB2" onClick={()=>router.push('/register-type')}>
          sign up
          </StyledButton>
        </aside>
        <ProfileTab/>
         </div>
      </StyledHeader>
      <StyledMobileHeder>
        <StyledBars onClick={()=> setMobileNav(!mobilenav)} />
        <StyledDisplayPicture width="70px" height="70px">
        <Image src={brand} alt="Viou Digital Logo" layout="fill"  />
        </StyledDisplayPicture>
        <div style={{color: 'white', fontFamily: 'Overlock', fontWeight: 'bold', fontSize: '20px'}}>
          {showvans === "SIGN UP" ? showvans : 'SIGN IN'}
        </div>
      </StyledMobileHeder>
      </>
    )
}

export default Header
