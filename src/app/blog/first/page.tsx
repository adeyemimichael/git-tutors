import Link from "next/link"


export default function (){
    return (
        <div>
            <h2>First blog post page </h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis pariatur nulla minus eveniet eum minima perspiciatis repudiandae distinctio inventore, debitis nam molestiae est veritatis enim! Veritatis, deserunt ullam. At, amet.
            Cupiditate dolore blanditiis sunt quo, dolor et impedit perspiciatis, sint nobis, molestias incidunt nemo doloribus praesentium? Quo vitae ullam hic beatae laudantium non, quis at fugit, facilis rem cumque magni?</p>
       <Link href="/">Home </Link>
       <Link href="/blog/second">Next Blog post </Link>

        </div>
    )
}