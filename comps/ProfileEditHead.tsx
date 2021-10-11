import React from 'react'
import { ProfileEditBase } from '../styled/profile'

type EditType = {
    title?: string;
    description?: string;
    required?: boolean;
}
const ProfileEditHead = ({title, description, required}:any) => {
    return (
            <ProfileEditBase>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <h1 style={{fontFamily: 'Overlock', fontSize: '36px', fontWeight: 'bold'}}>{title}</h1>
                    <p style={{fontFamily: 'Avenir', width: '60%', fontSize: '16px'}}>{description}</p>
                </div>
                <div style={{fontFamily: 'Avenir', minWidth: '150px', fontSize: '14px', paddingBottom: '10px'}}>
                    {required && 'Required Infomation'}
                </div>
            </ProfileEditBase>
    )
}

export default ProfileEditHead
