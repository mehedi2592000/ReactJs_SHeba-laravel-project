import React, {useState, userEffect} from "react";
import axios from "axios";

import { useHistory } from "react-router-dom";


const Login = ()=>{
    let history = useHistory();
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
             
             window.sessionStorage.setItem("tokenString", user.access_token);
             window.sessionStorage.setItem("token", "notexists");
                window.sessionStorage.setItem("email", "");
             

             alert("Login successful and sent to your email");
             history.push("/Dashboard");
             
        }).catch(err=>{
            console.log(err);
        });


    }
    return(
        <div className="App">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <form id="loginform">
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="text"
                  className="form-control"
                  id="textInput"
                  name="textInput"
                  aria-describedby="textHelp"
                  placeholder="Enter username"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                />
                
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={(e)=>setPassword(e.target.value)}
                  value={password}
                />
                
              </div>
              
              
            </form>

            <button onClick={loginSubmit}>Login</button>
          </div>
          
        </div>
      </div>
    </div>
 
    )
}
export default Login; 