import Modal from './Modal'
import React, { useState } from 'react'
import { StyledButton } from '../styled/global-styles'
import { RequestShoot } from '../styled/styles'
import { useRouter } from 'next/router'
import Portal from './hoc/Portal'


const RequestContainer = () => {
    const router = useRouter()

    const [request, setRequest] = useState(false)

    const NavigateRequest = () => {
        router.push('/request-shoot')
    }

    const handleRequest = () => {
        console.log('yes cicked')
        setRequest(!request)
    }
    return (
        <>
        {
            request && <Portal><Modal>
                <h1 style={{fontFamily: 'Overlock', fontSize: '34px'}}>Request a shoot</h1>
        <div style={{margin: '30px 0', textAlign: 'center'}}>
        <h3 style={{fontFamily: 'Avenir', fontSize: '24px'}}>I want to Request a:</h3>
        <div style={{width: '100%', fontWeight: 'bold', fontFamily: 'Avenir', margin :'10px 0 20px 0',  display: 'flex', textAlign: 'center', border: '1px solid #333', borderRadius: '10px', background: 'transparent'}}>
            <div style={{width: '50%', cursor: 'pointer', padding: '15px 0'}} onClick={NavigateRequest}>Photo Shoot</div>
            <div style={{width: '50%', cursor: 'pointer', borderRadius: '0 10px 10px 0', padding: '15px 0', height: 'fit-content', background: '#1EAAB2'}} onClick={NavigateRequest}>Video Shoot</div>
        </div>
        <p style={{fontFamily: 'Avenir', fontSize: '13px', fontWeight: 600}}>
          I will not be able to edit or cancel a request for an expert creative
          after one hour of creating the request
        </p>
        </div>
            </Modal></Portal>
        }
        <RequestShoot>
                <div style={{width: '500px', margin: '0 auto'}}>
                <h4 style={{fontSize: '14px', fontFamily: 'Avenir'}}>Do you have a custom brief?</h4>
                <p style={{fontSize: '22px', padding: '20px', fontWeight: 'bold', fontFamily: 'Overlock'}}>
                Be spoilt for options by get ting multiple entries and representations from our vast community of creators when you create custom requests.
                </p>
                <StyledButton background="#1EAAB2" width="300px" hover="#1EAAB2" hcolor="#000" onClick={handleRequest}>request a shoot</StyledButton>
                </div>
            </RequestShoot>
            </>
    )
}

export default RequestContainer
