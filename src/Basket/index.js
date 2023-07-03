import React from 'react';
import {useSelector} from "react-redux";
import BasketTable from "../BasketTable";

const Basket = () => {
    const {basket} = useSelector(state => state.BasketSlice)
    return (
        <div className=" w-4/5 ml-20 mt-8 relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Img
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Count
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    basket.map((el) => (
                      <BasketTable el={el}/>
                    ))
                }
                </tbody>
            </table>
        </div>

    );
};

export default Basket;