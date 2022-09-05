import React from "react";
import "./list.css"
import { categoriesData } from "../data";
import { Link } from "react-router-dom";

export default function List(){
    const {categories} = categoriesData
    return(
            <ul className="list small">
                {categories.map((data)=>
                  <Link to={`/categories/${data.title}`}>
                          <li>{data.title}</li>  
                  </Link>
                )}
            </ul>

    )
}
