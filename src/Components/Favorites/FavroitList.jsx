import React from 'react';
import { FaRegHeart } from "react-icons/fa";

const FavroitList = ({dat}) => {
    const {id, title, image, bidsCount, timeLeft, currentBidPrice, description} = dat;

    return (
        <div>
             <div className='flex justify-between mb-2'>
                            <div className='flex space-x-3'>
                                <img src={image} className='w-10 h-10 object-cover' alt="" />
                                <h2>{title}</h2>
                            </div>
                            <div>
                                <ul className='flex gap-20 justify-end'>
                                    <li>{currentBidPrice}</li>
                                    <li>{timeLeft}</li>
                                    <li><FaRegHeart /></li>
                                </ul>
                            </div>
                        </div>
        </div>
    );
};

export default FavroitList;