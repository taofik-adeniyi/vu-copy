import React, { useState } from 'react'
import MyLayout from '../comps/MyLayout'
import Tips from '../comps/Tips'
import { StyledInputText, StyledSelectTag, StyledTextArea } from '../styled/register'
import { InputContainer, InputTitle, StyledGroup, StyledLabel, StyledRow, StyledRowColumnOne, StyledRowColumnTwo } from '../styled/request'
import { StyledButton } from './global-styles'
import Modal from '../comps/Modal'
import { scroll2Top } from '../utils/scroll'


interface RowType {
    children: any;
    rad?: string;
    tips?: any;
}
const Row = (prop: RowType) => {
    return (
        <StyledRow>
                    <StyledRowColumnOne radius={prop.rad}>{prop.children}</StyledRowColumnOne>
                    <StyledRowColumnTwo>{prop.tips}</StyledRowColumnTwo>
        </StyledRow>
    )
}
const Requestshoot = () => {
    const [sendRequest, setSendRequest] = useState(false)
    const handleRequest = (e: any) => {
        e.preventDefault()
        scroll2Top(100)
        setSendRequest(!sendRequest)
    }
    return (
        <>
        {
            sendRequest && <Modal width="600px">
            <div style={{textAlign :'center'}}>
            <h1 style={{fontFamily: 'Overlock', fontSize: '30px'}}>Shoot Request Submitted Successfully</h1>
            <div style={{color: '#3F3F3F', margin : '20px 0', fontFamily: 'Open Sans', fontSize: '15px'}}>
            Your link is generated, would you like to share this with your network
            </div>
            </div>
        </Modal>
        }
        
        <MyLayout>
            <div style={{width: '100%', backgroundColor: '#fff', padding: '30px 0'}}>
                <div style={{width: '90%', display: 'flex', margin: '0 auto 10px auto'}}>
                <div style={{width: '100%', minHeight: '300px', display: 'flex', flexDirection: 'column'}}>
                    <h1 style={{margin: '0', padding: '20px 0', fontFamily: 'Overlock'}}>Request a Shoot</h1>
                    <Row tips={<Tips />}>
                    <InputContainer>
                        <StyledLabel htmlFor="title">
                        <InputTitle>Title</InputTitle>
                        </StyledLabel>
                        <StyledInputText placeholder="title" />
                        </InputContainer>
                    </Row>
                    <Row>
                    <InputContainer>
                        <StyledLabel htmlFor="description">
                        <InputTitle>
                            Describe the photo/video shoot you will like to request - please be as detailed as possible:
                        </InputTitle>
                            </StyledLabel>
                        <StyledTextArea placeholder="I'm looking for">
                        </StyledTextArea>
                        <div>
                        <button>attach files</button>
                        </div>
                        </InputContainer>
                    </Row>
                     
                    
                        <Row tips={<Tips />}>
                        <InputContainer>
                        <StyledLabel>
                        <InputTitle>Choose a category:</InputTitle>
                        </StyledLabel>
                        <div style={{display: 'flex', gap: '20px'}}>
                            <StyledSelectTag>
                                <option>one</option>
                            </StyledSelectTag>
                            <StyledSelectTag>
                                <option>one</option>
                            </StyledSelectTag>
                        </div>
                        </InputContainer>
                        </Row>

                       <Row tips={<Tips />}>
                       <InputContainer>
                        <div style={{display: 'flex', gap: '20px'}}>
                                <div>
                                <StyledLabel>
                            <InputTitle>
                                    Location
                            </InputTitle>
                                </StyledLabel>
                                <StyledInputText placeholder="location" />
                                </div>
                                <div>
                                <StyledLabel>
                            <InputTitle>
                                    Company Name
                            </InputTitle>
                                </StyledLabel>
                                <StyledInputText placeholder="Company Name" />
                                </div>
                        </div>
                        </InputContainer>
                       </Row>

                       <Row tips={<Tips />}>
                       <InputContainer>
                        <StyledLabel htmlFor="duration">
                            <InputTitle>Duration</InputTitle>
                        </StyledLabel>
                        <StyledGroup>
                        <div>24 Hours</div>
                            <div>3 days</div>
                            <div>7 days</div>
                            <div>Other</div>
                        </StyledGroup>
                       
                        </InputContainer>
                       </Row>

                        <Row tips={<Tips />}>
                        <InputContainer border="none">
                        <StyledLabel htmlFor="budget">
                        <InputTitle>What is your budget for this service?</InputTitle>
                        </StyledLabel>
                        <StyledInputText placeholder="budget" id="budget" />
                        </InputContainer>
                        </Row>
                        <Row>
                        <div style={{display: 'flex', justifyContent: 'flex-end', marginBottom: '20px', padding: '20px 20px 30px 20px'}}>
                            <StyledButton background="#1EAAB2" hcolor="black" hover="black" onClick={handleRequest}>submit request</StyledButton>
                        </div>

                        </Row>
                </div>
                </div>
            </div>
        </MyLayout>
        </>
    )
}

export default Requestshoot
