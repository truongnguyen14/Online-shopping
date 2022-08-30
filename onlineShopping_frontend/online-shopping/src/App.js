import React from "react";
import Shopping from "./pages/Shopping";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import { BrowserRouter,Routes,Route } from "react-router-dom";


export default function App(){
    return(
        <div className="App">
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route index element={<Shopping/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                </Routes>
            </BrowserRouter> 
        </div>
    )
}

