import Link from "next/link";
import { useRouter } from 'next/router';
function ProductDetail() {
    const router = useRouter();
    const productId = router.query.productId
    return (
        <div>
            <h1>Details about product {productId}</h1>
            <h1>
                <Link legacyBehavior href="/nesteddynamicroutesproduct/1/review">
                    <a>Select Review Product {productId}</a>
                </Link>
            </h1>
            
        </div>
    );
}
export default ProductDetail;