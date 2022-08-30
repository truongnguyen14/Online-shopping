import React from "react"
import "./Cart.css"
import Item from "../components/Item"
import img from "../components/shoes.png" 
import CartItem from "../components/CartItem"
export default function Cart(){
    return(
        <div className="cart-container">
            <div className = "shopping-cart">
                <h1>
                    Shopping Cart
                </h1>

                <div className="item-container">
                 
                    <CartItem/>    
                    <CartItem/>            
                    <div className="total-price">Subtotal 1 items: <b style={{"marginLeft":"40px","fontSize":"30px"}}>$50</b></div>
                </div>
            </div>
        </div>
    )
}