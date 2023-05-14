import Link from "next/link";

function index() {
    return (
        <div>
            <Link legacyBehavior href={'/SSG/post'}>
                <h1>post </h1>
            </Link>
        </div>
    );
}

export default index;