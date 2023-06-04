import Link from 'next/link'
import React from 'react'

const index = () => {
    return (
        <div>
            <Link href={'/apipractice/comments'}>
                <h1> Comments </h1>
            </Link>
        </div>
    )
}

export default index