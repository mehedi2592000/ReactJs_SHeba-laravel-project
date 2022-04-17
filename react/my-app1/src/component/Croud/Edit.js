import React, { useState, userEffect } from "react";

import axios from "axios";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router-dom";

const Edit = (props) => {
    //let [token, setToken] = useState("");

    

    let [id, setid] = useState("");
    let [name, setName] = useState("");
    let [nid, setNid] = useState("");
    let [email, setEmail] = useState("");
    let [phone, setPhone] = useState("");
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [status, setstatus] = useState("");
    
    const {pid} =useParams();
    const [products, setProducts] = useState([]);

    const user=products.filter((product)=>product.id==pid)
      console.log(user[0])
    
    const registrationSubmit = () => {
        

        var obj = { name: name, nid: nid, email: email, phone: phone, username: username, password: password, status: status };
        axios.post("http://127.0.0.1:8000/api/Servicproviderupdate/"+pid, obj)
            .then(resp => {
                 //var token = resp.data;
                 console.log(resp.data);
                setProducts(resp.data);

                
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
      <th>Id</th>
      <td><input type="text" value={id} onChange={(e) => setid(e.target.value)}></input></td>
    </tr>
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
<Button onClick={registrationSubmit}>Signup</Button>
        </div>
            
            
        </div>

    )
}
export default Edit; 