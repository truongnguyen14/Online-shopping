import React from "react";
import "./CartItem.css"
export default function CartItem(props){
    const {item,decrement,increment,remove} = props
    
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
                            <div className="price">Amount: {item.quantity} X ${item.price}</div>
                            <button  onClick={()=>decrement(item._id)}>-</button>    
                            <button style={{"backgroundColor":"green"}}  onClick={()=>increment(item._id)}>+</button>   
                            <button className="remove_button" onClick={()=>remove(item._id)} >
                                Remove
                            </button>
                        </div>
                       
            </div>
    )
}