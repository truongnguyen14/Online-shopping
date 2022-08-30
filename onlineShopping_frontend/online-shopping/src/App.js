import React from "react";
import Shopping from "./pages/Shopping";
import Nav from "./components/Nav";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import { BrowserRouter,Routes,Route } from "react-router-dom";


export default function App(){
    return(
        <div className="App">
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route index element={<Shopping/>}/>
                    <Route path="/login" element={<Signin/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                </Routes>
            </BrowserRouter> 
        </div>
    )
}

