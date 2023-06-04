import React from 'react'
import { useState } from 'react'
const CommentsPage = () => {
    const [comments, setComments] = useState([])
    const fetchComments = async () => {
        const response = await fetch('/api/getrequest/comments')
        const data = await response.json()
        setComments(data);
    }
    return (
        <div>
            <button onClick={fetchComments}>Load Comments</button>
            {
                comments.map((data) => {
                    return (
                        <div key={data.id}>
                            {data.id} {data.text}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CommentsPage