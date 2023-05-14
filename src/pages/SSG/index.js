import Link from "next/link";

function index() {
    return (
        <div>
            <Link legacyBehavior href={'/SSG/post'}>
                <h1>post </h1>
            </Link>
            <Link legacyBehavior href={'/SSG/allpost'}>
                <h1>All Post </h1>
            </Link>
            <Link legacyBehavior href={'/SSG/fallbacktrue'}>
                <h1>Fallback true </h1>
            </Link>
            <Link legacyBehavior href={'/SSG/fallbackblocking'}>
                <h1>Fallback blocking </h1>
            </Link>
        </div>
    );
}

export default index;