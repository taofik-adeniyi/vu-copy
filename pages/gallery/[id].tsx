import React from 'react'
import Folder from '../../comps/Folder'
import MyLayout from '../../comps/MyLayout'
import { RequestShoot } from '../../styled/styles'
import { StyledButton } from '../global-styles'

const galleryimage = () => {
    return (
        <MyLayout>
            <Folder title="More footage from the same shoot" />
            <hr/>
            <Folder title="Similar videos from other Viou creators" />
            <RequestShoot>
                <div style={{width: '500px', margin: '0 auto'}}>
                <h4 style={{fontSize: '14px', fontFamily: 'Avenir'}}>Do you have a custom brief?</h4>
                <p style={{fontSize: '22px', padding: '20px', fontWeight: 'bold', fontFamily: 'Overlock'}}>
                Be spoilt for options by get ting multiple entries and representations from our vast community of creators when you create custom requests.
                </p>
                <StyledButton background="#1EAAB2" width="300px">request a shoot</StyledButton>
                </div>
            </RequestShoot>
        </MyLayout>
    )
}

export default galleryimage
