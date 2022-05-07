import React from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
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
        <div className="w-50 mx-auto">
            <h3>Please Add Service</h3>
            <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
                <input className="mb-2" placeholder="Name" {...register("name", { required: true, maxLength: 20 })} />
                <textarea className="mb-2" placeholder="description" {...register("description")} />
                <input className="mb-2" placeholder="Price" type="number" {...register("price")} />
                <input className="mb-2" placeholder="Phot URL" type="text" {...register("img")} />
                <input type="submit" value='Add Service' />
            </form>
        </div>
    );
};

export default AddItem;