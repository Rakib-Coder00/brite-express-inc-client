import React from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import PageTitle from '../PageTitle/PageTitle';

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = 'http://localhost:5000/service'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
        toast.success('Item added successfully', { "id": 'added' });
    }



    return (
        <div className="w-50 mx-auto my-5">
            <PageTitle title='Add Item' />
            <div className='title text-center'>
                <h2 className='position-relative d-inline-block'>Add Your Items</h2>
            </div>
            <form className="d-flex flex-column my-3" onSubmit={handleSubmit(onSubmit)}>
                <label>Name :</label>
                <input className="mb-2" placeholder="Name" {...register("name", { required: true, maxLength: 20 })} required />
                <label>Email :</label>
                <input className="mb-2" placeholder="Email" type="email" {...register("email")} required />
                <textarea className="mb-2" placeholder="description" {...register("description")} />
                <input className="mb-2" placeholder="Price" type="number" {...register("price")} />
                <input className="mb-2" placeholder="Quantity" type="number" {...register("quantity")} />
                <input className="mb-2" placeholder="Sold" type="number" {...register("sold")} />
                <input className="mb-2" placeholder="Phot URL" type="text" {...register("picture")} />
                <input className='btn' type="submit" value='Add Service' />
                <input className='btn my-3' type="reset" value='Reset Value' />
            </form>
        </div>
    );
};

export default AddItem;