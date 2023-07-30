import { BrowserRouter, Link, Routes } from 'react-router-dom'
import './header.css'
export default function Header() {
    return (
        <div className="header_container">
            <Link to={'/'}>Home</Link>
            <span><input type="text" name="" id="" /></span>
            <Link to={'/profile'}>Profile</Link>
            <Link to={'/cart'}>Cart</Link>
        </div>
    )
};