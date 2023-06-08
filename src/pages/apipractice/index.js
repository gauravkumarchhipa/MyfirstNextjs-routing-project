import Link from 'next/link'
import React from 'react'

const index = () => {
    return (
        <div>
            <Link href={'/apipractice/comments'}>
                <h1>get Comments </h1>
            </Link>
            <Link href={'/apipractice/postrequest'}>
                <h1>post Comments </h1>
            </Link>
        </div>
    )
}

export default index