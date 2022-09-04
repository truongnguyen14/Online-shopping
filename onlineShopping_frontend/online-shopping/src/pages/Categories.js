import React, {useState, useEffect} from 'react'
import Item from '../components/Item'
import List from '../components/List'
import '../style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useLocation } from "react-router-dom";

function Categories(props){
    const {categories,products,onAdd} = props
    const [categoriespage, setCategoriespage] = useState({})
    const location = useLocation();
    const title = location.pathname.split("/")[2]; 

    useEffect(() => {
        const getCategories = async () => {
          try {
            const thiscategories = categories.find((e) => e.title === title)           
            thiscategories && setCategoriespage(thiscategories)
            console.log(thiscategories)
          } catch {}
        };
        getCategories();
      }, [title]);

    return(
        <div className="main-container">
            <div className="title">
                <h2>Categories</h2>
            </div>
            <div className="second-column padding margin">
                <p className="small" style={{fontWeight:"bold",paddingBottom:"4px",fontSize:"15px"}}>Categories</p>
                <List/>
            </div>  
            <div className="items-container first-column">
            {
                    products.map((product)=>(
                         product.cat === categoriespage.title?
                        <Item key={product.id} product={product} onAdd={onAdd} />:null
                    ))
                }
            </div>
        </div>
    )
}
export default Categories