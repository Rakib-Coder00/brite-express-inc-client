import React from 'react';
import { Table } from 'react-bootstrap';
import useServices from '../../Hooks/useServices';
import PageTitle from '../PageTitle/PageTitle';

const ManageInventory = () => {
    const [services, setServices] = useServices() 
    const handleDelete = (id) => {
        const proceedConfirmation = window.confirm('Are you sure you want to delete this service?')
        if (proceedConfirmation) {
            fetch(`http://localhost:5000/service/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    const remainingItems = services.filter(service => service._id !== id)
                    setServices(remainingItems)
                })
        }
    }
    return (
        <div className='container my-5'>
            <PageTitle title='Manage Inventory'/>
            <div className='title text-center'>
                <h2 className='position-relative d-inline-block'>Manage Inventory</h2>
            </div>

            <Table responsive className='my-5' striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        services.map(service => (
                            <tr key={service._id}>
                                <td>1</td>
                                <td>{service.name}</td>
                                <td>Otto</td>
                                <td><button onClick={()=>handleDelete(service._id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageInventory;