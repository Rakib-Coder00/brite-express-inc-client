import React from 'react';
import { Table } from 'react-bootstrap';
import toast from 'react-hot-toast';
import useServices from '../../Hooks/useServices';
import PageTitle from '../PageTitle/PageTitle';
import { useNavigate } from 'react-router-dom';

const ManageInventory = () => {
    const [services, setServices] = useServices() 
    const navigate = useNavigate()
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
                toast.success('Item Deleted successfully', { "id": 'deleted' })
        }
        else {
            toast.error('Action Cancelled', { "id": 'cancelled' })
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
                        services.map((service, index) => (
                            <tr key={service._id}>
                                <td>{index + 1}</td>
                                <td>{service.name}</td>
                                <td>Otto</td>
                                <td><button onClick={()=>handleDelete(service._id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <button onClick={()=>navigate('/add')} className='btn text-center'>Add items</button>
        </div>
    );
};

export default ManageInventory;