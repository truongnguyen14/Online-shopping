import React, {useState, useEffect} from 'react'
import './productdetail.css'
import Item from '../components/Item'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useLocation } from "react-router-dom";

function Productdetail(props) {
    const {products,onAdd} = props 
    const [detailproduct, setDetailproduct] = useState({})
    const location = useLocation();
    const id = location.pathname.split("/")[3];
    const relateproduct = products.find((e)=> e.id === id)
    
    useEffect(() => {
        const getProduct = async () => {
          try {
            const thisproduct = products.find((e) => e.id === id)
            thisproduct && setDetailproduct(thisproduct)
          } catch {}
        };
        getProduct();
      }, [id]);

  return (
    <div>
        <div className="productinfo container">
            <div className="product">			
                        <div className="row">
                        <div className="col-md-5 box1">
                            <img src={detailproduct.image} class="poster-image"></img>
                        </div>
                        <div className="col align-self-center box2">
                            <h1 className="productinfo-title">{detailproduct.name}</h1>
                            <h5>Description: {detailproduct.description}</h5>
                            <h5>Price: {detailproduct.price}</h5>
                            <h5> Category: {detailproduct.cat}</h5>
                            <div className="productinfo button">
                                <button className="btn btn-primary" onClick={()=>onAdd(detailproduct)}>Add to cart</button>
                            </div>
                        </div>
                    </div>			
            </div>
	    </div>
    
    <div className='relatedproduct'>
        <h2>Related products</h2>
        <div className='products'>
           {
                    products.map((product)=>(
                        product.id != detailproduct.id && product.cat === detailproduct.cat?
                        <Item key={product.id} product={product} onAdd={onAdd} />:null
                    ))
                }
        </div>
    </div></div>
   
  )
}

export default Productdetail
