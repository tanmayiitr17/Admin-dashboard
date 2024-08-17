import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ data }) => {
    const chartData = {
        labels: ['Facebook', 'Twitter', 'Instagram', 'LinkedIn'],
        datasets: [
            {
                data: data,
                backgroundColor: ['#3b5998', '#00acee', '#C13584', '#0077b5'],
            },
        ],
    };

    return (
        <div style={{height:"80vh"}}>
            <Pie data={chartData} />
        </div>
    );
};

export default PieChart;
