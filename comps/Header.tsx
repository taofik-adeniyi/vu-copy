import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { StyledButton } from '../pages/global-styles';
import { StyledHeader } from "../styled/layout";
import brand from "../assets/svg/viou-digital.svg"
import cartsearch from "../assets/svg/cart-search.svg"
import { faCartPlus, faSearchLocation, faSearch } from "@fortawesome/free-solid-svg-icons";
import MyIcon from "./MyIcon";
import { StyledLink, StyledNav } from '../styled/header';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter()
  const handleNavigation = ( {navigation}:any) => {
    router.push(navigation)
  }
    return (
        <StyledHeader>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Image src={brand} alt="Viou Digital Logo" width={80} height={50} />
        <StyledNav style={{marginLeft: '30px'}}>
          <Link href="/explore" passHref><StyledLink>explore</StyledLink></Link>
          <Link href="/explore" passHref><StyledLink>find work</StyledLink></Link>
          <Link href="/explore" passHref><StyledLink>academy</StyledLink></Link>
          <Link href="/explore" passHref><StyledLink>upload visuals</StyledLink></Link>
          <Link href="/explore" passHref><StyledLink>how it works</StyledLink></Link>
        </StyledNav>
          </div>
        <aside style={{display: 'flex', justifyContent: 'space-around', minWidth: '270px'}}>
          <Image src={cartsearch} width={60} height={40} alt="Your Cart and Search" />
          <StyledButton color="#fff" onClick={()=>router.push('/sign-in')}>
          sign in
          </StyledButton>
          <StyledButton background="#1EAAB2" onClick={()=>router.push('/register')}>
          sign up
          </StyledButton>
        </aside>
      </StyledHeader>
    )
}

export default Header
