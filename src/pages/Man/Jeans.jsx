import React, { useEffect, useState } from 'react';
import './Jeans.css';
import ProductSideFilter from '../../components/ProductSideFilter';
import ProductCard from '../../components/ProductCard';


const Jeans = () => {
    const [pants, setPants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/pants.json')
            .then(res => res.json())
            .then(data => {
                setPants(data)
                setLoading(false)
            })

    }, [])
    return (
        <div className='jeans-page'>
            <ProductSideFilter></ProductSideFilter>
            <div className='cards-container'>
                {
                    pants.map(item => <ProductCard key={item._id} item={item} >
                        {/* <h1>{item.title}</h1>
                        <img src={item.product_img[0]} alt="" /> */}
                    </ProductCard>)
                }
            </div>
        </div>
    );
};

export default Jeans;