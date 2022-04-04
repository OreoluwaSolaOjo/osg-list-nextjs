import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from 'react'

const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
        // Redirect users when the geet to the 404 page to the homepage after 3 seconds
        setTimeout(() => {
            router.push("/");
        }, 3000)
    }, [])
    return (
        <div className="not-found">
            <h1>Oooops...</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
        </div>
    );
}

export default NotFound;