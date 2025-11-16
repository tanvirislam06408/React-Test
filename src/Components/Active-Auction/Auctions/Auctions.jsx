import React, { useEffect, useState } from 'react';
import Active from '../Active';

const Auctions = () => {

    const [auctions, setAuction] = useState([]);

    useEffect(() => {
        fetch('auction.json')
            .then(res => res.json())
            .then(data => setAuction(data))
    }, [])

    return (
        <div>
            <div className=''>
                {
                    auctions.map(auction => <Active key={auction.id} auction={auction}></Active>)
                }
            </div>
        </div>
    );
};

export default Auctions;