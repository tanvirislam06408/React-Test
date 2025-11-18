import React, { useEffect, useState } from 'react';
import Active from '../Active';

const Auctions = ({handleLove}) => {

    const [auctions, setAuction] = useState([]);

    useEffect(() => {
        fetch('auction.json')
            .then(res => res.json())
            .then(data => setAuction(data))
    }, [])

    return (
        <div>
            <div className='bg-white p-7 rounded-3xl'>
                {
                    auctions.map(auction => <Active handleLove={handleLove} key={auction.id} auction={auction}></Active>)
                }
            </div>
        </div>
    );
};

export default Auctions;