import React from "react"
import "./Cart.css"
import Item from "../components/Item"
import img from "../components/shoes.png" 
import CartItem from "../components/CartItem"
export default function Cart(props){
    const {cartItems,onAdd,onRemove,money} = props
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty,0)
    const totalPrice = itemsPrice
 
      
    return(
        <div className="cart-container">
            <div className = "shopping-cart">
                <h1>
                    Shopping Cart
                </h1>
                <div className="item-container">
                    {cartItems.length === 0 && <div>Cart is Empty</div>}
                    {cartItems.map((item)=>(
                        <CartItem key={item.id} item={item} onRemove={()=>onRemove(item)} onAdd={()=>onAdd(item)}/>
                    ))}

                    <div className="total-price">Subtotal {cartItems.length} items: <b style={{"marginLeft":"40px","fontSize":"30px"}}>$ {totalPrice}</b></div>
                </div>
            </div>
        </div>
    )
}