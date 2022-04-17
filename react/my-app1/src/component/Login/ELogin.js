import {useState} from 'react';
import axios from 'axios';
import React from 'react'
import ReactDOM from 'react-dom'


const ELogin=()=>{
    const[uname,setUname] = useState("");
    const[pass,setPass] = useState("");
    const[msg,setMsg] = useState("");
    const handleForm=(e)=>{
        e.preventDefault();
        var obj = {username:uname,password:pass};
        axios.post("http://127.0.0.1:8000/api/logine",obj).then((succ)=>{
            if(succ.data == true){
                setMsg("Login Successfull");
            }
            else {
                setMsg("Login failed");
            }
        },(err)=>{

        });
        //alert(uname + " " +pass);
    }
    return(
        <form onSubmit={handleForm}>
            <input type="text" value={uname} onChange={function(e){setUname(e.target.value)}} placeholder="Username"></input><br/>
            <input type="password" value={pass} onChange={(e)=>{setPass(e.target.value)}} placeholder="Password"></input><br/>
            <span>{msg}</span>
            <input type="submit"></input>
        </form>
    )
}
export default ELogin;