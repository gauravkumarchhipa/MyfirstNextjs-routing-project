import Link from "next/link";
function index() {
    return (
        <div>
            <Link legacyBehavior href={'/StaticGeneration/StaticGenerationwithData'}>
                <h1>StaticGenerationwithData</h1>
            </Link>
        </div>
    );
}

export default index;