import React from 'react';
import { useParams } from 'react-router-dom';
import useItemDetails from '../../Hooks/useItemDetails';

const ItemsDetails = () => {
    const { serviceId } = useParams()
    const [service, setService] = useItemDetails(serviceId)

    const updateStock = (e)=>{
        e.preventDefault()
        const restockQuantity = parseInt(service.quantity) +  Number(e.target.number.value)
        
        console.log(typeof restockQuantity);

        const url = `http://localhost:5000/service/${serviceId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ quantity: restockQuantity })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })

    }

    const delivered = ()=>{
        const deliveredQuantity = service.quantity - 1 
        // setService({...service, quantity: deliveredQuantity})
        console.log(deliveredQuantity); 
        const url = `http://localhost:5000/service/${serviceId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ quantity: deliveredQuantity })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        }) 
    }

    return (
        <div className='container py-5 text-center'>
            <div className="container">
                <div className="row gy-lg-5 align-items-center">
                    <div className="col-lg-6 order-lg-1 text-center text-lg-start">
                        <div className="title pt-3 pb-5">
                            <h2 className="position-relative d-inline-block ms-4">{service.name}</h2>
                        </div>
                        <span className="fw-bold">Supplier: {service.name}</span> <br />
                        <span className="fw-bold">Quantity: {service.quantity}</span> <br />
                        <span className="fw-bold">Price: {service.price}</span>
                        <p className="lead text-muted">{service.description}</p>
                        <button className="btn mx-2">Restock</button>
                        <button onClick={delivered} className="btn">Delivered</button>
                    </div>
                    <div className="col-lg-6 order-lg-0">
                        <img src={service.picture} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
            <h4>restock</h4>
            <form onSubmit={updateStock}>
                <input type="number" name="number" id="number" required />
                <input type="submit" value='restock' />
            </form>
        </div>

    );
};

export default ItemsDetails;