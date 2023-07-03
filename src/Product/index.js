import React, {useEffect, useState} from 'react';
import axios from "axios";
import ProductCard from "../ProductCard";

const Product = () => {
    const [product, setProduct] = useState([])
    const getProduct = () => {
        axios(`https://api.escuelajs.co/api/v1/products`)
            .then((res) => {
                setProduct(res.data.slice(0, 18))
            })
    }
    useEffect(() => {
        getProduct()
    }, [])
    return (
        <div className="container">
            <div className="flex flex-wrap gap-10 mt-8 ml-8">
                {
                    product.map((el) => (
                        <ProductCard el={el}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Product;