import React from 'react'
import MyLayout from '../comps/MyLayout'
import styles from "../styles/home.module.scss";
import { StyledButton } from './global-styles';
import { community as comm } from '../const/index'


  import TheBox from '../comps/TheBox'
import CommunityCard from '../comps/CommunityCard';
const community = () => {
    return (
        <MyLayout>
            <div className={styles.firstwrapper}>
       <div style={{width: '45%', height: '100%', padding: '250px 0 50px 80px'}}>
       <div style={{fontFamily: 'Overlock', fontWeight: 'bold', fontSize: '55px', lineHeight: '1em', color: 'white'}}>Welcome to the <br/>Viou community</div>
        <p style={{fontFamily: 'Avenir', color :'black', marginTop: '30px', lineHeight: '1.4rem'}}>
        Get access to uppcoming events, exclusive courses, articles, pLatest events and hangouts, Podcast, competitions and more.
        </p>

        <div style={{margin: '50px 0', display: 'flex', columnGap: '20px', width: '100%'}}>
        <StyledButton background="#1EAAB2"  width="250px" color="black">view events</StyledButton>
        </div>
       </div>
       <div style={{width: '55%'}}>

       </div>
      </div>
     <div style={{width: '100%', padding: '50px 50px', display: 'flex', gap: '20px', overflow: 'auto'}}>
        {
            comm.map(com => {
                return (
                    <CommunityCard content={com} key={com.id} />
                )
            })
        }
     </div>
      <TheBox />
        </MyLayout>
    )
}

export default community
