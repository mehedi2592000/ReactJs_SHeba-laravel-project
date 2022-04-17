import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";


const List = (props) => {
    const [products, setProducts] = useState([]);
    let history = useHistory();
    useEffect(() => {
        // axios.get("product/list")
        axios.get("http://127.0.0.1:8000/api/logout")
            .then(resp => {
                console.log(resp.data);
                alert("done")
                history.push("/Dashboard");
            }).catch(err => {
                console.log(err);
                console.log("not found");
                history.push("/Dashboard");
                alert("ok")
            });
    }, []);
    // const cors = require('cors');
    

    return (

        <h1>Logout</h1>
    )
}
export default List; 