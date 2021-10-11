import React from 'react'
import MyLayout from '../comps/MyLayout'
import { CustomShoot, StyledTable } from '../styled/GlobalStyles'
import { NewStyledTextArea, StyledDisplayPicture } from '../styled/styles'
import Image from 'next/image'
import Modal from '../comps/Modal'
import Portal from '../comps/hoc/Portal'
import { StyledCancelIcon } from '../styled/icons'
import Tips from '../comps/Tips'
import { StyledButton } from './global-styles'
import Toggle from '../comps/Toggle'
import VirtualCard from '../comps/VirtualCard'

const managerequest = () => {
    return (
        <MyLayout>
            <Portal>
            <Modal cancel={false} width="90%" height="100%">
                <CustomShoot>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', width: '90%', margin: '0 auto'}}>
                    <div><h1 style={{fontFamily: 'Overlock', fontSize: '32px'}}>Create a custom Shoot</h1></div>
                    <div>
                        <StyledCancelIcon/>
                    </div>
                </div>
                <div style={{background: '#E1E1E1', width: '100%', padding: '20px 5%', display: 'flex'}}>
                    <div>
                    <StyledDisplayPicture width="60px" height="60px" rounded="50%">
                        <Image src="/mydp.svg" layout="fill" loading="lazy"/>
                    </StyledDisplayPicture>
                    </div>
                        <div style={{padding: '20px', marginLeft: '30px', fontFamily: 'Open Sans', backgroundColor: '#E5FEFF'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolores.
                        </div>
                </div>
                <div style={{minHeight: '400px', borderBottom: '1px solid #686868', fontFamily: 'Open Sans', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                    <div style={{display: 'flex', gap: '20px'}}>
                        <VirtualCard/>
                        <Tips title="Attach Virtual Card" description="Choose the category and subcategory that best fits your shoot request." eg="For example:
If you are looking for a logo, you should choose 'Logo Design' within the 'Graphics & Design' category." />
                    </div>
                    <div style={{fontSize: '18px', marginTop :'50px'}}>
                        <input type="checkbox"/>&nbsp;
                    Tick the Box to include your Virtual Business Card
                    </div>
                </div>
                <div style={{ padding: '50px 0', borderBottom: '1px solid #686868', fontFamily: 'Open Sans', display: 'flex', justifyContent: 'center'}}>
                    <NewStyledTextArea placeholder="Describe Your Offer" height="130px" width="80%">
                    {/* 0/1500 CHARS MAX */}
                    </NewStyledTextArea>
                </div>
                <div style={{padding: '20px 40px', borderBottom: '1px solid #686868', fontFamily: 'Open Sans', display: 'flex', justifyContent: 'space-between'}}>
                    <div>Total Shoot Offer Amount</div>
                    <div style={{border: '1px solid #D1CFCF', padding: '10px 20px', minWidth: '120px', fontFamily: 'Open Sans', fontSize: '13px'}}>$10,000 max</div>
                </div>
                <div style={{padding: '20px 40px', borderBottom: '1px solid #686868', fontFamily: 'Open Sans', display: 'flex', justifyContent: 'space-between'}}>
                    <div>Shoot Duration</div>
                    <div style={{border: '1px solid #D1CFCF', padding: '10px 20px', minWidth: '120px', fontFamily: 'Open Sans', fontSize: '13px'}}>1 day</div>
                </div>
                <div style={{padding: '20px 40px', borderBottom: '1px solid #686868', fontFamily: 'Open Sans', display: 'flex', justifyContent: 'space-between'}}>
                    <div>Ask for more Shoot Informations</div>
                    <div>
                        <Toggle/>
                    </div>
                </div>
                <div style={{display: 'flex', padding: '20px 40px', justifyContent: 'space-between'}}>
                    <StyledButton hcolor="#000" hover="#000">Back</StyledButton>
                    <StyledButton background="#93D500" hcolor="#000" hover="#000">submit offer</StyledButton>
                </div>
                </CustomShoot>
            </Modal>
            </Portal>
            <div style={{color: 'white', width: '90%', margin: '40px auto'}}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div><h1 style={{fontFamily: 'Overlock'}}>Shoot Request</h1></div>
                    <div><input type="text" placeholder="Search requests" style={{outline: 'none', background: 'transparent', padding: '10px', border: 'none', color: 'white', borderBottom: '1px solid gray', width: '200px'}} /></div>
                </div>

                <div style={{display: 'flex', padding: '0 0 10px 0', borderBottom: '1px solid #C4C4C4', fontFamily: 'Overlock', margin: '50px 0', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex'}}>
                        <div style={{padding: '0 10px'}}>ACTIVE<span style={{background: '#1EAAB2', margin: '0 10px', display: 'inline-block', borderRadius: '10px', textAlign: 'center', minWidth: '30px', padding: '3px'}}>100</span></div>
                        <div style={{padding: '0 10px'}}>SENT REQUEST<span style={{background: '#1EAAB2', margin: '0 10px', display: 'inline-block', borderRadius: '10px', minWidth: '30px', textAlign: 'center', padding: '3px'}}>25</span></div>
                    </div>
                    <div>15 Offers left today</div>
                </div>

                <div style={{background: '#17191C', padding: '10px 0'}}>
                    <div style={{display: 'flex', justifyContent :'space-between', alignItems: 'center', padding: '10px 20px', borderBottom: '1px solid #C4C4C4'}}>
                        <div style={{fontSize: '19px', fontFamily: 'Overlock'}}>BUYER'S SHOOT REQUEST</div>
                        <div style={{border: '1px solid #D1CFCF', padding: '10px 20px', fontFamily: 'Open Sans', fontSize: '13px'}}>All Subcategories</div>
                    </div>
                    <StyledTable>
                        <tr>
                            <th>DATE</th>
                            <th>SHOOT REQUEST</th>
                            <th>OFFERS</th>
                            <th>DURATION</th>
                            <th>BUDGET</th>
                        </tr>
                        <tr>
                            <td>Oct 08, 2021</td>
                            <td style={{display: 'flex', gap: '20px'}}>
                                <div>
                                <StyledDisplayPicture width="50px" height="50px" rounded="50%">
                                    <Image src="/mydp.svg" layout="fill" loading="lazy" />
                                </StyledDisplayPicture>
                                </div>
                               <div style={{fontSize: '12px', textAlign: 'start', fontFamily: 'Open Sans'}}>
                               Get access to upcoming events, exclusive courses, articles, Latest events and hangouts, Podcast, competitions and more...<span style={{color:'#1EAAB2', cursor: 'pointer'}}>see more</span></div> 
                            </td>
                            <td>0</td>
                            <td>5 Days</td>
                            <td>$70</td>
                        </tr>
                        <tr>
                            <td>Oct 08, 2021</td>
                            <td style={{display: 'flex', gap: '20px'}}>
                                <div>
                                <StyledDisplayPicture width="50px" height="50px" rounded="50%">
                                    <Image src="/mydp.svg" layout="fill" loading="lazy" />
                                </StyledDisplayPicture>
                                </div>
                               <div style={{fontSize: '12px', textAlign: 'start', fontFamily: 'Open Sans'}}>
                               Get access to upcoming events, exclusive courses, articles, Latest events and hangouts, Podcast, competitions and more...<span style={{color:'#1EAAB2', cursor: 'pointer'}}>see more</span></div> 
                            </td>
                            <td>0</td>
                            <td>5 Days</td>
                            <td>$70</td>
                        </tr>
                        <tr>
                            <td>Oct 08, 2021</td>
                            <td style={{display: 'flex', gap: '20px'}}>
                                <div>
                                <StyledDisplayPicture width="50px" height="50px" rounded="50%">
                                    <Image src="/mydp.svg" layout="fill" loading="lazy" />
                                </StyledDisplayPicture>
                                </div>
                               <div style={{fontSize: '12px', textAlign: 'start', fontFamily: 'Open Sans'}}>
                               Get access to upcoming events, exclusive courses, articles, Latest events and hangouts, Podcast, competitions and more...<span style={{color:'#1EAAB2', cursor: 'pointer'}}>see more</span></div> 
                            </td>
                            <td>0</td>
                            <td>
                                <div style={{display: 'flex', gap: '5px', flexDirection: 'column'}}>
                                    <div>5 Days</div>
                                    <div style={{color: '#00F0FE', fontSize: '12px', cursor: 'pointer'}}>Remove Request</div>
                                </div>
                            </td>
                            <td>
                            <div style={{display: 'flex', gap: '5px', flexDirection: 'column', alignItems: 'center'}}>
                                    <div>$70</div>
                                    <div style={{backgroundColor: '#00B3BE', fontSize: '12px', cursor: 'pointer', color: '#000', borderRadius: '10px', display :'flex', width: 'fit-content', padding: '5px 10px'}}>Send Offer</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Oct 08, 2021</td>
                            <td style={{display: 'flex', gap: '20px'}}>
                                <div>
                                <StyledDisplayPicture width="50px" height="50px" rounded="50%">
                                    <Image src="/mydp.svg" layout="fill" loading="lazy" />
                                </StyledDisplayPicture>
                                </div>
                               <div style={{fontSize: '12px', textAlign: 'start', fontFamily: 'Open Sans'}}>
                               Get access to upcoming events, exclusive courses, articles, Latest events and hangouts, Podcast, competitions and more...<span style={{color:'#1EAAB2', cursor: 'pointer'}}>see more</span></div> 
                            </td>
                            <td>0</td>
                            <td>5 Days</td>
                            <td>$70</td>
                        </tr>
                        <tr>
                            <td>Oct 08, 2021</td>
                            <td style={{display: 'flex', gap: '20px'}}>
                                <div>
                                <StyledDisplayPicture width="50px" height="50px" rounded="50%">
                                    <Image src="/mydp.svg" layout="fill" loading="lazy" />
                                </StyledDisplayPicture>
                                </div>
                               <div style={{fontSize: '12px', textAlign: 'start', fontFamily: 'Open Sans'}}>
                               Get access to upcoming events, exclusive courses, articles, Latest events and hangouts, Podcast, competitions and more...<span style={{color:'#1EAAB2', cursor: 'pointer'}}>see more</span></div> 
                            </td>
                            <td>0</td>
                            <td>5 Days</td>
                            <td>$70</td>
                        </tr>
                        <tr>
                            <td>Oct 08, 2021</td>
                            <td style={{display: 'flex', gap: '20px'}}>
                                <div>
                                <StyledDisplayPicture width="50px" height="50px" rounded="50%">
                                    <Image src="/mydp.svg" layout="fill" loading="lazy" />
                                </StyledDisplayPicture>
                                </div>
                               <div style={{fontSize: '12px', textAlign: 'start', fontFamily: 'Open Sans'}}>
                               Get access to upcoming events, exclusive courses, articles, Latest events and hangouts, Podcast, competitions and more...<span style={{color:'#1EAAB2', cursor: 'pointer'}}>see more</span></div> 
                            </td>
                            <td>0</td>
                            <td>5 Days</td>
                            <td>$70</td>
                        </tr>
                        <tr>
                        </tr>
                    </StyledTable>
                            <div style={{display: 'flex', width: '100%', fontFamily: 'Open Sans', color: '#1EAAB2', cursor: 'pointer', padding: '20px 0', justifyContent: 'center'}}>Load More</div>
                </div>
                
            </div>
        </MyLayout>
    )
}

export default managerequest
