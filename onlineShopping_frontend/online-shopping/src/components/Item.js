import React from "react";
import shoes from "./shoes.png"
import perry from "./perry.png"

export default function Item(props){
    const {product,onAdd} = props 
    return(
        <div className="item">
             <img className="item-image" src={product.image} alt="this is a showes of an item" />
             <div className="item-sale">Sale up to 50%</div>
             <div className="item-description">{product.name}</div>
             <div className="price red">$ {product.price}</div>
             <button onClick={()=>onAdd(product)}>Add to cart</button>
        </div>
    )
}