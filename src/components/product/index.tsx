import './product.css'
export default function ProductComponent({ product }: { product: any }) {
    // return <h1>{product.productname}</h1>;
    return (
        <div className="parent_container">
            <img src={product.productimage} alt="productImage" style={{ display: "inline" }} />
            <div className="child_container">
                <div>{product.productname}</div>
                <div>{product.productratings}</div>
                <div>{product.productspecs}</div>
            </div>
            <div>₹{product.productprice}</div>
        </div>
    );
}