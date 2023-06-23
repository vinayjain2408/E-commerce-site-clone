import React, {useState, useEffect} from 'react';
import axios from 'axios';
import FeatureCard from '../../Components/FeatureCard/FeatureCard';

function Categories() {
    const [categories, setCategories]=useState([])
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/categories`)
            .then((result) => {
                console.log(result.data)
                setCategories(result.data)
            })
    }, [])

    if(categories.length===0){
      return "Loading...."
    }
  return (
      <FeatureCard  cards={categories}/>
  )
}

export default Categories