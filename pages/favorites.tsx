import React from 'react'
import Folder from '../comps/Folder'
import MyLayout from '../comps/MyLayout'
import RequestContainer from '../comps/RequestContainer'
import { StyledButton } from './global-styles'
import CreateNewList from '../comps/CreateNewList'

const favorites = () => {
    
    return (
        <MyLayout>
            <Folder element={CreateNewList} title="Recently Favorited Images and Videos" description="Here are list of interesting images and videos that fascinate you, you can organize them in to a link" />
            <RequestContainer/>
        </MyLayout>
    )
}

export default favorites
