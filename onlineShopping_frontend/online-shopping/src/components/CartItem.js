import React from "react";
import "./CartItem.css"
export default function CartItem(props){
    const {item,onAdd} = props
    return(
          <div key={item.id} className="item-cart">
                        <div className="item-description">
            
                            <img src={item.image} alt="cc"/>
                            <div className="description">
                                <div className="name"> {item.name} </div>
                                <div className="des">{item.price}</div>
                            </div>
                        </div>
                        <div className="button-container">
                            <div className="price">{item.price}</div>
                            <button>delete</button>    
                        </div>
            </div>
    )
}