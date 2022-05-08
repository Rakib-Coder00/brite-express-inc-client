import { useEffect, useState } from "react";


const useItemDetails = (serviceId) => {
    const [service, setService] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/service/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data))
    }, [serviceId, service])
        
    return [service, setService]
};

export default useItemDetails;