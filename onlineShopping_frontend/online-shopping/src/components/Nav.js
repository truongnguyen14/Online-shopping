import React, { useContext } from "react";
import image from "./logo192.png"
import { GlobalState } from "../GlobalState";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Nav(props){
    const {cartItems} = props
    const itemsAmount = cartItems.reduce((a, c) => a + c.qty,0)
    const state = useContext(GlobalState)
    console.log(state)
    
   
    const [cart] = state.userAPI.cart
    const [isAdmin] = state.userAPI.isAdmin
    const [isLogged] = state.userAPI.isLogged
    const logoutUser = async () =>{
        await axios.get('/user/logout')
        localStorage.clear()
        window.location.href = "/"
    }
    const adminRouter = () =>{
        return(
            <>
                <div><Link to="/create_product" style={{"textDecoration":"none"}}>Create Product</Link></div>
                <div><Link to="/category" style={{"textDecoration":"none"}}>Categories</Link></div>
            </>
        )
    }
    const userRouter = () =>{
        return(
            <>
                   <div><Link to="/" style={{"textDecoration":"none"}}>log Out</Link></div>
                
                <div className="cart-link">
                    <Link to="/cart" style={{"textDecoration":"none"}}>Cart</Link>
                    {cart.length !== 0 && <div className="item-amount"> {cart.length} </div>}
                </div> 
            </>
        )
    }
    const loggedRouter = () =>{
        return(
            <>
                {/* <div><Link to="/history" style={{"textDecoration":"none"}}>History</Link></div> */}
                <div><Link to="/" style={{"textDecoration":"none"}} onClick={logoutUser}>Logout</Link></div>
                <div className="cart-link">
                    <Link to="/cart" style={{"textDecoration":"none"}}>Cart</Link>
                    {cart.length >= 1 && <div className="item-amount"> {cart.length} </div>}
                </div> 
            </>
        )
    }
    return(
        <div className="nav_container">
                    <Link to="" style={{"textDecoration":"none"}}>
                        <div className="logo-container">
                                <img className="logo" src={image} alt="this is an image" />
                                <div>{isAdmin ? 'Admin' : 'PAWN SHOP'}</div>
                        </div>
                    </Link>

            <div className="search_bar">
                <input></input>
                <button>find</button>
            </div>
            <div className="options">
                <div><Link to="/" style={{"textDecoration":"none"}}>{isAdmin ? 'Products' : 'Shop'}</Link></div>
                {isAdmin && adminRouter()}
                {
                    isLogged ? loggedRouter() : (<div>
                        <Link to="/login" style={{"textDecoration":"none"}}>login</Link>
                        </div>
                        
                        )
                        
                }

            </div>
        </div>
    )
}
