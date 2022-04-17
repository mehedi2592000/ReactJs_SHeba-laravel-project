import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function Dashboard() {
  return (
    <div className="container">
        <div className="py-4">
        <h1>List</h1>
        <Table striped bordered hover>
  <thead>
  
    <tr>
      <th>Add service Provider</th>
      <td><Button className="btn btn-primary" href={'/Add'}>Add Employee</Button></td>
    </tr>
    
    <tr>
    <th>List and croud opperation</th>
    <td><Button className="btn btn-primary" href={'/List'}>List Employee</Button></td>
    </tr>

    <tr>
    <th>Logout</th>
    <td><Button className="btn btn-primary" href={'/Logout'}>Logout</Button></td>
    </tr>
    
    <Button className="btn btn-primary" href={'/'}>Login</Button>
    
  </thead>
  
</Table>

        </div>
            
            
        </div>
  )
}
