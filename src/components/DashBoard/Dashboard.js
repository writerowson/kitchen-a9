import React from 'react';
import { Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='mx-5 d-flex row '>
            <div className='col-lg-7 col-12 mb-5'>
                <LineChart width={400} height={400} data={data} >
                    <Line dataKey={'investment'}></Line>
                    <Line dataKey={'revenue'}></Line>
                    <XAxis dataKey={'month'}></XAxis>
                    <YAxis ></YAxis>
                    <Tooltip></Tooltip>
                </LineChart>

                <p className='mt-5 text-start'>Simple line chart of Total investment and revenue</p>
            </div>

            <div className='col-lg-5 col-12 ' >
                <PieChart width={600} height={500}>
                    <Pie
                        dataKey="sell"
                        startAngle={180}
                        endAngle={0}
                        data={data}
                        cx="40%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />

                </PieChart>
                <p> PieChart of sell in 2021</p>
            </div>

        </div>
    );
};

export default Dashboard;