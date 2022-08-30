import React from "react";
import img from "./shoes.png"
import "./CartItem.css"
export default function CartItem(){
    return(
          <div className="item-cart">
                        <div className="item-description">
            
                            <img src={img} alt="cc"/>
                            <div className="description">
                                <div className="name"> Mochimochi </div>
                                <div className="des">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                            </div>
                        </div>
                        <div className="button-container">
                            <div className="price">Price: 10</div>
                            <button>delete</button>    
                        </div>
            </div>
    )
}