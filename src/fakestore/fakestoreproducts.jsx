import { useEffect, useState } from "react"
import { Outlet, useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import axios from "axios"

export function FakestoreProducts(){
    const[prod,setprod]=useState([])
    const params=useParams()

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/category/${params.category}`)
        .then(res=>{
            setprod(res.data)

        })
  
    },[])
    return(
        <div className="mt-4 container">
            <h1> your viewing :   {params.category} Products</h1>
            <p>
                
            </p>
           <div className="row">
            <div className="col-2">
            <div className="d-flex flex-column" style={{height:"350px",overflow:"auto"}}> 

{
    prod.map(val=>
        <div className="card me-4">
    <img src={val.image} height="100" width="100" className="me-4"/>
    <p style={{whiteSpace:'nowrap',width:"150px",textOverflow:"ellipsis",overflow:"hidden"}}>{val.title}</p>
    <div className="card-footer">
        <Link to ={`details/${val.id}`} className="btn btn-warning">seemore...</Link>
         
        </div>
   
    </div>
)
}

</div> 
<p>
<Link to='categories'>Back to caegories</Link>
</p>

            </div>
            <div className="col-4">
               <Outlet/>
               

            </div>
            <div className="col-6">
                {/* <Outlet/> */}
            </div>
            
           </div>
        </div>
        
    )
}