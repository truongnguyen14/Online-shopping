import React from "react";
import Container from "../components/Container";
import Footer from "../components/Footer";

export default function Shopping(props){
    const {products, onAdd} = props 
    return(
        <div>
            <Container onAdd={onAdd} products={products}/>
            <Footer/>
        </div>
    )
}