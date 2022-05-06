import React from 'react';
import { useParams } from 'react-router-dom';
import useItemDetails from '../../Hooks/useItemDetails';

const MyItems = () => {
    const {serviceId} = useParams()
    const [service] = useItemDetails(serviceId)
    return (
        <div>
            <h3>detail : {service.name} {serviceId}</h3>
        </div>
    );
};

export default MyItems;