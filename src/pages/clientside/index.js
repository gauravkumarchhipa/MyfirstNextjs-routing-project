import Link from 'next/link'
import React from 'react'

const index = () => {
    return (
        <>
            <Link href={'/clientside/dashboard'}>
                <h1> Dashboard </h1>
            </Link>
            <Link href={'/clientside/SWRdashboard'}>
                <h1>SWR Dashboard </h1>
            </Link>
            <Link href={'/clientside/clientside'}>
                <h1>clientside events </h1>
            </Link>
        </>
    )
}

export default index
