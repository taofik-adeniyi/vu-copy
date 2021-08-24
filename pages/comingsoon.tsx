import React from 'react'
import Head from 'next/head'
import ComingSoon from '../components/comingsoon'

const comingsoon = () => {
    return (
        <>
        <Head>
        <title>Coming Soon</title>
        <meta name="description" content="Viou digital platform for content creator across africa" />
      </Head>
      <div>
         <ComingSoon />   
      </div>
        </>
    )
}

export default comingsoon
