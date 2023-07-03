import React, {useState} from 'react';
import {AiFillHeart} from "react-icons/ai";
import {BsBasket} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {addBasket} from "../reducer/BasketSlice";
import {Link} from "react-router-dom";
import {addFavorite} from "../reducer/FavoriteSlice";

const  ProductCard = ({el}) => {
    const dispatch = useDispatch()
    const [button, setButton] = useState(false)
    const {favorite} = useSelector(state => state.FavoriteSlice)
    const {todo}= useSelector(state => state.ToDoSlice)
    const heart = favorite.some(some => some.id === el.id)
    const addBtn = () => {
        setButton(!button)
    }
    return (
        el.title.includes(todo) ?
        <div
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src={el.images} alt=""/>
            </a>
            <div className=" text-start ml-2 mt-3">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{el.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{el.price}</p>

                {
                    button ?
                       <Link to={"/basket"}>
                           <button type="button"
                                   className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                               <BsBasket/>
                           </button>
                       </Link>
                        :
                        <button onClick={() => {
                            dispatch(addBasket(el))
                            dispatch(addBtn)
                        }
                        }
                                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                            AddBasket
                        </button>
                }


                <button onClick={()=> dispatch(addFavorite(el))}
                        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                    <AiFillHeart className={heart ? "text-red-600" : "text-white" } />
                </button>
            </div>
        </div> : ""
    );
};

export default ProductCard;