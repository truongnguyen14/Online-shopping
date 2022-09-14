import React, { useContext } from "react"
import "./Cart.css"
import CartItem from "../components/CartItem"
import { GlobalState } from "../GlobalState"
import { useEffect } from "react"
import axios from "axios"
import PaypalButton from './PaypalButton'
export default function Cart(props){
    const state = useContext(GlobalState)
    const [cart,setCart] = state.userAPI.cart
    const [total,setTotal] = React.useState(0)
    const [token] = state.token
    
    
    
    useEffect(()=>{
        const getTotal = ()=>{
            setTotal(cart.reduce(
            (prev, item)=>{
              
            return prev + (item.price * item.quantity)
        }   
        ,0))
    }
    getTotal()
    console.log(total)
    }
    ,[cart])
    const addToCart = async ()=>{
        await axios.patch('user/addcart',{cart},{
            headers: {Authorization: token}
        })
    }
    const remove =(id)=>{
        if(window.confirm("do you want to delete this product")){
            cart.forEach((item,index)=>{
                if(item._id === id){
                    cart.splice(index,1)
                }    
            })
            setCart([...cart])
            addToCart()
        }
    }
    const increment = (id)=>{
        cart.forEach(item=>{
            if(item._id === id){
                item.quantity +=1
            }
        })
        setCart([...cart])
        addToCart()
    }
    const decrement = (id)=>{
        cart.forEach(item=>{
            if(item._id === id){
                item.quantity -=1
                if(item.quantity <= 0){
                    remove(id)
                }
            }
        })
       
        setCart([...cart])
        addToCart()
    }
    const tranSuccess = async (payment)=>{
        console.log(payment)
    }
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
                        <CartItem key={item._id} item={item} increment={increment} decrement={decrement} remove={remove}/>
                    ))}

                    <div className="total-price">Subtotal  items: <b style={{"marginLeft":"40px","fontSize":"30px"}}>$ {total}</b></div>
                </div>
                <div className="payment">
            
                    <PaypalButton total={total} tranSuccess={tranSuccess} />
                </div>
            </div>
        </div>
    )
}