import axios from 'axios';
import React, { useEffect, useState } from 'react';

const BarChart = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('data.json')
            .then(data => setProducts(data))

    }, [])
    return (
        <div>
            <h1>Hu ha</h1>
        </div>
    );
};

export default BarChart;