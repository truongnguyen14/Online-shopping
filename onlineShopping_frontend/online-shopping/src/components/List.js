import React, {useState, useEffect, useContext} from 'react'
import "./list.css"
import { Link } from "react-router-dom";
import { GlobalState } from "../GlobalState";

export default function List(){
  const state = useContext(GlobalState)
    const [categories] = state.categoriesAPI.categories
    return(
            <ul className="list small">
                {categories.map((category)=>
                  <Link to={`/categories/${category.name}`}>
                          <li className="menu-list">{category.name}</li>  
                  </Link>
                )}
            </ul>

    )
}
