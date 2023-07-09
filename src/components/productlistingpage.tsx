import React, { useEffect, useState } from "react";
import configureServer from "../Mirage/mirage-server";
import { Products } from "../constants/types";
configureServer();
export default function ProductListingPage() {
    const [products, setProducts] = useState<Products[]>([]);
    useEffect(() => {
        fetch('/api/products').then(r => r.json()).then((data) => {
            console.log(data);
            setProducts(data.products);
        }).catch((err) => {
            console.log(err);
        })
    }, []);
    useEffect(() => {
        console.log("products", products);
    }, [products]);
    return (<>
        <h1>ProductListingPage</h1>
        {/* .map((data: Products) => <h1>{data.name}</h1>) */}
        {products.map((product: any) => <h1>{product.productname}</h1>)}
    </>
    );
}