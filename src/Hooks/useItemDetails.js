import { useEffect, useState } from "react";


const useItemDetails = (serviceId) => {
    const [service, setService] = useState({})
    useEffect(() => {
        fetch(`https://enigmatic-river-27486.herokuapp.com/service/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data))
    }, [serviceId, service])
        
    return [service, setService]
};

export default useItemDetails;