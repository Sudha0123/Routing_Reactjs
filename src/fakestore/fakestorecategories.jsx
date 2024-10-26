import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export function FakestoreCatgeories(){
    const[categories,setcategories]=useState([])
    useEffect(()=>{

        fetch("https://fakestoreapi.com/products/categories")
        .then(res=>res.json())
        .then(val=>{
            setcategories(val)

        })

    },[])

    return(
        <div>
            <ul>
            {
             
                categories.map(values=><li key={values}><Link to={`/products/${values}`}>{values.toUpperCase()}</Link></li>)
               
            }
            </ul>

        </div>
    )
}