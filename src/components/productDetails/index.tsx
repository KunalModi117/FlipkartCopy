import { useLocation } from "react-router-dom";
import './productDetailsPage.css'
import Button from "../Button";
export default function ProductDetailsPage(action: any) {
    const product = useLocation().state;
    console.log(product)
    const handleClick = () => {
        fetch('/api/cart',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", // Set the content type header
                },
                body: JSON.stringify(product),
            }
        ).then((respose) => { respose.json(); })
            .then(data => {
                console.log(data, " added")
            }).catch(err => { console.log(err, " occured") })
    }
    const handleclock = () => {
        fetch(`/api/cart/${0}`).then(r => r.json()).then((data) => {
            console.log(data)
        })
    }
    return (
        <>
            <div className="container">
                <div className="left-section">
                    <img src={product.productimage} style={{ width: "40vw" }} />
                    <Button value={"Go To Cart"} handleClick={handleClick} />
                    <Button value={"Buy"} handleClick={handleclock} />
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