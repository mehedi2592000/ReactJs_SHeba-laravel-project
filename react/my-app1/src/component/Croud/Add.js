import React, { useState, userEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Add = () => {
    //let [token, setToken] = useState("");
    let [name, setName] = useState("");
    let [nid, setNid] = useState("");
    let [email, setEmail] = useState("");
    let [phone, setPhone] = useState("");
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [status, setstatus] = useState("");

    const registrationSubmit = () => {
        var obj = { name: name, nid: nid, email: email, phone: phone, username: username, password: password, status: status };
        axios.post("http://127.0.0.1:8000/api/addServicprovider", obj)
            .then(resp => {
                // var token = resp.data;
                // console.log(token);
                // var user = { userId: token.userid, access_token: token.token };
                // localStorage.setItem('email', JSON.stringify(user));
                // console.log(localStorage.getItem('user'));
                alert("Registration successful");
            }).catch(err => {
                console.log(err);
                alert(err);
            });


    }

    return (
        <div className="container">
        <div className="py-4">
        <h1>List</h1>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>Name</th>
      <td><input type="text" value={name} onChange={(e) => setName(e.target.value)}></input></td>
    </tr>
    <tr>
      <th> Nid</th>
      <td><input type="text" value={nid} onChange={(e) => setNid(e.target.value)}></input></td>
    </tr>
    <tr>
      <th> Email</th>
      <td><input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input></td>
    </tr>
    <tr>
      <th> Phone no</th>
      <td><input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}></input></td>
    </tr>
    <tr>
      <th> Username</th>
      <td><input type="text" value={username} onChange={(e) => setUsername(e.target.value)}></input></td>
    </tr>
    <tr>
      <th> Password</th>
      <td><input type="text" value={password} onChange={(e) => setPassword(e.target.value)}></input></td>
    </tr>
    <tr>
      <th> status</th>
      <td><input type="text" value={status} onChange={(e) => setstatus(e.target.value)}></input></td>
    </tr>
      
    
  </thead>
  
</Table>
<button onClick={registrationSubmit}>Signup</button>
        </div>
            
            
        </div>

    )
}
export default Add; 