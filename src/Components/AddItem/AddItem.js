import React from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { axios } from 'axios';
import auth from '../../Firebase/Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const AddItem = (e) => {
    const { register, handleSubmit} = useForm();
    const [user] = useAuthState(auth);
    console.log(user);
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


         axios.post('http://localhost:5000/items', data)
            .then(res => {
                console.log(res);
            })  
    }
    return (
        <div className="w-50 mx-auto">
            <h3>Please Add Service</h3>
            <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
                <label>Name :</label>
                <input value={user.displayName} className="mb-2" placeholder="Name" {...register("name", { required: true, maxLength: 20 })}  required readOnly disabled/>
                <label>Email :</label>
                <input className="mb-2" placeholder="Email" value={user.email} type="email" {...register("email")} required readOnly disabled />
                <textarea className="mb-2" placeholder="description" {...register("description")} />
                <input className="mb-2" placeholder="Price" type="number" {...register("price")} />
                <input className="mb-2" placeholder="Quantity" type="number" {...register("quantity")} />
                <input className="mb-2" placeholder="Phot URL" type="text" {...register("picture")} />
                <input type="submit" value='Add Service' />
                <input type="reset" value='Reset Value' />
            </form>
        </div>
    );
};

export default AddItem;