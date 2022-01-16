import React, { useEffect, useState } from "react";
import Product from './Product';
// import { useReactiveVar } from '@apollo/client'; 
// import { selectedCategoryVar } from './cache';
import {useLocation} from 'react-router-dom';
import { useQuery, gql,makeVar } from "@apollo/client";
import {GET_PRODUCTS_BY_CATERGORY_ID} from '../graphQL/Queries';
 
export default function Products() {
 
  
  const query = new URLSearchParams(useLocation().search);
  const selectedCategory = query.get("path");
   
const [products, setProducts] = useState([]);
const {loading,error,  data } = useQuery(GET_PRODUCTS_BY_CATERGORY_ID,{variables: {categoryId:selectedCategory}});
 
    useEffect(() => {
      if (data) {
        setProducts(data.products.items);
      }
    }, [data]);

    console.log(products);

    return (
        <div className='grid grid-flow-row  md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-10 my-20'>
           {products.map((product)=>(
                <Product key={product.id} product={product} />
           ))}
        </div>
    )
}