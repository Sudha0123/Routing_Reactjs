import { useState } from "react"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"

export function Login(){
    const[cookie,setcookie,removecookie]=useCookies('adminid')
    const[userid,setuserid]=useState('')
    const navigate=useNavigate()
    function handleClick(e){
        setuserid(e.target.value)
    }
    function loginClick(){
        setcookie('adminid',userid)
        navigate('/admin')
    }
    return(
        <div>
        <h1>Admin Login</h1>
        <dl>
            <dt>username</dt>
            <dd><input type="text" onChange={handleClick}/></dd>
            <dt>Password</dt>
            <dd><input type="password"/></dd>

        </dl>
        <button onClick={loginClick}>Login</button>
        </div>
    )
}