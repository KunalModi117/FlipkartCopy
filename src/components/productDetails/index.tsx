import { useLocation } from "react-router-dom";
import './productDetailsPage.css'
export default function ProductDetailsPage(action: any) {
    const product = useLocation().state;
    console.log(product)
    return (
        <>
            <div className="container">
                <div className="left-section">
                    <img src={product.productimage} style={{ height: "100vh", width: "40vw" }} />
                </div>

                <div className="right-section">
                    <h2>{product.productname}</h2>
                    <h5>Ratings:{product.productratings}</h5>
                    <h1>Price: ₹{product.productprice}</h1>
                    <h5>{product.productspecs}</h5>
                </div>
            </div>
        </>
    );
}