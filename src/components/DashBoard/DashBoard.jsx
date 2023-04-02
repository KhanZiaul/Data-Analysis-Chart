import React from 'react';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
    ComposedChart
  } from "recharts";

const DashBoard = () => {
   const datas =  [
        {id: 1, name: "John Doe", physics: 75, chemistry: 80, math: 85},
        {id: 2, name: "Jane Smith", physics: 90, chemistry: 85, math: 95},
        {id: 3, name: "Bob Johnson", physics: 60, chemistry: 70, math: 80},
        {id: 4, name: "Alice Brown", physics: 80, chemistry: 90, math: 75},
        {id: 5, name: "Tom Wilson", physics: 70, chemistry: 60, math: 65},
        {id: 6, name: "Sara Lee", physics: 85, chemistry: 75, math: 90},
        {id: 7, name: "Mike Jones", physics: 50, chemistry: 65, math: 70},
        {id: 8, name: "Emily Davis", physics: 95, chemistry: 95, math: 100},
        {id: 9, name: "David Lee", physics: 65, chemistry: 55, math: 60},
        {id: 10, name: "Grace Kim", physics: 75, chemistry: 80, math: 85},
        {id: 11, name: "Mark Chen", physics: 90, chemistry: 85, math: 95},
        {id: 12, name: "Linda Nguyen", physics: 80, chemistry: 90, math: 75},
      ]
    return (
        <div>
            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart 
                width={600}
                height={300}
                data={datas}
                >
                    

                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DashBoard;