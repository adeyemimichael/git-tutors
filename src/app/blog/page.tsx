import Link from "next/link"
export default function (){
    return (
        <div>

            <h1>Blog post are available here </h1>
            <Link href="/blog/first">first post  </Link>
            <Link href="/blog/second">second post  </Link>

        </div>
    )
}