import React, {useContext,useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'

import { useLocation } from "react-router-dom";
import './productdetail.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function Productdetail(props) {
  const {cartItems} = props
  return (
    <div>
        <div class="productinfo container">
            <div class="product">			
                        <div class="row">
                        <div class="col-md-5 box1">
                            <img src="#" class="poster-image"></img>
                        </div>
                        <div class="col align-self-center box2">
                            <h1 class="productinfo-title">'.$row['name'].'</h1>
                            <h5>Description: '.$row['moviedescription'].'</h5>
                            <h5>Genre: '.$row['genre'].'</h5>
                            <h5>Rated: '.$row['rated'].'</h5>
                            <h5>Rating: '.$row['rating'].'</h5>
                            <div class="productinfo button">
                                <a href="#" class="btn btn-primary">Add to cart</a>
                            </div>
                        </div>
                    </div>			
            </div>
	    </div>
    
    <div className='relatedproduct'>
        <h2>Related products</h2>
        <div className='products'>
           
        </div>
    </div></div>
   
  )
}

export default Productdetail
