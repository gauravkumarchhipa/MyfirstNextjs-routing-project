import { useRouter } from "next/router";
function Product({ product }) {
    const router = useRouter();

    if (router.isFallback) {
        return <h1>Loading...</h1>
    }
    return (
        <>
            <h2>
                {product.id} {product.title}
            </h2>
            <p>{product.body}</p>
        </>
    );
}
export default Product;
export async function getStaticPaths() {
    return {
        paths: [
            {
                params: { productId: '1' }
            },
            {
                params: { productId: '2' }
            },
            {
                params: { productId: '3' }
            },
        ],
        fallback: true,

    }

}

export async function getStaticProps(context) {
    const { params } = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.productId}`);
    const data = await response.json();
    if (!data.id) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            post: data,
        }
    }
}
