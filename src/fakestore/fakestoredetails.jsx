import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"

export function FakestoreDetails(){
    const params=useParams()
    const[id,setid]=useState({rating:{rate:0,count:0}})
    useEffect(()=>{
        axios(`https://fakestoreapi.com/products/${params.id}`)
        .then(res=>{
            setid(res.data)

        })
    },[params.id])
 
    return(
        <div>
           <div className="row">
            <div className="col">
            <h1>Product Details-{params.id}</h1>
            <table  className="table table-hover">
                
                <thead>
                    <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>image</th>
                    <th>category</th>
                    <th>rate</th>
                    </tr>
                    

                </thead>
                <tbody>
                    
                        
                     
                            <tr>
                            <td>{id.title}</td>
                            <td>{id.price}</td>
                            <td><img src={id.image} width="100" height="100"/></td>
                            <td>{id.category}</td>
                            <td>{id.rating.rate}</td>
                            </tr> 
                            
                    
                        
                </tbody>

            
            </table>

            </div>
            <div className="col">
             <Outlet/>
            </div>
           </div>
            <button className="btn btn-primary m-4"><Link to={`Rating/${id.id}`}>Ratings and description</Link></button>

            <button className="btn btn-warning"> <Link className= "text-decoration-none" to={`/products/${id.category}`}> Back to products</Link> </button>
            {/* <dl>
                <dt>title</dt>
                <dd></dd><
            </dl> */}

        </div>
    )
}