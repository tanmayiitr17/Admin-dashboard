import React from 'react';
import { Bar } from 'react-chartjs-2';

const ThirdChart = ({ data }) => {
    const chartData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Weekly Post Distribution',
                data: data,
                backgroundColor: 'green',
            },
        ],
    };

    return (
        <div style={{ height: "60vh" }}>
            <Bar data={chartData} />
        </div>
    );
};

export default ThirdChart;
