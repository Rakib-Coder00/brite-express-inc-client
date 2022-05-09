import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../Firebase/Firebase.init';
import PageTitle from './../PageTitle/PageTitle';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const MyItems = () => {
    const [items, setItems] = useState([]);
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    useEffect(() => {
        const getItems = async () => {
            const email = user.email
            const url = `https://enigmatic-river-27486.herokuapp.com/items?email=${email}`;
            const {data} = await axios.get(url,{
                    headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            setItems(data);
        }
        getItems();
    }, [user])
    
    const handleDelete = (id) => {
        const proceedConfirmation = window.confirm('Are you sure you want to delete this service?')
        if (proceedConfirmation) {
            fetch(`https://enigmatic-river-27486.herokuapp.com/service/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    const remainingItems = items.filter(service => service._id !== id)
                    setItems(remainingItems)
                })
                toast.success('Item Deleted successfully', { "id": 'deleted' })
        }
        else {
            toast.error('Action Cancelled', { "id": 'cancelled' })
        }
    }
    return (
        <div className='container  py-5'>
            <PageTitle title='My Items'/>
        <div className='title text-center'>
            <h2 className='position-relative d-inline-block'>My Items</h2>
        </div>
        <div className="row g-3 py-5 ">
            {
                items.map(service => (
                    <div key={service._id} className="card border-0 col-md-6 col-lg-4 bg-transparent my-3">
                        <img src={service.picture} alt="" />
                        <div className="card-body px-0">
                            <h4 className="card-title">{service.name}</h4>
                            <p className="card-text">
                                <small className="text-muted">
                                    <span className="fw-bold">Supplier: {service.name}</span> <br />
                                    <span className="fw-bold">Quantity: {service.quantity}</span> <br />
                                    <span className="fw-bold">Price: {service.price}</span> <br />
                                    <span className="fw-bold">Sold: {service.sold}</span>
                                </small>
                            </p>
                            <p className="card-text mt-3 text-muted">{service.description}</p>
                            
                            <button onClick={() => navigate(`/service/${service._id}`)} className="btn">Update</button>
                            <button onClick={()=>handleDelete(service._id)} className="btn mx-3">Delete</button>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
    );
};

export default MyItems;