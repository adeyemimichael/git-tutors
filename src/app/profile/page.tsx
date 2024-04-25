import Link from "next/link"

export default function Profile (){

    return (
        <div>
            <h1>Here  is your profile </h1>
            <input type="text" placeholder="Kindly put in your name here" />
            <textarea name="Text field " id="" ></textarea>
<Link href="/">Home</Link>
        </div>
    )
}