import Link from "next/link";

function index() {
    return (
        <div>
            <Link legacyBehavior href={'/SSR/news'}>
                <h1>NEWS</h1>
            </Link>
        </div>
    );
}

export default index;