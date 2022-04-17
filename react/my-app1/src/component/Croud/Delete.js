import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router-dom";


const Delete = (props) => {
    const [products, setProducts] = useState([]);

    const {pid} =useParams();

    useEffect(() => {
        // axios.get("product/list")
        axios.get(" http://127.0.0.1:8000/api/cproviderDelete/"+pid)
            .then(resp => {
                console.log(resp.data);
                setProducts(resp.data);

                alert("Registration successful");
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
        
        </div>
            
            
        </div>
    )
}
export default Delete; 