import React, { useEffect, useState } from 'react';
import './styles.css'
import axios from 'axios';
import { Loading } from "../Loading/loading";
import { CurrencyInput } from "../currency-input/currency-input";
import { Price } from "../Price/price";
import { ChartComponent } from "../Chart/chart";

export const Data = props => {

    const [loading, setLoading] = useState(true);
    const [priceData, setPriceData] = useState(null);
    const [currency, setCurrency] = useState('USD');

    const API_URL = `https://api.coindesk.com/v1/bpi/currentprice.json`;

    const fetchData = async () => {
        const res = await axios.get(API_URL);
        setPriceData(res.data.bpi);
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (

            loading ? (
                <div className="">
                    <Loading />
                </div>
            ) : (
                <>
                    <div className="price-container">
                        <CurrencyInput setCurrency={ setCurrency } />
                        <Price priceData={ priceData } currency={ currency } />
                    </div>
                    <div className="chart">
                        <ChartComponent setLoading={ setLoading } />
                    </div>
                </>
            )

    );

};

