import {useState, useEffect} from 'react'
import axios from 'axios'

function CategoryAPI() {
    const [categories, setCategories] = useState([])
     const getCategories = async () =>{
            const res = await axios.get('/api/categories')
            console.log(res.data.categories)
            setCategories(res.data)
        }  
        useEffect(() =>{
        getCategories()
    },[])
    return {
        categories: [categories, setCategories]
    }
}

export default CategoryAPI