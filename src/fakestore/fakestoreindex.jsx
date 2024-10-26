import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
export function FakestoreIndex(){
    const[pass,setpass]=useState('')
    let navigate=useNavigate()
    function handlePWD(e){
        setpass(e.target.value)
    }
    function handleClick(){
        if(pass=='admin'){
            navigate("categories")

        }
        else{
            navigate("invalid")
        
        }
        
    }
   
    return(
        <div className="container-fluid">
                       <section>
                <main className="text-center">
                    <h1>Fakestore-Online shopping</h1>
                    <div>
                        <dl>
                            <dt>UserName</dt>
                            <dd><input type="text"></input></dd>
                            <dt>Password</dt>
                            <dd><input type="password" onChange={handlePWD}/></dd>
                        </dl>
                        <button className="btn btn-warning" onClick={handleClick}>Login</button>
                    </div>
                </main>
            </section>
        </div>
    )
}