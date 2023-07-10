import { useEffect, useState } from "react";
import configureServer from "../Mirage/mirage-server";
import { Products } from "../constants/types";
import ProductComponent from "./productcomponent";
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
            {/* {products.map((product: any) => <><h1>{product.productname}</h1><h6> <img src={product.productimage} alt="" /></h6></>)} */}
            {products.map((product: any) => {
                return <ProductComponent product={product} />;
            })}
        </>
    );
}