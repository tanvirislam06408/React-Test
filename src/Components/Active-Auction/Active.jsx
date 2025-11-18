import React from 'react';
import { FaRegHeart } from "react-icons/fa";

const Active = ({ auction,handleLove }) => {
    const { id, title, image, bidsCount, timeLeft, currentBidPrice, description } = auction;
    
    



    return (
        <div className='border-t-2 border-black/50   p-4'>
            <div className='flex justify-between mb-4'>
                <div className='flex space-x-3'>
                    <img src={image} className='w-10 h-10 object-cover' alt="" />
                    <h2>{title}</h2>
                </div>
                <div>
                    <ul className='flex gap-20 justify-end'>
                        <li>{currentBidPrice}</li>
                        <li>{timeLeft}</li>
                        <li onClick={()=>handleLove(auction)}><FaRegHeart /></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Active;