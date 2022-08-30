import React from "react";
import image from "./logo192.png"
export default function Nav(){
    return(
        <div className="nav_container">
            <img className="logo" src={image} alt="this is an image" />
            <div className="search_bar">
                <input></input>
                <button>find</button>
            </div>
            <div className="options">
                <div>Login</div>
                <div>Cart</div>
            </div>
        </div>
    )
}