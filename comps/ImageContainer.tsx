import React from 'react'
import Image from 'next/image'
import styles from '../styles/imagecontainer.module.scss'

const ImageContainer = ({children, small}:any) => {
    return (
        <div className={small ? styles.profiletab : styles.wrapper}>
            {children}
        </div>
    )
}

export default ImageContainer
