import React from 'react';
import { GiShoppingCart } from "react-icons/gi";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm flex justify-between px-16">
  <div>
    <a className="btn btn-ghost text-xl text-[#003EA4]">Auction<span className='font-bold text-[#FFD337]'>Gallery</span></a>
  </div>
  <div>
      <div>
     <ul className='flex gap-8 text-center justify-center font-medium'>
        <li><a href="">Home</a></li>
        <li><a href="">Auctions</a></li>
        <li><a href="">Categories</a></li>
        <li><a href="">How to works</a></li>
    </ul>
  </div>
  </div>
  <div className="flex gap-6">
    <div className='content-center'>
      <GiShoppingCart className='w-10 h-7' />
    </div>
      <div className="avatar">
    <div className="w-12 rounded-4xl">
      <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
    </div>
  </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;