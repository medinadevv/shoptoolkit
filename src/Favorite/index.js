import React from 'react';
import {useSelector} from "react-redux";
import ProductCard from "../ProductCard";

const Favorite = () => {
    const {favorite} = useSelector(state => state.FavoriteSlice)
    return (
        <div className="container">
            <div className="flex flex-wrap gap-10 mt-8 ml-8">
                {
                    favorite.map((el) => (
                        <ProductCard el={el}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Favorite;