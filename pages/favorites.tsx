import React from 'react'
import Folder from '../comps/Folder'
import MyLayout from '../comps/MyLayout'

const favorites = () => {
    return (
        <MyLayout>
            <Folder title="Recently Favorited Images and Videos" description="Here are list of interesting images and videos that fascinate you, you can organize them in to a link" />
            <Folder title="Purchased Videos and Images" description="Organize your go-to Expert and favorite Viou creators into a custom list" />
        </MyLayout>
    )
}

export default favorites
