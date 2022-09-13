import React, { useContext } from "react"
import "./Cart.css"
import CartItem from "../components/CartItem"
import { GlobalState } from "../GlobalState"
export default function Cart(props){
    const state = useContext(GlobalState)
    const [cart] = state.userAPI.cart
    const [total,setTotal] = React.useState(0)
    
    
    

    if(cart.length === 0)
        return <h2 style={{textAlign:"center",fontSize:"5rem"}}>Cart Empty</h2>
    return(
        <div className="cart-container">
            <div className = "shopping-cart">
                <h1>
                    Shopping Cart
                </h1>
                <div className="item-container">
                
                    {cart.map((item)=>(
                        <CartItem key={item._id} item={item} />
                    ))}

                    <div className="total-price">Subtotal  items: <b style={{"marginLeft":"40px","fontSize":"30px"}}>$ {total}</b></div>
                </div>
                <div className="payment">
                    <button>Payment</button>
                </div>
            </div>
        </div>
    )
}