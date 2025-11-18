import { FaRegHeart } from "react-icons/fa";
import FavroitList from './FavroitList';
const Favorites = ({ data }) => {
  const total = data.reduce((acc, curr) => acc + curr.currentBidPrice, 0);
    



    return (
        <div>
            {
                data.length <= 0 ? (
                    <div className='bg-white p-10 rounded-3xl'>
                        <h1 className='text-center border-b-2 border-black/50 flex items-center gap-2 font-bold text-4xl'><span><FaRegHeart /></span>Favorite Items</h1>
                        <div className='text-center mt-4 py-4 border-b-2 border-black/50'>
                            <h2 className='text-2xl '>No favorites yet</h2>
                            <p>Click the heart icon on any item to add it to your favorites</p>
                        </div>
                        <div className='flex justify-between p-4'>
                            <h1 className=' text-2xl'>Total Bids Amount </h1>
                            <h2 className='text-2xl'>00000$</h2>
                        </div>
                    </div>

                ) : (
                    <div className='bg-white p-10 rounded-3xl'>
                        <h1 className='text-center border-b-2 border-black/50 flex items-center gap-2 font-bold text-4xl'><span><FaRegHeart /></span>Favorite Items</h1>
                        <div className='text-center mt-4 py-4 border-b-2 border-black/50'>
                            {
                                data.map(dat => <FavroitList key={dat.id} dat={dat}></FavroitList>)
                            }
                        </div>
                        <div className='flex justify-between p-4'>
                            <h1 className=' text-2xl'>Total Bids Amount </h1>
                            <h2 className='text-2xl'>{total}</h2>
                            
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Favorites;