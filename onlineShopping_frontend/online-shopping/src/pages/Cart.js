import React from "react"
import "./Cart.css"
import Item from "../components/Item"
import img from "../components/shoes.png" 
import CartItem from "../components/CartItem"
export default function Cart(props){
    const {cartItems,onAdd} = props
    return(
        <div className="cart-container">
            <div className = "shopping-cart">
                <h1>
                    Shopping Cart
                </h1>

                <div className="item-container">
                    {cartItems.length === 0 && <div>Cart is Empty</div>}
                    {cartItems.map((item)=>(
                        <CartItem item={item} onAdd={onAdd}/>
                    ))}

                    <div className="total-price">Subtotal {cartItems.length} items: <b style={{"marginLeft":"40px","fontSize":"30px"}}>$ 0</b></div>
                </div>
            </div>
        </div>
    )
}