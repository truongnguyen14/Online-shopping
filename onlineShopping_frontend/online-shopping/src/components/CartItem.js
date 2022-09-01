import React from "react";
import "./CartItem.css"
export default function CartItem(props){
    const {item,onAdd,onRemove} = props
    return(
          <div className="item-cart">
                        <div className="item-description">
            
                            <img src={item.image} alt="cc"/>
                            <div className="description">
                                <div className="name"> {item.name} </div>
                                <div className="des">{item.price}</div>
                            </div>
                        </div>
                        <div className="button-container">
                            <div className="price">Amount: {item.qty} X ${item.price}</div>
                            <button  onClick={onRemove}>delete</button>    
                        </div>
            </div>
    )
}