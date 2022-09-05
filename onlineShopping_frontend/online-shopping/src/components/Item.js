import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './item.css'

export default function Item(props){
    const {product,onAdd} = props 
    return(
        <div className="container">
            <div className="row">
            <div className="col-md-4">
                <div className="item">
                    <img className="item-image" src={product.image} alt="this is a showes of an item" />
                <div className="card-body">
                    <div className="item-sale">Sale up to 50%</div>
                        <Link to= {`/product/find/${product.id}`} className="item-description"              >
                                <div>{product.name}</div>     
                        </Link>
                    <div className="price red">$ {product.price}</div>
                    <button className="btn btn-primary" onClick={()=>onAdd(product)}>Add to cart</button>
                </div>
            </div>
        </div>        
    </div> </div>   
    )
}
