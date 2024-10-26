import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

export function FakestoreRatig(){
    const[rat,setrate]=useState({rating:{rate:0,count:0}})
    const params=useParams()
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then(res=>{
            setrate(res.data)

        })
    })
    return(
        <div>
            <h1>Rating- {params.id}</h1>
            <span className="bi bi-star">{rat.rating.rate}</span>
        </div>
    ) 
}