import React, { useContext } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './item.css'
import { GlobalState } from "../GlobalState";
export default function Item(props){
    const {product,onAdd,isAdmin} = props 
    const state = useContext(GlobalState)
    const addCart = state.userAPI.addCart
  
    return(
        <div className="container">
            {
                isAdmin && <input type="checkbox" checked={product.checked}/> 
            }
            <div className="row">
            <div className="col-md-4">
                <div className="item">
                    <img className="item-image" src={product.img.url} alt="this is a showes of an item" />
                <div className="card-body">
                    <div className="item-sale">Sale up to 50%</div>
                        <Link to= {`/product/find/${product.id}`} className="item-description"              >
                                <div>{product.title}</div>     
                        </Link>
                    <div className="price red">$ {product.price}</div>
                    <div style={{"display":"flex","gap":"20px"}}>
                        {
                            isAdmin ? <>  
                            <button className="btn btn-primary" >Delete</button>
                            <Link to= {`/edit/${product._id}`} >
                                <button className="btn btn-normal" >Edit</button>
                            </Link> 
                        </> : <>
                             <button className="btn btn-primary" onClick={()=>addCart(product)}>Add to cart</button>
                            <Link to= {`/product/find/${product._id}`} >
                                <button className="btn btn-normal" > Details</button>
                            </Link>
                        </>
                        }
                    </div>
                </div>
            </div>
        </div>        
    </div> </div>   
    )
}
