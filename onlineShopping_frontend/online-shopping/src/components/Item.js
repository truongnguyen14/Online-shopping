import React from "react";
import shoes from "./shoes.png"

export default function Item(){
    return(
        <div className="item">
             <img className="item-image" src={shoes} alt="this is a showes of an item" />
             <div className="item-sale">Sale up to 50%</div>
             <div className="price red">$ 12</div>
             <div className="item-description">Item for kids asdasdasdddddddddddddddddddddddddddddddddd</div>
        </div>
    )
}