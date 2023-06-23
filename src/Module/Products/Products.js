import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProductCard from '../../Components/ProductCard/ProductCard';
import Categories from '../../Components/Categories/Categories';



function Products() {
  const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((result) => {
                console.log(result.data)
                setProducts(result.data)
            })
    }, [])
 
  return (
    <div>
      <Categories/>
      <div className="flex flex-col text-center w-full mt-20">
                <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">ALL PRODUCTS</h1>
            </div>
      {
        products.length>0 ? <ProductCard products={products}/>: "Loading...."
      }
      
    </div>
  )
}

export default Products