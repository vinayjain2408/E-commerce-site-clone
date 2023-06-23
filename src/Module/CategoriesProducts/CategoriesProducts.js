import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../../Components/ProductCard/ProductCard';

function CategoriesProducts() {
    const {name}=useParams();
    const [products, setProducts]=useState([])
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/category/${name}`)
            .then((result) => {
                console.log(result.data)
                setProducts(result.data)
            })
    }, [])
    if(products.length===0) return "Loading...."
  return (
    <>
    <ProductCard products={products}/>
    </>
  )
}

export default CategoriesProducts