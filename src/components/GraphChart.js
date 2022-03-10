import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const GraphChart = ({ chartData }) => {
    console.log(chartData);


    return (
        <div>
            <PolarArea data={chartData} />
        </div>
    );
};

export default GraphChart;