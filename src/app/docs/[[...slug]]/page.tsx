import Link from "next/link";
export default function ({params}:{
    params:{
        slug:string[];
    }
}){
    if (params.slug?.length === 2){
        return <h1>Hello this is viewing docs for feature {params.slug [0] } and concept for {params.slug[1]}</h1>
    }
    else if (params.slug?.length === 1) {
        return <h1>viewing docs for feature {params.slug[0]}</h1>
    }
    return (
        <div>
            <h1>Docs viewing page </h1>
        </div>
    )
}