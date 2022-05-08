import React, { useEffect, useState } from 'react';
import { axios } from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../Firebase/Firebase.init';

const MyItems = () => {
    const [items, setItems] = useState([]);
    const [user] = useAuthState(auth)
    useEffect(() => {
        const getItems = async () => {
            // const email = user.email
            const url = `http://localhost:5000/items`;
            // const {data} = await axios.get(url)
            // setItems(data);
            fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
        }
        getItems();
    }, [user])
    
    return (
        <div>
            <h4>My items : {items.length}</h4>
        </div>
    );
};

export default MyItems;