import Link from "next/link"

export default function Home (){
    return (
        <div>
            <h1 className="text-sm text-gray-100">Welcome Home! </h1>
            <p>Now that you are home what next?</p>
<p>Go to <Link href="/about">About</Link></p>
or <p><Link href="/profile">Profile</Link></p><br />
<h3><Link href="/blog">Blog post </Link></h3>
<Link href="products">Products</Link>
            </div>
    )
}