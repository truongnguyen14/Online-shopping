import React from "react";
import { categoriesData } from "../data";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
export default function List(){

    const location = useLocation()
    const cat = location.pathname.split("/")[2]
    console.log(cat)
    return(
            <ul className="list small">
                {categoriesData.map((data)=>
                  <Link to={`/products/${data.title}`}>
                          <li>{data.title}</li>  
                  </Link>
                )}
            </ul>

    )
}