import Link from "next/link";

function PostList({ product }) {
    return (
        <>
            <h1>List of post</h1>
            {
                product.map((product) => {
                    return (
                        <div key={product.id}>
                            <Link href={`/SSG/product/${product.id}`} passHref>
                                <h2>{product.id} {product.title}</h2>
                            </Link>
                            <hr />
                        </div>
                    )
                })
            }
        </>
    );
}
export async function getStaticProps() {
    const response = await fetch('http://localhost:4000/product');
    const data = await response.json();
    return {
        props: {
            // posts: data.slice(0, 3)
            product: data
        }
    }
}

export default PostList;