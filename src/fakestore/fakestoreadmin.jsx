import { useEffect } from "react"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"

export function Admin(){
    const[cookie,setcookie,removecookie]=useCookies('adminid')
    const navigate=useNavigate()
    useEffect(()=>{
        if(cookie['adminid']==null){
           navigate('/login')
        }
 
    },[])
    function SignOut(){
        removecookie('adminid')
        navigate('/login')
    }
    return(
        <div>
            <h1>FakestoreAdminDashboard-{cookie['adminid']}</h1> 
            <button onClick={SignOut} className="btn btn-link">SignOut</button>
        </div>
    )
}