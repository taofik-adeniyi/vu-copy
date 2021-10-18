import React from 'react'
import Image from 'next/image'
import { StyledInputText, StyledSelectTag, StyledTextArea } from '../styled/register'
import { StyledButton } from './global-styles'
import { useRouter } from 'next/router'
import { NewUser, NewUserImageWrap, NewUserFormWrapper, NewUserFormHolder } from '../styled/new-user'
import Header from '../comps/Header'

const newuser = () => {
    const router = useRouter()
    const handleConfirm = (e: any) => {
        e.preventDefault()
        router.push('/library')
    }
    return (
        <div style={{position: 'absolute', width: '100%'}}>
      <Header noheader={true} />
        <NewUser>
            <NewUserFormWrapper>
                <NewUserFormHolder>
                    <h1 style={{color: '#00F0FE', fontSize: '36px'}}>Welcome Asabe! <br/>Let us get to know you</h1>
                    <div style={{fontSize: '18px', color: '#F4F4F4'}}>PERSONAL DETAILS</div>
                    <form style={{marginTop: '30px'}}>
                        <div style={{width: '73px', height: '73px', backgroundColor: '#F4F4F4', position: 'relative', borderRadius: '50%'}}>

                        </div>
                        <div style={{margin: '20px 0'}}>
                            <StyledInputText placeholder="Firstname" />
                        </div>
                        <div style={{margin: '20px 0'}}>
                            <StyledSelectTag>
                                <option>Location</option>
                                <option>Abuja</option>
                                <option>Lagos</option>
                                <option>Phortharcout</option>
                            </StyledSelectTag>
                        </div>
                        <div style={{margin: '20px 0'}}>
                            <StyledTextArea placeholder="Bio" />
                        </div>
                        <div style={{margin: '20px 0'}}>
                            <StyledButton background="#1EAAB2" width="350px" onClick={handleConfirm}>save and continue</StyledButton>
                        </div>
                    </form>
                </NewUserFormHolder>
            </NewUserFormWrapper>
 <NewUserImageWrap>
        <Image
          alt="Welcome page background image"
          src="/welcomebackground.svg"
          layout="fill"
          objectFit="cover"
          loading="lazy"
        />
      </NewUserImageWrap>
      
        </NewUser>
        </div>
    )
}

export default newuser
