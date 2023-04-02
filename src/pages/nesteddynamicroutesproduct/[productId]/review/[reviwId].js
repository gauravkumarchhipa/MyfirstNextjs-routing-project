import { useRouter } from 'next/router';
function Reviewid() {
    const router = useRouter();
    const {productId,reviwId} = router.query
    return (
        <div>
            <h1>Review {reviwId} for product {productId}</h1>
        </div>
    );
}

export default Reviewid;