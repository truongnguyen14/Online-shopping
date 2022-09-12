import axios from "axios";
import React, {useState,useEffect} from "react";


export default function ProductAPI(){
    const [products,setProducts] = useState([])
    const getProducts = async() => {
        const res = await axios.get('/api/products')
        console.log(res.data.products)
        setProducts(res.data.products)

    }
    useEffect(()=>{
        getProducts()
    },[])
    return{
        products:[products,setProducts]
    }
}