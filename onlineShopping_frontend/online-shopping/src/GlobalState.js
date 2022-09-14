import React, {createContext, useEffect, useState} from 'react'
import ProductsAPI from './api/ProductAPI'
import UserAPI from './api/UserAPI'
import CategoriesAPI from './api/CategoryAPI'
import axios from 'axios'
export const GlobalState = createContext()

export const DataProvider = ({children})=>{
    const [token, setToken] = useState(false)
    const refreshToken = async ()=>{
        const res = await axios.get('/user/refresh_token')

        setToken(res.data.accesstoken)
    }
    const state = {
        token: [token,setToken],
        productsAPI: ProductsAPI(),
        categoriesAPI: CategoriesAPI(),
        userAPI: UserAPI(token)
    }
    useEffect(()=>{
        const firstLogin = localStorage.getItem('firstLogin')
        if(firstLogin) refreshToken()
    },[])
    return(
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}
