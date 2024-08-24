import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './Home.css';


function Home({ users, handleShow, handleDelete, handleUpdate }) {

    return (
        <div className='homeApp'>
            <h5 className='text-center'>Coding Camp</h5>
            <h5 className='text-center'>CRUD APP</h5>
            <div className='homeChild'>
                <Table striped bordered hover responsive>
                    <thead className='text-center' style={{ backgroundColor: 'black', color: 'white' }}>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile Number</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((i) => (
                                <tr className='text-center' key={i.MobileNumber}>
                                    <td>{i.Name}</td>
                                    <td>{i.Email}</td>
                                    <td>{i.MobileNumber}</td>
                                    <td>{i.Age}</td>
                                    <td><Button variant="primary" onClick={() => handleUpdate(i.id, i.Name, i.Email, i.MobileNumber, i.Age)}>Update</Button>&nbsp;<Button variant="danger" onClick={() => handleDelete(i.id)}>Delete</Button></td>
                                </tr>
                            ))
                        }


                    </tbody>
                </Table>
                <div className="d-grid gap-2 py-2 px-1">
                    <Button variant="outline-success" size="lg" onClick={handleShow}>
                        Create Record
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Home