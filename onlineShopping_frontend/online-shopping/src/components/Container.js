import React from "react";
import Item from "./Item.js"
import List from "./List.js"
import Select from "./Select.js";

export default function Container(props){
    const {products,onAdd} = props
    return(
        <div className="main-container">
            <div className="title">
                <h1 className="title-font">Prime Available items</h1>
                <p className="small">Our most popular products based on sales. Updated hourly.</p>
            </div>
            <div className="second-column padding margin">
                <p className="small" style={{fontWeight:"bold",paddingBottom:"4px",fontSize:"15px"}}>Categories</p>
                <List/>
            </div>  
            <div className="items-container first-column">
                {
                    products.map((product)=>(
                        <Item key={product.id} product={product} onAdd={onAdd} />
                    ))
                }
            </div>
            <Select/>
        </div>
    )
}