import Link from "next/link";
function ProductList() {
    return (
        <div>
            <Link legacyBehavior href="/">
                <h1><a>Nested Dynamic Routes</a></h1>
            </Link>
            <h1>
                <Link legacyBehavior href="/nesteddynamicroutesproduct/1">
                    <a>Product 1</a>
                </Link>
            </h1>
            <h1>
                <Link legacyBehavior href="/nesteddynamicroutesproduct/2">
                    <a>Product 2</a>
                </Link>
            </h1>
            <h1>
                <Link legacyBehavior href="/nesteddynamicroutesproduct/3">
                    <a>Product 3</a>
                </Link>
            </h1>
        </div>
    );
}

export default ProductList;