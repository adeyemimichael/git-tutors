import Link from "next/link";
import { notFound } from "next/navigation";
export default function Reviews({params }:{
    params:{
        productsid:string,
        reviewid:string
    }
}){
     if(parseInt(params.reviewid) > 1000 ){
        notFound();  
     }
    return (
    <div>
        <h1>Reviews {params.reviewid} for products {params.productsid} </h1>
    </div>
    )
}