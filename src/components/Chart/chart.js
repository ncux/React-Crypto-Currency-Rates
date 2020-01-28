import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts';

export const ChartComponent = ({ setLoading }) => {

    const [xAxisData, setXAxisData] = useState({});
    const [yAxisData, setYAxisData] = useState([]);
    const API_URL = `https://api.coindesk.com/v1/bpi/historical/close.json`;

    const getChartData = async () => {
        const res = await axios.get(API_URL);
        const categories = Object.keys(res.data.bpi); // assigns array of keys to categories; for x-axis values
        const series = Object.values(res.data.bpi); // for y-axis values

        setXAxisData({
            xaxis: { categories }
        });

        setYAxisData([
            { name: 'Bitcoin Price', data: series }
        ]);

        setLoading(false);
    };

    useEffect(() => {
        getChartData();
    }, []);

    return (
            <Chart
                options={ xAxisData }
                series={ yAxisData }
                type="line"
                width="1200"
                height="300"
            />
    );

};

