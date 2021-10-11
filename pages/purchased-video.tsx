import React from 'react'
import Folder from '../comps/Folder'
import MyLayout from '../comps/MyLayout'
import RequestContainer from '../comps/RequestContainer'

const purchasedvideo = () => {
    return (
        <MyLayout>
            <Folder title="Purchased Videos and Images" description="Organize your go-to Expert and favorite Viou creators into a custom list" />
            <RequestContainer/>
        </MyLayout>
    )
}

export default purchasedvideo
