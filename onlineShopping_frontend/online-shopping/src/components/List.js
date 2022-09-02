import React from "react";
import { categoriesData } from "../data";
import { Link } from "react-router-dom";
export default function List(){
    console.log(categoriesData)
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