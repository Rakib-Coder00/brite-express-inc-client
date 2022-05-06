import React from 'react';
import { Table } from 'react-bootstrap';
import useServices from '../../Hooks/useServices';

const ManageInventory = () => {
    const [services] = useServices()
    return (
        <div className='container my-5'>
            <div className='title text-center'>
                <h2 className='position-relative d-inline-block'>Manage Inventory</h2>
            </div>

            <Table responsive className='my-5' striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        services.map(service => (
                            <tr key={service._id}>
                                <td>1</td>
                                <td>{service.name}</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageInventory;