import Link from "next/link";
function ProductList() {
    return (
        <div>
            <Link legacyBehavior href="/">
                <h1><a> Home</a></h1>
            </Link>
            <h1>
                <Link legacyBehavior href="/dynamicroutesproduct/1">
                    <a>Product 1</a>
                </Link>
            </h1>
            <h1>
                <Link legacyBehavior href="/dynamicroutesproduct/2">
                    <a>Product 2</a>
                </Link>
            </h1>
            <h1>
                <Link legacyBehavior href="/dynamicroutesproduct/3">
                    <a>Product 2</a>
                </Link>
            </h1>
        </div>
    );
}

export default ProductList;