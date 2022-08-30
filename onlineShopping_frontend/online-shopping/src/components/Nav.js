import React from "react";
import image from "./logo192.png"
import { Link } from "react-router-dom";
export default function Nav(){
    return(
        <div className="nav_container">
            <Link to="" >
                <img className="logo" src={image} alt="this is an image" />
            </Link>
            <div className="search_bar">
                <input></input>
                <button>find</button>
            </div>
            <div className="options">

                <div><Link to="/login" style={{"textDecoration":"none"}}>log In</Link></div>
                <div><Link to="/cart" style={{"textDecoration":"none"}}>Cart</Link></div> 

            </div>
        </div>
    )
}