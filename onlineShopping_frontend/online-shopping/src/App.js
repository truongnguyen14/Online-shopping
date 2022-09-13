import React from "react";
import Shopping from "./pages/Shopping";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import { DataProvider } from "./GlobalState";
import Productdetail from "./pages/Productdetail"
import {categoriesData, data} from "./data";
import { BrowserRouter,Routes,Route,Navigate  } from "react-router-dom";
import Container from "./components/Container";
import Categories from "./pages/Categories";

export default function App(){
    // user check
    const user = false
    const {products} = data;
    const {categories} = categoriesData;
    const [cartItems, setCartItems] = React.useState([])
    const money = React.useRef(0)
    React.useEffect(()=>{
        for(let i = 0; i<cartItems.length;i++ ){
            money.current = money.current + cartItems[i].price * cartItems[i].qty
        }
    },[cartItems])
    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if(exist){
            setCartItems(
                cartItems.map((x)=>
                    x.id === product.id ? {...exist,qty: exist.qty +1} : x
                )
            )
        }else{
            setCartItems([...cartItems,{...product,qty: 1}])
        }
    }
    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if(exist.qty === 1){
            setCartItems(cartItems.filter((x) => x.id !== product.id))
        } else{
             setCartItems(
                cartItems.map((x)=>
                    x.id === product.id ? {...exist,qty: exist.qty - 1} : x
                )
            )
        }
    }

    
    return(
        <DataProvider>
            <div className="App">
                <BrowserRouter>
                    <Nav cartItems={cartItems} />
                    <Routes>
                        <Route index element={<Shopping onAdd={onAdd} products = {products} />}/>
                        <Route path="/login" element={user ? <Navigate to="/"/>:<Login/>}/>
                        <Route path="/" element={<Container/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/cart" element={<Cart onAdd={onAdd} onRemove={onRemove} money={money.current} cartItems={cartItems}/>}/>
                        <Route path="/product/find/:id" element={<Productdetail onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>} />
                        <Route path="/categories/:title" element={<Categories onAdd={onAdd} products={products} categories={categories}/>} />
                    </Routes>
                </BrowserRouter> 
            </div>
        </DataProvider>
    )
}

