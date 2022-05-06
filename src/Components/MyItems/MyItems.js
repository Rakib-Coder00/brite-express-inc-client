import React from 'react';
import { useParams } from 'react-router-dom';
import useItemDetails from '../../Hooks/useItemDetails';

const MyItems = () => {
    const { serviceId } = useParams()
    const [service] = useItemDetails(serviceId)
    return (
        <div className='container py-5 text-center'>
            {/* <h3>detail : {service.name} {serviceId}</h3> */}
            <div class="container">
                <div class="row gy-lg-5 align-items-center">
                    <div class="col-lg-6 order-lg-1 text-center text-lg-start">
                        <div class="title pt-3 pb-5">
                            <h2 class="position-relative d-inline-block ms-4">{service.name}</h2>
                        </div>
                        <p class="lead text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ipsam.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga blanditiis, modi exercitationem quae quam eveniet! Minus labore voluptatibus corporis recusandae accusantium velit, nemo, nobis, nulla ullam pariatur totam quos.</p>
                        <button className="btn mx-2">Read More</button>
                        <button className="btn">Read More</button>
                    </div>
                    <div class="col-lg-6 order-lg-0">
                        <img src={service.img} alt="" class="img-fluid" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MyItems;