import React, { useEffect, useState } from 'react';
import Product from '../../components/Product/Product';
import axios from 'axios';
import LoadingBox from '../../components/LoadingBox/LoadingBox';
import MessageBox from '../../components/MessageBox/MessageBox';

export default function HomeScreen() {
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                setLoading(true);
                const {data}= await axios.get('/api/products');
                 console.log(data);
                setLoading(false);
                setProducts(data);
            }catch(error){
                setError(error.message);
                setLoading(false);
            }
        };
        fetchData();
    },[]);
  return (
    <div>
        {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
          </div>
        )}
    </div>
  );
}