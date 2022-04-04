import React from 'react';
import { Bar, BarChart, CartesianGrid, Line, LineChart, Pie, PieChart, XAxis, YAxis } from 'recharts';
import './Dashboard.css';

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
        <div >

            <div className='chart'>
                <div>
                    <h4>Month Wise Sales</h4>
                    <LineChart width={500} height={350} data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <Line dataKey={"sell"}></Line>

                        <XAxis dataKey={"month"}></XAxis>
                        <YAxis></YAxis>

                    </LineChart>
                </div>
                <div>
                    <h4>Month wise Invesment Against revenue</h4>
                    <BarChart width={500} height={350} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={"month"}></XAxis>
                        <YAxis></YAxis>

                        <Bar dataKey="investment" fill="#8884d8" />
                        <Bar dataKey="revenue" fill="#82ca9d" />
                    </BarChart>
                </div>
            </div>
            <div>
                <div>
                    <PieChart>
                        <Pie data={data} dataKey="revenue" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />

                    </PieChart>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Dashboard;