import Link from "next/link";

function Home(){
    return (
        <div>
            <h1>
                Home Page
            </h1>
            <br/>
            
            <Link legacyBehavior href={'/nestedpageblog'}>
            <h1>Nested Page Blog</h1> 
            </Link>
            <Link legacyBehavior href={'/dynamicroutesproduct'}>
                <h1>Dynamic Routes Product</h1>
            </Link>
            <Link legacyBehavior href={'/nesteddynamicroutesproduct/'}>
               <h1>Nested Dynamic Routes Product</h1>
            </Link>
            <Link legacyBehavior href={'/catchalldocs/feature1'}>
                <h1>Catch All Docs</h1>
            </Link>
        </div>
    )
}
export default Home;