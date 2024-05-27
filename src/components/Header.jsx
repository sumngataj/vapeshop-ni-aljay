import vape from '../assets/products/1.png';
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={vape} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#FFBF00] font-bold '>TRENDING NOW!</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Our All new Vape Juices</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button onClick={() => navigate("/shop")} className='bg-gray-200 text-[#FFBF00] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>View More...</button>
        </div>
      </div>
    </div>
  );
}