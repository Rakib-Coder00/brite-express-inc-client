import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useItemDetails from '../../Hooks/useItemDetails';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

const ItemsDetails = () => {
    const { serviceId } = useParams()
    const [service] = useItemDetails(serviceId)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const updateStock = (e) => {
        e.preventDefault()
        const restockQuantity = Number(service.quantity) + Number(e.target.number.value)
        const soldItem = Number(service.sold)

        const url = `http://localhost:5000/service/${serviceId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ quantity: restockQuantity, sold: soldItem })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }

    const delivered = () => {
        const deliveredQuantity = Number(service.quantity) - 1
        const soldItem = Number(service.sold) + 1
        console.log(soldItem);
        const url = `http://localhost:5000/service/${serviceId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ quantity: deliveredQuantity, sold: soldItem })
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
                        <span className="fw-bold">Price: {service.price}</span> <br />
                        <span className="fw-bold">Sold: {service.sold}</span>
                        <p className="lead text-muted">{service.description}</p>
                        {/* <button >Restock</button> */}
                        <Button className="btn mx-2" variant="primary" onClick={handleShow}>
                            Restock
                        </Button>
                        <button onClick={delivered} className="btn">Delivered</button>
                    </div>
                    <div className="col-lg-6 order-first order-lg-0">
                        <img src={service.picture} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Restock Amount</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className='d-flex justify-content-between' onSubmit={updateStock}>
                        <input className='w-50' type="number" name="number" id="number" placeholder='Restock Amount' required />
                        <input className='btn px-3' type="submit" value='Restock' variant="primary" onClick={handleClose} />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

    );
};

export default ItemsDetails;