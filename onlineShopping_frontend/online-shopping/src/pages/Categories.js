import React, {useState, useEffect, useContext} from 'react'
import { useParams } from "react-router-dom";
import { GlobalState } from '../GlobalState';
import Item from '../components/Item'
import List from '../components/List'
import '../style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from '../components/Footer';

function Categories(props){
    const {onAdd} = props
    const [categoriespage, setCategoriespage] = useState([])
    const params = useParams()
    const state = useContext(GlobalState)
    const [categories] = state.categoriesAPI.categories
    const [products] = state.productsAPI.products

    useEffect(() => {
        if(params){
          categories.forEach(category =>{
            if(category.name === params.name) setCategoriespage(category)
          })
        }
      }, [params,categories]);

    console.log(categoriespage.name)
    if(categoriespage.length === 0 ) return null

    return(
        <div>
        <div className="main-container">
            <div className="title">
                <h2>Categories: {categoriespage.name}</h2>
            </div>
            <div className="second-column padding margin">
                <p className="small" style={{fontWeight:"bold",paddingBottom:"4px",fontSize:"25px"}}>Categories</p>
                <List/>
            </div>  
            <div className="items-container first-column">
            {
                    products.map((product)=>(
                         product.category === categoriespage.name?
                        <Item key={product.id} product={product} onAdd={onAdd} />:null
                    ))
                }
            </div>
        </div>
        <Footer/>
        </div>
    )
}
export default Categories
