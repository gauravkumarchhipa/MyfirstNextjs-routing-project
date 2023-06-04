const Title = ({ articles, title }) => {
    return (
        <>
            <h1>
                showing news for title <i>{title}</i>
            </h1>
            {
                articles.map((data, i) => {
                    return (
                        <>
                            <h2>
                                {data.id}
                            </h2>
                            <p>{data.body}</p>
                            <hr />
                        </>
                    )
                })
            }
        </>
    )
}
export default Title

export async function getServerSideProps(context) {
    const { params, req, res, query } = context
    console.log(req.headers.cookie)
    console.log(query, "query")
    res.setHeader('Set-Cookie', ['name=Gaurav'])
    const { title } = params
    const response = await fetch(`http://localhost:4000/news?title=${title}`)
    const data = await response.json()
    return {
        props: {
            articles: data,
            title,
        },
    }
}