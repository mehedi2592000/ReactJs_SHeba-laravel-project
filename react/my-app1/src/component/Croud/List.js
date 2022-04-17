import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router-dom";


const List = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // axios.get("product/list")
        axios.get("http://127.0.0.1:8000/api/Servicprovider")
            .then(resp => {
                console.log(resp.data);
                setProducts(resp.data);
            }).catch(err => {
                console.log(err);
                console.log("not found");
            });
    }, []);
    // const cors = require('cors');
    

    return (
        <div className="container">
        <div className="py-4">
        <h1>List</h1>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>Id</th>
      <th> Name</th>
      <th>Nid</th>
      <th>Email</th>
      <th>phone no</th>
      <th>Username</th>
      <th>Password</th>
      <th>Status</th>
      
    </tr>
  </thead>
  <tbody>
    {
        products.map((p) => (
            <tr>
            
            <td>{p.id}</td>
            <td>{p.name}</td>
            <td>{p.nid}</td>
            <td>{p.email}</td>
            <td>{p.phone}</td>
            <td>{p.username}</td>
            <td>{p.password}</td>
            <td>{p.status}</td>
            <td><Button className="btn btn-primary" href={'/Edit/'+p.id}>EDIT</Button>
            <Button className="btn btn-danger" href={'/Delete/'+p.id}>DELETE</Button></td>

           

            </tr>
         )) }
  </tbody>
</Table>
        </div>
            
            
        </div>
    )
}
export default List; 