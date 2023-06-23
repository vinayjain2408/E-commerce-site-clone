import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Hero from '../../Components/Hero/Hero';
import ProductCard from '../../Components/ProductCard/ProductCard';
import StatCard from '../../Components/StatCard/StatCard';
import Categories from '../../Components/Categories/Categories';


function Home() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((result) => {
                console.log(result.data)
                setProducts(result.data)
            })
    }, [])
    return (
        <>
            <Hero />
            <Categories />
            <div className="flex flex-col text-center w-full mt-20">
                <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">MOST POPULAR PRODUCTS</h1>
            </div>
            {
                products.length > 0 ?
                    <ProductCard products={products} />
                    : "Loading......"
            }
            <StatCard />
        </>
    )
}

export default Home