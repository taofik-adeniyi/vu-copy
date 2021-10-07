import React from 'react'
import MyLayout from '../../comps/MyLayout'
import { AccountData, DataFlex, DataTitle, PersonalData, ProfileCard, ProfileContainer, ProfileDetails, ProfileLocation, ProfileName, ProfileNiche, ProfileWrapper } from '../../styled/profile'
import ImageContainer from '../../comps/ImageContainer'
import Image from 'next/image'
import { StyledInputPassword, StyledInputText, StyledTextArea } from '../../styled/register'

const index = () => {
    return (
        <MyLayout>
            <div style={{background: '#E0E0E0', width: '100%', height: '50px'}}></div>
            <ProfileWrapper>
                <ProfileContainer>
                    <div style={{width: '25%'}}>
                        <ProfileCard>
                            
                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: '30px 0 60px 0'}}>
                                <ImageContainer small={true}>
                                    <Image alt="Display Picture"
                                        src="/mydp.svg"
                                        layout="fill"
                                        objectFit="cover"
                                        loading="lazy" 
                                    />
                                </ImageContainer>
                            <ProfileName>Big Nana Studios</ProfileName>
                            <ProfileNiche>Photography</ProfileNiche>
                            </div>
                            <ProfileLocation>
                                <Image 
                                    src="/location.svg" 
                                    layout="fill" 
                                    objectFit="cover"
                                    loading="lazy" 
                                />
                                Lagos, Nigeria
                            </ProfileLocation>
                        </ProfileCard>
                    </div>
                    <ProfileDetails>
                        <div style={{width: '100%', display: 'flex'}}>
                            <div style={{width: '50%'}}>
                            <AccountData>
                            <DataTitle>Account Data</DataTitle>
                            <div>
                            <StyledInputText placeholder="username" />
                            </div>
                            <div>
                            <StyledInputText placeholder="Email" />
                            </div>
                            <div>
                            <StyledInputPassword placeholder="New Password" />
                            </div>
                            <div>
                            <StyledInputPassword placeholder="Confirm new password" />
                            </div>
                            <div>
                            <StyledInputPassword placeholder="Current Password" />
                            </div>
                            <StyledInputText placeholder="Website" />
                        </AccountData>
                            </div>
                            <div style={{width: '50%'}}><PersonalData>
                        <DataTitle>Personal Data</DataTitle>
                        <div>
                        <StyledInputText placeholder="Full Name" />
                        </div>
                        <div>
                        <StyledInputText placeholder="Location" />
                        </div>
                        <div>
                        <StyledInputText placeholder="Phone Number" />
                        </div>
                        <div>
                        <StyledInputText placeholder="Business/Role" />
                        </div>
                        <div>
                            <StyledTextArea placeholder="Company profile"></StyledTextArea>
                        </div>

                        </PersonalData></div>
                        </div>
                        <div style={{ width: '100%'}}>
                        <DataFlex>
                            <DataTitle>Social Data</DataTitle>
                            <div style={{display: 'flex', justifyContent: 'space-between',  gap: '20px', padding: '20px 0', flexWrap: 'wrap', width: '100%'}}>
                                <div style={{width: '45%', display: 'flex', height: '40px', border: '1px solid gray', borderRadius: '10px'}}>
                                    <div style={{width: '50px', borderRadius: '10px 0 0 10px', backgroundColor: 'lightgray', height: '40px'}}></div>
                                    <input type="text" style={{width: '100%', borderRadius: '0 10px 10px 0'}} placeholder="instagram" />
                                </div>
                                <div style={{width: '45%', display: 'flex', height: '40px', border: '1px solid gray', borderRadius: '10px'}}>
                                    <div style={{width: '50px', borderRadius: '10px 0 0 10px', backgroundColor: 'lightgray', height: '40px'}}></div>
                                    <input type="text" style={{width: '100%', borderRadius: '0 10px 10px 0'}} placeholder="instagram" />
                                </div>
                                <div style={{width: '45%', display: 'flex', height: '40px', border: '1px solid gray', borderRadius: '10px'}}>
                                    <div style={{width: '50px', borderRadius: '10px 0 0 10px', backgroundColor: 'lightgray', height: '40px'}}></div>
                                    <input type="text" style={{width: '100%', borderRadius: '0 10px 10px 0'}} placeholder="instagram" />
                                </div>
                                <div style={{width: '45%', display: 'flex', height: '40px', border: '1px solid gray', borderRadius: '10px'}}>
                                    <div style={{width: '50px', borderRadius: '10px 0 0 10px', backgroundColor: 'lightgray', height: '40px'}}></div>
                                    <input type="text" style={{width: '100%', borderRadius: '0 10px 10px 0'}} placeholder="instagram" />
                                </div>
                                <div style={{width: '45%', display: 'flex', height: '40px', border: '1px solid gray', borderRadius: '10px'}}>
                                    <div style={{width: '50px', borderRadius: '10px 0 0 10px', backgroundColor: 'lightgray', height: '40px'}}></div>
                                    <input type="text" style={{width: '100%', borderRadius: '0 10px 10px 0'}} placeholder="instagram" />
                                </div>
                                <div style={{width: '45%', display: 'flex', height: '40px', border: '1px solid gray', borderRadius: '10px'}}>
                                    <div style={{width: '50px', borderRadius: '10px 0 0 10px', backgroundColor: 'lightgray', height: '40px'}}></div>
                                    <input type="text" style={{width: '100%', borderRadius: '0 10px 10px 0'}} placeholder="instagram" />
                                </div>
                            </div>
                        </DataFlex>
                        <DataFlex>
                            <DataTitle>Notification</DataTitle>
                            <div style={{width: '100%', fontFamily: 'Avenir', fontSize: '14px', margin: '0 0 30px 0', display: 'flex', justifyContent: 'space-between', border: '1px solid #000', borderRadius: '10px', padding: '20px'}}>
                                <div style={{width: '80%'}}>
                                I wish to receive newsletters, promotions and news from the Viou community
                                </div>
                                <div style={{width: '20%'}}></div>
                            </div>

                            <div style={{width: '100%', fontFamily: 'Avenir', fontSize: '14px', margin: '0 0 30px 0', display: 'flex', justifyContent: 'space-between', border: '1px solid #000', borderRadius: '10px', padding: '20px'}}>
                                <div style={{width: '80%'}}>
                                I wish to receive newsletters, promotions and news from the Viou community
                                </div>
                                <div style={{width: '20%'}}></div>
                            </div>

                        </DataFlex>
                        <DataFlex>
                        <div style={{fontFamily: 'Avenir', fontSize: '14px', color: 'gray'}}>
                        <div style={{fontWeight: 'bold', color: '#444444', fontSize: '16px'}}>Basic information on Data Protection:</div>
                         Viou stores yor data to improve our service and, with your consent, offer news, promotions and raffles, as well as projects and releases from Viou Digital. <span style={{color: '#1EAAB2'}}>More information</span>
                        </div>
                        </DataFlex>
                        </div>
                    </ProfileDetails>
                </ProfileContainer>
            </ProfileWrapper>
        </MyLayout>
    )
}

export default index
