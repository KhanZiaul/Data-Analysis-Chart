import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Axios = () => {
    const [phoneData, setPhoneData] = useState([])
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const loadedData = data.data.data;
                const phoneData = loadedData.map(phone => {
                    const partPhone = phone.slug.split('-');
                    const price = parseInt(partPhone[1]);
                    const phoneInfo = {
                        name: phone.phone_name,
                        price: price
                    }
                    return phoneInfo;
                })

                console.log(phoneData);
                setPhoneData(phoneData)
            })
    }, [])

    return (
        <div>
                <BarChart width={600} height={300} data={phoneData}>
                    <Bar dataKey="price" fill="#8884d8" />
                    <XAxis dataKey={name}></XAxis>
                    <YAxis></YAxis>
                </BarChart>

        </div>
    );
};

export default Axios;