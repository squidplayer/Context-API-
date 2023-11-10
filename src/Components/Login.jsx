import React from 'react'
import { useState, useContext } from 'react'

import UserContext from '../Context/UserContext'

export default function Login(){

    const [username, setUsername] = useState(null);
    const [password, setpassword]= useState(null);


    const {setUser}= useContext(UserContext);


    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({username, password});
    }


    return (
        <>
        <h2>Login</h2>
        <input type='text' placeholder='username' value={username} onChange={(e)=> setUsername(e.target.value)}/>
        <input type = 'text' placeholder='password' value= {password} onChange={(e)=>setpassword(e.target.value)}/>

        <button onClick={handleSubmit}>Submit</button>
         

        </>
    )
}