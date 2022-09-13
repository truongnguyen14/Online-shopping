import React from "react";
import "./CartItem.css"
export default function CartItem(props){
    const {item,onAdd,onRemove} = props
    return(
          <div className="item-cart">
                        <div className="item-description">
            
                            <img src={item.img.url} alt="cc"/>
                            <div className="description">
                                <div className="name"> {item.title} </div>
                                <div className="des">{item.desc}</div>
                            </div>
                        </div>
                        <div className="button-container">
                            <div className="price">Amount: {item.qty} X ${item.price}</div>
                            <button  onClick={onRemove}>delete</button>    
                            <button style={{"backgroundColor":"green"}}  onClick={onRemove}>Add</button>   
                        </div>
            </div>
    )
}