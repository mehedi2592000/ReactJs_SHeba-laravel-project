import React, { useState, useEffect } from "react";
import axios from "axios";

import { useHistory } from "react-router-dom";

const Logout = (props) => {
    let history = useHistory();
    
    
    
    const logout = () => {
        var tokenString = window.sessionStorage.getItem("tokenString");
        var obj = { tokenString: tokenString };
        axios.post("http://127.0.0.1:8000/api/logout", obj)
            .then(resp => {
                window.sessionStorage.setItem("token", "notexists");
                window.sessionStorage.setItem("email", "");
                
                alert("logout");

                history.push("/Dashboard");
            }).catch(err => {
                console.log(err);
                alert("sory do not logout");
            });
       
    }


    return (
        <center>
            <div>
                

                <h1> Logout</h1>
                <button onClick={logout}>Logout</button>
                
            </div>
        </center>
    )
}
export default Logout; 