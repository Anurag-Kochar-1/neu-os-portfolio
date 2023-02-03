"use client"

import React from 'react'
import { ITaskBarIconsData } from "../../constants/TaskBarIconsData/TaskBarIconsData"



interface IProps {
    icon: ITaskBarIconsData
}

const TaskBarIcon = ({ icon }: IProps) => {
    return (
        <div onClick={() => console.log(icon)} className={`w-14 h-14 flex justify-center items-center bg-black border border-black rounded-md`}>
            <div className={`w-full h-full -mt-2 -ml-2 flex justify-center items-center ${icon.backgroundColorValue} ${icon.iconColor} rounded-md`}>
                {/* {icon?.icon} */}
                <p className='text-white text-xs'> {icon.iconName} </p>
            </div>
        </div>
    )
}

export default TaskBarIcon