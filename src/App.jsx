
import './App.css'
import Auctions from './Components/Active-Auction/Auctions/Auctions'
import Hero from './Components/HeroSection/Hero'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
     
      <div>
        <div className='mt-32 w-9/12 mx-auto'>
          <div>
            <h1 className='font-medium text-4xl text-[rgba(14, 41, 84, 1)]'>Active Auctions</h1>
            <h4 className='font-semibold opacity-50 mt-2.5'>Discover and bid on extraordinary items</h4>
            <div>
              <div className='w-[70%] flex justify-between mb-9 border-b-2'>
                <div><h2 className='text-2xl font-light'>Items</h2></div>
                <div>
                  <ul className='flex gap-20'>
                    <li><a href="">Current Bid</a></li>
                    <li><a href=""></a>Time Left</li>
                    <li><a href=""></a>Bid Now</li>
                  </ul>
              
                </div>
              
              </div>
               <div className='w-[68%]'>
                 <Auctions></Auctions>
               </div>
              
              <div className='w-[30%]'>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
