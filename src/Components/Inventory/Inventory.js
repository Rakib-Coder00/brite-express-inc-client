import React from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import useServices from './../../Hooks/useServices';

const Inventory = () => {
    const [services] = useServices()
    const navigate = useNavigate()
    const navigateToDetail = id => {
        // console.log(id);
        navigate(`/service/${id}`)
    }
    return (
        <div className='container  py-5'>
            <div className='title text-center'>
                <h2 className='position-relative d-inline-block'>Our Inventory</h2>
            </div>
            <div className="row g-3 py-5 ">
                {
                    services.slice(0,6).map(service => (
                        <div key={service._id} className="card border-0 col-md-6 col-lg-4 bg-transparent my-3">
                            <img src={service.picture} alt="" />
                            <div className="card-body px-0">
                                <h4 className="card-title">{service.name}</h4>
                                <p className="card-text">
                                    <small className="text-muted">
                                        <span className="fw-bold">Supplier: {service.name}</span> <br />
                                        <span className="fw-bold">Quantity: {service.quantity}</span> <br />
                                        <span className="fw-bold">Price: {service.price}</span>
                                    </small>
                                </p>
                                <p className="card-text mt-3 text-muted">{service.description}</p>
                                
                                <button onClick={() => navigateToDetail(service._id)} className="btn">Update</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <button className='btn' onClick={()=> navigate('/manageInventory')}>See All Items <FontAwesomeIcon className='' icon={faArrowRight} /></button>
        </div>
    );
};

export default Inventory;