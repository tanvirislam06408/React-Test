import React from 'react';

const Hero = () => {
    return (
        <div>
            <div className="hero bg-[url('hero.jpg')] h-[730px]">
                <div className='w-full justify-start pl-36 space-y-4'>
                 <h2 className='font-bold text-5xl text-white'>
                    Bid on Unique Items from <br /> Around the World
                 </h2>
                 <h3 className='text-[#FFFFFF] text-2xl'>Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions</h3>
                 <button className='btn rounded-lg'>Explore Auctions</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;