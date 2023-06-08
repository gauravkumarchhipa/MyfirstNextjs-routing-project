import React from 'react'
import { useState } from 'react'
const CommentsPage = () => {
    const [comments, setComments] = useState([])
    const [postData, setPostData] = useState("");
    const fetchComments = async () => {
        const response = await fetch('/api/getrequest/comments')
        const data = await response.json()
        setComments(data);
    }
    const submitComment = async () => {
        const response = await fetch('/api/postrequest/comments', {
            method: 'POST', body: JSON.stringify({ postData }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json()
        console.log(data);
    }
    return (
        <div>
            <input type='text' value={postData} onChange={(e) => setPostData(e.target.value)} />
            <br />
            <button onClick={submitComment}>Submit</button>
            <br />
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