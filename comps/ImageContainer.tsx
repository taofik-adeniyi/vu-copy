import React from 'react'
import Image from 'next/image'
import styles from '../styles/imagecontainer.module.scss'

const ImageContainer = ({children}:any) => {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}

export default ImageContainer
