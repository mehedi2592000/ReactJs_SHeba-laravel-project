import React, {useState, userEffect} from "react";
import axios from "axios";

const Login = ()=>{
    let[token, setToken]= useState("");
    let[name, setName] = useState("");
    let[password, setPassword] =useState("");

    const loginSubmit= ()=>{
        var obj = {username: name, password: password};
        axios.post("http://127.0.0.1:8000/api/logine",obj)
        .then(resp=>{
            var token = resp.data;
            console.log(token);
            var user = {userid: token.userid, access_token:token.token_id};
            localStorage.setItem('user',JSON.stringify(user));
             console.log(localStorage.getItem('user'));

             axios.get("http://127.0.0.1:8000/api/email",)
             
        }).catch(err=>{
            console.log(err);
        });


    }
    return(
        <div>
            <form>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>

            </form>
                <button onClick={loginSubmit}>Login</button>
        </div>

    )
}
export default Login; 