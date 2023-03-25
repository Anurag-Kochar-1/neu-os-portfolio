"use client"

import React, { useRef } from 'react'
import { TaskBarIconsDataArray } from '@/constants/data/TaskBarIconsData/TaskBarIconsData'
import TaskBarIcon from '../TaskBarIcon/TaskBarIcon'

// Icons Import
import { FaSearch } from "react-icons/fa"
import { BsHammer, BsPersonFill, BsInstagram, BsTwitter, BsLinkedin, BsYoutube } from "react-icons/bs"
import { GiSkills } from "react-icons/gi"
import { MdMail } from "react-icons/md"
import { RiMusic2Fill } from "react-icons/ri"
import { IoMdDownload } from "react-icons/io"


const TaskBar = () => {


  const iconRef = useRef<HTMLDivElement | null>(null)

  return (
    <div className='z-30 fixed bottom-2 md:bottom-[7vh] max-w-[95%] md:w-auto h-20 bg-black border border-black flex justify-center items-center rounded-lg'>
      <div className='w-full h-full -mt-2 -ml-2 bg-[#F7CF59] border border-black flex justify-start items-center rounded-lg space-x-2 sm:space-x-5 px-5'>

        {/* Search Icon - m */}
        <div className={`md:hidden w-12 h-12 flex justify-center items-center bg-black border border-black hover:scale-110 transition-all duration-150 ease-in-out`}>
          <div className={`w-full h-full -mt-2 -ml-2 flex justify-center items-center bg-[#39DBFF] text-white border-2 border-black`}>
            <FaSearch className='text-black' size={"1.5rem"} />
          </div>
        </div>

        {/* Search Icon - d */}
        <div className={`hidden md:inline-flex w-14 h-14 justify-center items-center bg-black border border-black hover:scale-110 transition-all duration-150 ease-in-out`}>
          <div className={`w-full h-full -mt-2 -ml-2 flex justify-center items-center bg-[#39DBFF] text-white border-2 border-black`}>
            <FaSearch className='text-black' size={"2rem"} />
          </div>
        </div>
        <div className='w-[2px] h-full border-r-2 border-r-black'></div>

        {/* Skills icon */}
        <div className={`lg:hidden w-12 h-12 flex justify-center items-center bg-black border border-black`}>
          <div className={`w-full h-full -mt-2 -ml-2 flex justify-center items-center bg-[#FFFFB0] text-white border-2 border-black`}>
            <GiSkills className='text-black' size={"1.5rem"} />
          </div>
        </div>

        {/* Projects icon */}
        <div className={`lg:hidden w-12 h-12 flex justify-center items-center bg-black border border-black`}>
          <div className={`w-full h-full -mt-2 -ml-2 flex justify-center items-center bg-[#F9A47B] text-white border-2 border-black`}>
            <BsHammer className='text-black' size={"1.5rem"} />
          </div>
        </div>

        {/* About icon */}
        <div className={`lg:hidden w-12 h-12 flex justify-center items-center bg-black border border-black`}>
          <div className={`w-full h-full -mt-2 -ml-2 flex justify-center items-center bg-white text-white border-2 border-black`}>
            <BsPersonFill className='text-black' size={"1.5rem"} />
          </div>
        </div>

        {/* Contact icon */}
        <div className={`lg:hidden w-12 h-12 flex justify-center items-center bg-black border border-black`}>
          <div className={`w-full h-full -mt-2 -ml-2 flex justify-center items-center bg-[#E7E7E7] text-white border-2 border-black`}>
            <MdMail className='text-black' size={"1.5rem"} />
          </div>
        </div>

        {/* Download icon */}
        <div className={`lg:hidden w-12 h-12 flex justify-center items-center bg-black border border-black`}>
          <div className={`w-full h-full -mt-2 -ml-2 flex justify-center items-center bg-[#00FD74] text-white border-2 border-black`}>
            <IoMdDownload className='text-black' size={"1.5rem"} />
          </div>
        </div>




        {/* Music icon */}
        <div className={`hidden lg:inline-flex w-14 h-14 justify-center items-center bg-black border border-black hover:scale-110 transition-all duration-150 ease-in-out`} ref={iconRef}>
          <div className={`w-full h-full -mt-2 -ml-2 flex justify-center items-center bg-[#FD5D5D] text-white border-2 border-black`}>
            <RiMusic2Fill className='text-black' size={"2rem"} />
          </div>
        </div>

        {/* Contact icon */}
        <div className={`hidden lg:inline-flex w-14 h-14 justify-center items-center bg-black border border-black hover:scale-110 transition-all duration-150 ease-in-out`}>
          <div className={`w-full h-full -mt-2 -ml-2 flex justify-center items-center bg-[#FDF300] text-white border-2 border-black`}>
            <MdMail className='text-black' size={"2rem"} />
          </div>
        </div>

        {/* Download icon */}
        <div className={`hidden lg:inline-flex w-14 h-14 justify-center items-center bg-black border border-black hover:scale-110 transition-all duration-150 ease-in-out`}>
          <div className={`w-full h-full -mt-2 -ml-2 flex justify-center items-center bg-[#00FD74] text-white border-2 border-black`}>
            <IoMdDownload className='text-black' size={"2rem"} />
          </div>
        </div>

        {/* About icon */}
        <div className={`hidden lg:inline-flex w-14 h-14 justify-center items-center bg-black border border-black hover:scale-110 transition-all duration-150 ease-in-out`}>
          <div className={`w-full h-full -mt-2 -ml-2 flex justify-center items-center bg-[#DB7CFD] text-white border-2 border-black`}>
            <BsPersonFill className='text-black' size={"2rem"} />
          </div>
        </div>

        {/* Instagram icon */}
        <div className={`hidden lg:inline-flex w-14 h-14 justify-center items-center bg-black border border-black hover:scale-110 transition-all duration-150 ease-in-out`}>
          <div className={`w-full h-full -mt-2 -ml-2 flex justify-center items-center bg-[#DB3073] text-white border-2 border-black`}>
            <BsInstagram className='text-black' size={"2rem"} />
          </div>
        </div>


        {/* Twitter icon */}
        <div className={`hidden lg:inline-flex w-14 h-14 justify-center items-center bg-black border border-black hover:scale-110 transition-all duration-150 ease-in-out`}>
          <div className={`w-full h-full -mt-2 -ml-2 flex justify-center items-center bg-[#1DA1F2] text-white border-2 border-black`}>
            <BsTwitter className='text-black' size={"2rem"} />
          </div>
        </div>


        {/* Linkedin icon  */}
        <div className={`hidden lg:inline-flex w-14 h-14 justify-center items-center bg-black border border-black hover:scale-110 transition-all duration-150 ease-in-out`}>
          <div className={`w-full h-full -mt-2 -ml-2 flex justify-center items-center bg-[#007BB6] text-white border-2 border-black`}>
            <BsLinkedin className='text-black' size={"2rem"} />
          </div>
        </div>

        {/* Youtube icon  */}
        <div className={`hidden lg:inline-flex w-14 h-14 justify-center items-center bg-black border border-black hover:scale-110 transition-all duration-150 ease-in-out`}>
          <div className={`w-full h-full -mt-2 -ml-2 flex justify-center items-center bg-[#FE0002] text-white border-2 border-black `}>
            <BsYoutube className='text-black' size={"2rem"} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default TaskBar