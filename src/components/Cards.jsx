import Single from '../assets/products/4.png'
import Double from '../assets/products/2.png'
import Triple from '../assets/products/3.png'
import { useNavigate } from "react-router-dom";


export default function Cards() {
    const navigate = useNavigate();
    
    return (
            <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Reef Set</h2>
              <p className='text-center text-4xl font-bold'>₱550.00</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Dreadtac Milk O’s – K Dess*rt</p>
                  <p className='py-2 border-b mx-8'>VPDam Tiger 0.36 Ohms</p>
                  <p className='py-2 border-b mx-8'>Dreadtac Milk O’s – G Bears</p>
              </div>
              <button onClick={() => navigate("/shop")} className='bg-gray-200 text-[#FFBF00] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Purchase Now</button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Beef Packer</h2>
              <p className='text-center text-4xl font-bold'>₱950.00</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Hellvape Dead Rabbit SE RDA Set</p>
                  <p className='py-2 border-b mx-8'>WOTOFO NUDGE RDA 24mm</p>
                  <p className='py-2 border-b mx-8'>Wick n’ Vape Cotton Bacon</p>
              </div>
              <button onClick={() => navigate("/shop")} className='bg-[#FFBF00] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Purchase Now</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Blastoise</h2>
              <p className='text-center text-4xl font-bold'>₱750.00</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>VPDam Tiger 0.36 Ohms</p>
                  <p className='py-2 border-b mx-8'>Hellvape Dead Rabbit SE RDA Set</p>
                  <p className='py-2 border-b mx-8'>Boru Vape Banshee – Rainbow</p>
              </div>
              <button onClick={() => navigate("/shop")} className='bg-gray-200 text-[#FFBF00] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Purchase Now</button>
          </div>
      </div>
    </div>
    );
}