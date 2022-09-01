import React from "react";
import image from "./logo192.png"
import { Link } from "react-router-dom";
export default function Nav(props){
    const {cartItems} = props
    const itemsAmount = cartItems.reduce((a, c) => a + c.qty,0)

    return(
        <div className="nav_container">
            <Link to="" style={{"textDecoration":"none"}}>
                <div className="logo-container">
                    <img className="logo" src={image} alt="this is an image" />
                    <div>Prime Item</div>
                </div>
            </Link>

            <div className="search_bar">
                <input></input>
                <button>find</button>
            </div>
            <div className="options">

                <div><Link to="/login" style={{"textDecoration":"none"}}>log In</Link></div>
                {}
                <div className="cart-link">
                    <Link to="/cart" style={{"textDecoration":"none"}}>Cart</Link>
                    {cartItems.length !== 0 && <div className="item-amount"> {itemsAmount} </div>}
                </div> 

            </div>
        </div>
    )
}