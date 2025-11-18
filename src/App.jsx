
import { useState } from 'react'
import './App.css'
import Auctions from './Components/Active-Auction/Auctions/Auctions'
import Favorites from './Components/Favorites/Favorites'
import Hero from './Components/HeroSection/Hero'
import Navbar from './Components/Navbar/Navbar'

function App() {
  const [data, setData] = useState([]);
  const handleLove = (product)=>{
    const newData = [...data,product];
    setData(newData);
    
  }
  

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
     
      <div className='bg-[#C8D4E9]/30'>
        <div className=' w-9/12 mx-auto'>
          <div className=''>
            <h1 className='font-medium text-4xl text-[rgba(14, 41, 84, 1)] pt-48'>Active Auctions</h1>
            <h4 className='font-semibold opacity-50 mt-2.5'>Discover and bid on extraordinary items</h4>
            <div className='flex justify-between'>
              <div className='w-[] flex justify-between'>
                <div><h2 className='text-2xl font-light'>Items</h2></div>
                <div>
                  <ul className='flex gap-20'>
                    <li><a href="">Current Bid</a></li>
                    <li><a href=""></a>Time Left</li>
                    <li><a href=""></a>Bid Now</li>
                  </ul>
                  <Auctions handleLove={handleLove}></Auctions>
                </div>
              
              </div>
              
              <div className='w-[30%]'>
                      <Favorites data={data}></Favorites>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
