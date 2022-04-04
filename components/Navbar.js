import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/osglist.png" width={128} height={77} />

            </div>
            <Link href="/"><a > Home</a></Link>
            <Link href="/aboutus"><a >About</a></Link>
            <Link href="/osg"><a >OSG List</a></Link>
        </nav>
    );
}

export default Navbar;
