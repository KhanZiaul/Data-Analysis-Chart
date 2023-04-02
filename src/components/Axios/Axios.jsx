import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Axios = () => {
    const [phoneData,setPhoneData] = useState([])
    useEffect(()=> {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const loadedData = data.data.data ;
            const phoneData = loadedData.map(phone =>{
                const partPhone = phone.slug.split('-');
                const price = parseInt(partPhone[1]);
                const phoneInfo = {
                    name : phone.phone_name,
                    price : price
                }
                return phoneInfo ;
            })

            console.log(phoneData);
        })
    },[])

    return (
        <div>
            
        </div>
    );
};

export default Axios;