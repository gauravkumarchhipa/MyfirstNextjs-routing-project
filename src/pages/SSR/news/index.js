const NEwsArticleList = ({ articles }) => {
    return (
        <>
            <div>List of Nesw Articles</div>
            {
                articles.map((data, i) => {
                    return (
                        <div key={data.id}>
                            <h2>
                                {data.id} {data.title} | {data.body}
                            </h2>
                        </div>
                    )
                }
                )
            }
        </>
    )
}
export default NEwsArticleList

export async function getServerSideProps() {
    const resonse = await fetch('http://localhost:4000/news')
    const data = await resonse.json()
    return {
        props: {
            articles: data,
        }
    }
}