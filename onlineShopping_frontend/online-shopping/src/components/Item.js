import React from "react";
import shoes from "./shoes.png"
import perry from "./perry.png"

export default function Item(){
    return(
        <div className="item">
             <img className="item-image" src={perry} alt="this is a showes of an item" />
             <div className="item-sale">Sale up to 100%</div>
             <div className="price red">$ 0</div>
             <div className="item-description">perryyyyyyyyyyyyyyyyyyyyyy</div>
        </div>
    )
}