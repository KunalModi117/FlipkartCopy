import { useEffect, useState } from "react";
import configureServer from "../Mirage/mirage-server";
import { Products } from "../constants/types";
import ProductComponent from "./product";
import { Link } from "react-router-dom";
configureServer();
export default function ProductListingPage() {
    const [products, setProducts] = useState<Products[]>([]);
    useEffect(() => {
        fetch('/api/products').then(r => r.json()).then((data) => {
            setProducts(data.products);
        }).catch((err) => {
            console.log(err);
        })
    }, []);


    return (
        <>
            <h1>ProductListingPage</h1>
            {products.map((product: any) => (
                <Link to={`/products/details/${product.id}`} state={product}>
                    <ProductComponent product={product} />
                </Link>
            ))}
        </>
    );
}