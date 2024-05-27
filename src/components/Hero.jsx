export default function Hero() {

    return (
    <div className='bg-[#F6FAB9] md:rounded-br-full'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Grow with US.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-4xl sm:text-3xl text-xl font-bold p-2 border-b-4 border-black'>
           Vape the difference, ignite your senses.
          </p>

        </div>
        <p className='md:text-2xl text-xl font-bold text-[#D2B48C]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut labore et dolore magna aliqua.</p>
        <button className='bg-[#846C5B] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Get Started</button>
      </div>
    </div>
  );
}