import React from 'react';
import './Services.css'
import useServices from './../../Hooks/useServices';

const Services = () => {
    const [services, setServices] = useServices()
    return (
        <div className='container py-5'>
            <div className='title text-center'>
                <h2 className='position-relative d-inline-block'>Our Services</h2>
            </div>
            <div className="row g-3 py-5">
                {
                    services.map(service => (
                        <div key={service._id} className="card border-0 col-md-6 col-lg-4 bg-transparent my-3">
                            <img src={service.img} alt="" />
                            <div className="card-body px-0">
                                <h4 className="card-title">{service.name}</h4>
                                <p className="card-text mt-3 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aspernatur repudiandae nostrum dolorem molestias odio. Sit fugit adipisci omnis quia itaque ratione iusto sapiente reiciendis, numquam officiis aliquid ipsam fuga.</p>
                                <p className="card-text">
                                    <small className="text-muted">
                                        <span className="fw-bold">Author: </span>John Doe
                                    </small>
                                </p>
                                <button className="btn">Read More</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Services;