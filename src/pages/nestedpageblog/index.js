import Link from "next/link";
function Blog() {
    return (
        <div>
            <h1>Bolg</h1>
            <br/>
            <h1>
                <Link legacyBehavior href="/nestedpageblog/first">
                    <a>Blog1</a>
                </Link>
            </h1>
            <h1>
                <Link legacyBehavior href="/nestedpageblog/second">
                    <a>Blog2</a>
                </Link>
            </h1>
            
        </div>
    );
}

export default Blog;