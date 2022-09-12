import React, {createContext, useState} from 'react'
import ProductsAPI from './api/ProductAPI'
import axios from 'axios'
export const GlobalState = createContext()

export const DataProvider = ({children})=>{
    const [token, setToken] = useState(false)
    const refreshToken = async ()=>{
        const token = await axios.get('/user/refresh_token')

        console.log(token)
    }
    const state = {
        token: [token,setToken],
        productsAPI: ProductsAPI()
    }
    return(
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}