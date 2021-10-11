import React, { useState } from 'react'
import MyLayout from '../../comps/MyLayout'
import ProfileEditHead from '../../comps/ProfileEditHead'
import { ProfileDataWrapper, StyledOl } from '../../styled/profile'
import { ProfileWrapper } from '../../styled/profile'
import { StyledSelectTag,  StyledTextArea } from '../../styled/register'
import { NewStyledInput, NewStyledTextArea, StyledDisplayPicture, StyledImageContainer } from '../../styled/styles'
import { StyledButton } from '../global-styles'
import Image from 'next/image'
import Tips from '../../comps/Tips'


const verify = () => {
    return (
        <span style={{color: '#34C581', fontStyle: 'italic', fontSize: '12px'}}>Verified</span>
    )
}
const edit = () => {
    const [step, setStep] = useState(4)
    return (
        <MyLayout>
            <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', backgroundColor: '#E0E0E0', padding: '10px 40px'}}>
                <div>
                    <StyledOl>
                        <li>Personal info</li>
                        <li>Professional info</li>
                        <li>Linked Accounts</li>
                        <li>Account Security</li>
                    </StyledOl>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', width: '180px'}}>
                    <div style={{fontFamily: 'Overlock', padding: '.5em 0', fontWeight: 'bold'}}>Completion Rate: 60%</div>
                    <div style={{backgroundColor: '#646464', height: '1em', width: '100%', borderRadius: '10px'}}>
                        <div style={{backgroundColor: '#93D500', width: '60%', height: '1em', borderRadius: '10px 0 0 10px'}}></div>
                    </div>
                </div>
            </div>
            <ProfileWrapper>
                {
                    step === 1 && <>
                    <ProfileEditHead 
                    title="Personal Data" 
                        description="Tell us a bit about yourself. This information will appear on your public profile, so that potential clients can get to know you better" 
                            required={true}
                        />

                        <ProfileDataWrapper>
                        <div style={{margin: '100px 0 50px 0'}}>
                            <StyledDisplayPicture rounded="50%" width="120px" height="120px">
                                <Image 
                                src="/mydp.svg"
                                layout="fill"
                                loading="lazy"
                                />
                            </StyledDisplayPicture>
                            </div>
                            <div style={{margin: '30px 0'}}>
                            <NewStyledInput width="50%" placeholder="Full Name" />
                            </div>
                            <div style={{margin: '30px 0'}}>
                            <NewStyledInput width="50%" placeholder="Location" />
                            </div>
                            <div style={{margin: '30px 0'}}>
                            <NewStyledInput width="50%" placeholder="Phone Number" />
                            </div>
                            <div style={{margin: '30px 0'}}>
                            <NewStyledTextArea width="50%" placeholder="Company Profile" />
                            </div>
                            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                <StyledButton hover="#93D500" hcolor="#000" background="#93D500" onClick={()=> setStep(2)}>save and continue</StyledButton>
                            </div>
                        </ProfileDataWrapper>
                        </>
                }

                {
                    step === 2 && <>
                    <ProfileEditHead 
                    title="Professional Data" 
                        description="This is your time to shine. Let potential buyers know what you do best and how you gained your skills, certifications and experience." 
                            required={true}
                        />
                        <ProfileDataWrapper>
                            <div style={{display: 'flex', gap: '20px', margin: '5em 0', fontFamily: 'Avenir'}}>
                                <div style={{fontSize: '15px'}}>I am a</div>
                                <div style={{marginLeft: '100px'}}>
                                    <StyledSelectTag>
                                        <option>Select Gender</option>
                                        <option>Female</option>
                                        <option>Male</option>
                                    </StyledSelectTag>
                                </div>
                            </div>
                            <div style={{display: 'flex', margin: '5em 0', fontFamily: 'Avenir'}}>
                                <div style={{fontSize: '15px'}}>Expertise level</div>
                                <div style={{display :'flex', width: '500px', justifyContent: 'space-between', marginLeft: '100px'}}>
                                    <div>
                                    <StyledDisplayPicture width="80px" height="80px">
                                    <Image 
                                src="/beginners.svg"
                                layout="fill"
                                loading="lazy"
                                />
                                        </StyledDisplayPicture>
                                        <p style={{fontFamily: 'Avenir', fontSize: '14px'}}>Newbie</p>
                                    </div>
                                    <div>
                                    <StyledDisplayPicture width="80px" height="80px">
                                    <Image 
                                src="/enthusiast.svg"
                                layout="fill"
                                loading="lazy"
                                />
                                        </StyledDisplayPicture>
                                        <p style={{fontFamily: 'Avenir', fontSize: '14px'}}>Enthusiast</p>
                                    </div>
                                    <div>
                                    <StyledDisplayPicture width="80px" height="80px">
                                    <Image 
                                src="/expert.svg"
                                layout="fill"
                                loading="lazy"
                                />
                                        </StyledDisplayPicture>
                                        <p style={{fontFamily: 'Avenir', fontSize: '14px'}}>Expert</p>
                                    </div>
                                </div>

            

</div>

<div style={{display: 'flex', margin: '5em 0', fontFamily: 'Avenir'}}>
                                    <div style={{fontSize: '15px'}}>Skills</div>
                                    <div style={{display :'flex', gap: '80px', marginLeft: '100px'}}>
                                    <div>
                                    <NewStyledInput placeholder="skills" />
                                    </div>
                                    <Tips 
                                        title="Attach Virtual Card" 
                                        description="Enter the top 5 Photography and Video skills that you have mastered." 
                                        eg="Suggestions: Photo editing, Video editing, Adobe photoshop, Lightroom, Portrait Photography" />
                                    </div>
                                    </div>

                                    <div style={{display: 'flex', margin: '5em 0', fontFamily: 'Avenir'}}>
                                    <div style={{fontSize: '15px'}}>Gear</div>
                                    <div style={{display :'flex', gap: '80px', marginLeft: '100px'}}></div>
                                    </div>

                                    <div style={{display: 'flex', margin: '5em 0', fontFamily: 'Avenir'}}>
                                    <div style={{fontSize: '15px'}}>Website</div>
                                    <div style={{display :'flex', gap: '80px', marginLeft: '100px'}}>
                                        <NewStyledInput placeholder="website" />
                                    </div>
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                <StyledButton hover="#93D500" hcolor="#000" background="#93D500" onClick={()=> setStep(3)}>save and continue</StyledButton>
                            </div>
                        </ProfileDataWrapper>
                    </>
                }

                {
                    step === 3 &&
                    <>
                    <ProfileEditHead 
                    title="Linked Accounts" 
                        description="Tell us a bit about yourself. This information will appear on your public profile, so that potential clients can get to know you better" 
                            required={true}
                        />
                        <ProfileDataWrapper>
                            <div style={{borderBottom: '1.3px solid rgba(168, 168, 168, 0.59)', fontFamily: 'Poppins', padding: '0 0 20px 0'}}>
                            <h3 style={{fontFamily: 'Overlock'}}>Your Social Presence</h3>
                            <p style={{color: '#B9B9B9', fontStyle: 'italic'}}>Private</p>
                            <div style={{display: 'flex', margin: '35px 0', justifyContent: 'space-between'}}>
                                <div style={{fontSize: '14px'}}>Google {verify()}</div>
                                <div><StyledButton hover="#93D500" hcolor="#000" background="#EDFAF0" width="150px">connected</StyledButton></div>
                            </div>
                            <div style={{display: 'flex', margin: '35px 0', justifyContent: 'space-between'}}>
                                <div style={{fontSize: '14px'}}>Facebook </div>
                                <div><StyledButton background="##EFEFEF" width="150px">connect</StyledButton></div>
                            </div>
                            <div style={{display: 'flex', margin: '35px 0', justifyContent: 'space-between'}}>
                                <div style={{fontSize: '14px'}}>Twitter </div>
                                <div><StyledButton hover="#93D500" hcolor="#000" background="##EFEFEF" width="150px">connect</StyledButton></div>
                            </div>
                            </div>

                            <div style={{borderBottom: '1.3px solid rgba(168, 168, 168, 0.59)', margin: '30px 0', fontFamily: 'Poppins', padding: '20px 0 20px 0'}}>
                            <h3 style={{fontFamily: 'Overlock'}}>Your Social Presence</h3>
                            <p style={{color: '#B9B9B9', fontStyle: 'italic'}}>Private</p>
                            <div style={{display: 'flex', margin: '35px 0', justifyContent: 'space-between'}}>
                                <div style={{fontSize: '14px'}}>Dribble {verify()}</div>
                                <div><StyledButton hover="#93D500" hcolor="#000" background="#EDFAF0" width="150px">connected</StyledButton></div>
                            </div>
                            <div style={{display: 'flex', margin: '35px 0', justifyContent: 'space-between'}}>
                                <div style={{fontSize: '14px'}}>Vimeo</div>
                                <div><StyledButton hover="#93D500" hcolor="#000" background="##EFEFEF" width="150px">connect</StyledButton></div>
                            </div>
                            <div style={{display: 'flex', margin: '35px 0', justifyContent: 'space-between'}}>
                                <div style={{fontSize: '14px'}}>Behance</div>
                                <div><StyledButton hover="#93D500" hcolor="#000" background="##EFEFEF" width="150px">connect</StyledButton></div>
                            </div>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                <StyledButton hover="#93D500" hcolor="#000" background="#93D500" onClick={()=> setStep(4)}>save and continue</StyledButton>
                            </div>
                        </ProfileDataWrapper>
                        </>
                }

{
                    step === 4 &&
                    <>
                    <ProfileEditHead 
                    title="Account Security" 
                        description="Tell us a bit about yourself. This information will appear on your public profile, so that potential clients can get to know you better" 
                            required={true}
                        />
                        <ProfileDataWrapper>
                        <div style={{borderBottom: '1.3px solid rgba(168, 168, 168, 0.59)', margin: '30px 0', fontFamily: 'Poppins', padding: '20px 0 20px 0'}}>
                        <div style={{display: 'flex', margin: '35px 0', justifyContent: 'space-between'}}>
                                <div style={{fontSize: '14px'}}>Email  Private {verify()}</div>
                                <div><StyledButton hover="#93D500" hcolor="#000" transform="capitalize" background="#EDFAF0" width="150px">Verified</StyledButton></div>
                            </div>
                            <div style={{display: 'flex', margin: '35px 0', justifyContent: 'space-between'}}>
                                <div style={{fontSize: '14px'}}>Phone Number Private<br/>We’ll never share your phone number</div>
                                <div><StyledButton hover="#93D500" hcolor="#000" transform="capitalize" background="#EFEFEF" width="180px">Add Phone Number</StyledButton></div>
                            </div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'flex-end', paddingTop: '80px'}}>
                                <StyledButton hover="#93D500" hcolor="#000" background="#93D500" onClick={()=> setStep(4)}>save and continue</StyledButton>
                            </div>
                            </ProfileDataWrapper>
                            </>

}

            </ProfileWrapper>
        </MyLayout>
    )
}

export default edit
