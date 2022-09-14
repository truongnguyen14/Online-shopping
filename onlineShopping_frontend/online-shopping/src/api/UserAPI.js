import axios from "axios";
import React, {useState,useEffect} from "react";



export default function UserAPI(token){
    const [isLogged,setIsLogged] = useState(false)
    const [isAdmin,setIsAdmin] = useState(false)
    const [cart, setCart] = React.useState([])
    
   

    useEffect(()=>{
        const getUser = async ()=>{
        if(token){
            try{    
                const res = await axios.get('/user/infor',{
                    headers:{Authorization: token}
                })
                console.log(res)
                setIsLogged(true)
                res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false)
                setCart(res.data.user.cart)
            }catch(err){
                alert(err.respond.data.msg)
            }
        }
    }
    getUser()
    
},[token])
 const addCart = async (product) =>{
            if(!isLogged){
                return alert("Please login to continue buying")
            }

            const check = cart.every(item=>{
                return item._id !== product._id
            })

            if(check){
                setCart([...cart,{...product,quantity: 1}])
                await axios.patch('/user/addcart',{cart: [...cart,{...product,quantity: 1}]},{
                    headers: {Authorization: token}
                    
                })
            }else{
                alert("This product has been added to cart")
            }
        }
return{
    isLogged: [isLogged, setIsLogged],
    isAdmin: [isAdmin,setIsAdmin],
    cart: [cart,setCart],
    addCart: addCart
}
}