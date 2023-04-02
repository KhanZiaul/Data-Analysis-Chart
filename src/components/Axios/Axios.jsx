import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Axios = () => {
    const [phoneData,setPhoneData] = useState([])
    useEffect(()=> {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => console.log(data.data.data))
    },[])

    return (
        <div>
            
        </div>
    );
};

export default Axios;