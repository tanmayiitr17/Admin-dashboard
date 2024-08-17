import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ data }) => {
    const chartData = {
        labels: data.map((d) => d.date),
        datasets: [
            {
                label: 'Daily User Engagement',
                data: data.map((d) => d.engagement),
                fill: false,
                backgroundColor: 'blue',
                borderColor: 'blue',
            },
        ],
    };

    const options = {
        scales: {
            x: {
                type: 'category',
                labels: data.map((d) => d.date),
            },
        },
    };

    return (
        <div style={{ height: "50vh" }}>
            <Line data={chartData} options={options} />
        </div>
    );
};

export default LineChart;
