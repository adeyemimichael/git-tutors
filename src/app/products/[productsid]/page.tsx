import Link from "next/link";
export default function ProductsDetails ( {
    params,
}
    :{
    params:{productsid:string}
} ){
    return (

        <div>
            <h1>details are shown here for products {params.productsid} </h1>
        </div>
    )
}