import Image from 'next/image'
import React from 'react'
import anuragPNG from "../../public/images/creator/anuragPNG.png"
import lightGrayLinesBg from "../../public/images/BGs/lightGrayLinesBg.png"

// h-max

const AboutCard = () => {
  return (
    <div className='z-20 my-5 col-start-2 col-end-12 md:col-start-2 md:col-end-12 lg:col-start-3 lg:col-end-11 xl:col-start-1 xl:col-end-7 xl:mx-5 2xl:col-start-1 2xl:col-end-6 2xl:mx-6  flex flex-col items-center justify-center border-2 border-black bg-black'>
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

        {/* ---------- Photo and details Container ---------- */}
        <div className='w-full flex flex-col sm:flex-row sm:px-5 justify-start items-center'>
          {/* ---------- Photo ----------*/}
          <div className='w-[90%] lg:w-[70%] bg-green-500 flex justify-center items-center p-3 my-3'>
            <div className='bg-yellow-300 flex justify-center items-center p-3'>
              <div className='bg-red-600 flex justify-center items-center pt-3'>
                <Image src={anuragPNG} quality={100} alt="anurag" width={700} height={700} draggable="false" />
              </div>
            </div>

          </div>


          {/* ----------- Name, description,and read more button -----------*/}
          <div className='w-full h-[90%] flex flex-col items-center justify-start text-center space-y-2 px-1 sm:px-3 py-5'>
            <h3 className='text-2xl font-bold'> Anurag Kochar </h3>
            <p className='text-base font-medium'> Hey folks, Im a frontend dev,
              who loves to build products which solves real-world problems, and yeah I create content too. :D
            </p>

            <button type='button' title='read-more' className='my-10 px-7 py-1 rounded-none border-2 border-black '> read more </button>
          </div>
        </div>



        {/* ----------- Bottom bar -----------*/}
        <div className='flex w-full h-20 relative justify-between items-center border-t-2 border-t-black px-5' >
          <Image src={lightGrayLinesBg} alt="lightGrayLinesBg" width={400} height={400} className="absolute inset-0 w-full h-full object-cover opacity-40" draggable="false" />
          <p className='text-base font-semibold'>@anurag__kochar</p>

          <span className='text-base font-semibold text-black'> Punjab | India </span>
        </div>




      </div>
    </div>
  )
}

export default AboutCard