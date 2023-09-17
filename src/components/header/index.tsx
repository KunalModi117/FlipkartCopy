import { BrowserRouter, Link, Routes } from 'react-router-dom'
import './header.css'
export default function Header() {
    return (
        <div className="header_container">
            <div className='parentSearchDiv'>
                <Link to={'/'} className='imageContainer'>
                    <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/flipkart-095e08.svg"></img>
                </Link>
                <span className='searchDiv'><input type="text" name="" className="searchField" placeholder='Search for Products, Brands and More' /></span>
            </div>
            <div className='tabsDiv'>
                <Link to={'/profile'} className='header_text' ><span><img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-815786.svg' /><span>Account</span></span></Link>
                <Link to={'/cart'} className='header_text' ><span><img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg' /><span>Cart</span></span></Link>
            </div>
        </div>
    )
};