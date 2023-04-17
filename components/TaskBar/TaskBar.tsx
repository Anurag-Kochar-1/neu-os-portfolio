"use client";

import React, { useRef } from "react";
import { TaskBarIconsDataArray } from "../../constants/data/TaskBarIconsData/TaskBarIconsData";
import TaskBarIcon from "../TaskBarIcon/TaskBarIcon";

const TaskBar = () => {
  const iconRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="z-30 fixed bottom-2 md:bottom-[7vh] max-w-[97%] md:w-auto h-20 bg-black border border-black flex justify-center items-center rounded-lg">
      <div
        className={`w-full h-full -mt-2 -ml-2 bg-[#F7CF59] border border-black flex justify-start items-center rounded-lg space-x-2 sm:space-x-5 px-5`}
      >
        {TaskBarIconsDataArray &&
          TaskBarIconsDataArray?.map((taskBarIcon) => {
            return (
              <div
                key={taskBarIcon.id}
                className={`${
                  taskBarIcon?.isVisibleOnMobile
                    ? "inline-flex"
                    : "hidden md:inline-flex"
                } w-12 h-12  justify-center items-center bg-black border border-black hover:cursor-pointer hover:scale-110 transition-all duration-150 ease-in-out`}
              >
                <div
                  className={`w-full h-full -mt-2 -ml-2 flex justify-center items-center text-white border-2 border-black pointer-events-none ${taskBarIcon.bgColor}
              `}
                >
                  <span className={`${taskBarIcon.iconColor} text-xl md:text-3xl pointer-events-none`}>
                    {taskBarIcon.icon}
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TaskBar;
