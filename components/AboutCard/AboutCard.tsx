import Image from 'next/image'
import React from 'react'
import anuragPNG from "../../public/images/creator/anuragPNG.png"


// row-span-6 lg:row-start-1 lg:row-end-6

const AboutCard = () => {
  return (
    <div className='z-20 col-span-11 sm:col-span-9 md:col-span-7 lg:col-span-5 xl:col-span-4 2xl:col-span-3  flex flex-col items-center justify-center border-2 border-black bg-black'>
      <div className='w-full h-full -mt-2 -ml-2 flex flex-col justify-start items-center bg-white border-2 border-black'>

        {/* ----------- Header ----------- */}
        <div className='w-full h-10 flex justify-between items-center bg-black px-2'>
          {/* dots */}
          <div className='flex justify-center items-center space-x-2'>
            <span className='w-3 h-3 rounded-full bg-[#269B4E]'></span>
            <span className='w-3 h-3 rounded-full bg-[#E9493D]'></span>
            <span className='w-3 h-3 rounded-full bg-[#FFF052]'></span>
          </div>

          {/* title */}
          <p className='text-white font-semibold'> Frontend Developer </p>

          <span>.</span>
        </div>

        {/* ---------- Photo ----------*/}
        <div className='w-[90%] lg:w-[70%] bg-green-500 flex justify-center items-center p-3 my-3'>
          <div className='bg-yellow-300 flex justify-center items-center p-3'>
            <div className='bg-red-600 flex justify-center items-center pt-3'>
              <Image src={anuragPNG} quality={100} alt="anurag" width={700} height={700} className="" />
            </div>
          </div>

        </div>


        {/* ----------- Name, description,and read more button -----------*/}
        <div className='w-full flex flex-col items-center justify-start text-center space-y-2 px-1 sm:px-3'>
          <h3 className='text-2xl font-bold'> Anurag Kochar </h3>
          <p className='text-base font-medium  '> Hey folks, Im a frontend dev,
            who loves to build products which solves real-world problems, and yeah I create content too. :D
          </p>

          <button type='button' title='read-more' className='my-5'> read more btn </button>
        </div>


        {/* ----------- Bottom bar -----------*/}
        <div className='w-full h-24 flex justify-between items-center border-t-2 border-t-black'>

        </div>




      </div>
    </div>
  )
}

export default AboutCard