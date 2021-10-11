import React from 'react'
import MyLayout from '../comps/MyLayout'
import { StyledTable } from '../styled/GlobalStyles'
import { StyledDisplayPicture } from '../styled/styles'
import Image from 'next/image'

const managerequest = () => {
    return (
        <MyLayout>
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
