import Link from "next/link";
import { useRouter } from 'next/router';
function Review() {
    const router = useRouter();
    const {productId} = router.query
    return (
        <div>
            <h1>Details about product {productId}</h1>
            <Link legacyBehavior href="/">
                <h1><a>Select Review</a></h1>
            </Link>
            <h1>
                <Link legacyBehavior href="/nesteddynamicroutesproduct/1/review/1">
                    <a>Review 1</a>
                </Link>
            </h1>
            <h1>
                <Link legacyBehavior href="/nesteddynamicroutesproduct/1/review/2">
                    <a>Review 2</a>
                </Link>
            </h1>
            <h1>
                <Link legacyBehavior href="/nesteddynamicroutesproduct/1/review/3">
                    <a>Review 3</a>
                </Link>
            </h1>
        </div>
    );
}
export default Review;