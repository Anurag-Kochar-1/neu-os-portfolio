"use client"

import React from 'react'
import { ITaskBarIconsData } from "../../constants/TaskBarIconsData/TaskBarIconsData"
import { IoMdDownload } from "react-icons/io"
import { MdMail } from "react-icons/md"
import { BsFillPersonFill, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs"
import { ImLinkedin2 } from "react-icons/im"
import {RiMusic2Fill} from "react-icons/ri"


interface IProps {
    icon: ITaskBarIconsData
}

const TaskBarIcon = ({ icon }: IProps) => {
    return (
        <div onClick={() => console.log(icon)} className={` ${icon.isVisibleOnMobile ? "inline-flex" : "hidden sm:inline-flex"} w-14 h-14  justify-center items-center bg-black border border-black rounded-md`}>
            <div className={`w-full h-full -mt-2 -ml-2 flex justify-center items-center rounded-md 
            ${icon.icon === "IoMdDownload" && "bg-[#00FD74]"} 
            ${icon.icon === "MdMail" && "bg-[#FEF400]"}  
            ${icon.icon === "BsFillPersonFill" && "bg-[#DC7CFE]"}  
            ${icon.icon === "ImLinkedin2" && "bg-[#007BB6]"}  
            ${icon.icon === "BsInstagram" && "bg-[#DB3073]"}  
            ${icon.icon === "BsTwitter" && "bg-[#1DA1F2]"}  
            ${icon.icon === "BsYoutube" && "bg-[#FE0002]"}  
            ${icon.icon === "RiMusic2Fill" && "bg-[#FD5D5D]"}  
            
            `}>

                {/* {icon?.icon} */}
                {icon.icon === "IoMdDownload" && <IoMdDownload className='text-black' size={"1.5rem"} />}
                {icon.icon === "MdMail" && <MdMail className='text-black' size={"1.5rem"} />}
                {icon.icon === "BsFillPersonFill" && <BsFillPersonFill className='text-black' size={"1.5rem"} />}
                {icon.icon === "ImLinkedin2" && <ImLinkedin2 className='text-black'size={"1.5rem"} />}
                {icon.icon === "BsInstagram" && <BsInstagram className='text-black'size={"1.5rem"} />}
                {icon.icon === "BsTwitter" && <BsTwitter className='text-black'size={"1.5rem"} />}
                {icon.icon === "BsYoutube" && <BsYoutube className='text-black'size={"1.5rem"} />}
                {icon.icon === "RiMusic2Fill" && <RiMusic2Fill className='text-black'size={"1.5rem"} />}
            </div>
        </div >
    )
}

export default TaskBarIcon