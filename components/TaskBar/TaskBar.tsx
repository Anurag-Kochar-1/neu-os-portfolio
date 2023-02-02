import React from 'react'
import { TaskBarIconsDataArray } from '@/constants/TaskBarIconsData/TaskBarIconsData'
import {FaSearch} from "react-icons/fa"

const TaskBar = () => {
  return (
    <div className='z-50 absolute bottom-4 w-[95%] h-20 bg-black border border-black flex justify-center items-center rounded-lg'>
      <div className='w-full h-full -mt-2 -ml-2 bg-[#F7CF59] border border-black flex justify-center items-center rounded-lg space-x-2'>

        {/* Search Icon */}
        <div  className={`w-14 h-14 flex justify-center items-center bg-black border border-black rounded-md`}>
          <div className={`w-full h-full -mt-2 -ml-2 flex justify-center items-center bg-[#39DBFF] text-white rounded-md`}>
            <FaSearch />
          </div>
        </div>

        <div className='w-[2px] h-full border-r-2 border-r-black'></div>

        {TaskBarIconsDataArray && TaskBarIconsDataArray?.map((icon) => {
          return (
            <div key={icon.id} className={`w-14 h-14 flex justify-center items-center bg-black border border-black rounded-md`}>
              <div className={`w-full h-full -mt-2 -ml-2 flex justify-center items-center bg-green-600 text-white rounded-md`}>
                {icon.icon()}
              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default TaskBar