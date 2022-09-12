import React, {useState, useEffect, useContext} from 'react'
import './productdetail.css'
import Item from '../components/Item'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useParams } from "react-router-dom";
import { GlobalState } from '../GlobalState';

function Productdetail(props) {
    const {onAdd} = props 
    // const location = useLocation();
    // const id = location.pathname.split("/")[3];
    // const relateproduct = products.find((e)=> e.id === id)
    
    const params = useParams()
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    const [detailproduct, setDetailproduct] = useState([])
  

    
    useEffect(() => {
        if(params){
          products.forEach(product =>{
            if(product._id === params.id) setDetailproduct(product)
          })
        }
      }, [params,products]);

    console.log(detailproduct._id)
  if(detailproduct.length === 0 ) return null
  return (
    <div>
         <div className="main-container">
            <div className="title">
                    <h1 className="title-font">Prime Item description</h1>
                    <p className="small">Our most popular products based on sales. Updated hourly.</p>
            </div>
         </div>
        <div className="productinfo container">
            <div className="product">			
                        <div className="row">
                        <div className="col-md-5 box1">
                            <img src={detailproduct.img.url} class="poster-image"></img>
                        </div>
                        <div className="col box2">
                            <h1 className="productinfo-title"><b>{detailproduct.title}</b></h1>
                            <h5 style={{"lineHeight":"1px","fontSize":"15px","letterSpacing": "1px"}}>{detailproduct.desc}</h5>
                            <h5 style={{"marginTop":"40px","fontSize":"30px","color":"#6E7F9D"}}>$ {detailproduct.price}</h5>
                            <h5><b>Categories: </b>{detailproduct.category}</h5>
                            <h5>Sold: {detailproduct.sold}</h5>
                            <div className="productinfo button" style={{"alignSelf":"center"}}>
                                <button className="btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>			
            </div>
	    </div>
    
    <div className='relatedproduct'>
        <h2>Related products</h2>
        <div className='products'>
           {
            
                    products.map((product)=>{
                        if (product._id !== detailproduct._id && product.category === detailproduct.category){
                         
                          return <Item key={product._id} product={product} onAdd={onAdd} />
                          
                        }else{
                          return null
                        }
                        
                     

                },
                )
              
                }
               
        </div>
    </div></div>
   
  )
}

export default Productdetail
