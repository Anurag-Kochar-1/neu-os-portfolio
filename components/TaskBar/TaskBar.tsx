"use client";

import { AppContext } from "@/context/AppContext";
import React, { MouseEvent, useContext, useRef } from "react";
import { TaskBarIconsDataArray } from "../../constants/data/TaskBarIconsData/TaskBarIconsData";
import {TbMusicOff} from "react-icons/tb";
import Tooltip from "../ToolTip";
import { useRouter } from "next/navigation";

const TaskBar = () => {
  const router = useRouter()
  const iconRef = useRef<HTMLDivElement | null>(null);
  const { isMusicPlayerVisible, setIsMusicPlayerVisible, isSongPlaying, setIsSongPlaying } = useContext(AppContext);

  const getTaskBarIconBgColor = (iconName: string) => {
    switch (iconName) {
      case `Search`:
        return `bg-[#39DBFF]`;
      case `Music`:
        return `bg-[#FE5E5E]`;
      case `Mail`:
        return `bg-[#FEF400]`;
      case `Download Resume`:
        return `bg-[#00FE75]`;
      case `About`:
        return `bg-[#DB7CFD]`;
      case `Instagram`:
        return `bg-[#DB3073]`;
      case `GitHub`:
          return `bg-[#FF7F00]`;
      case `Twitter`:
        return `bg-[#1DA1F2]`;
      case `YouTube`:
        return `bg-[#FE0002]`;
      case `LinkedIn`:
        return `bg-[#007BB6]`;

      default:
        return `bg-white`;
    }
  };

  const getTaskBarIconFunction = (iconName: String) =>{ 
    switch (iconName) {
      case 'Search':
        alert("Search Modal is under Development :)")
        break;
      case 'Mail':
        router.push("/?folder=Contact")
        break;

      case `Download Resume`:
        alert("It's not uploaded yet, but trust me, it's good (hehe)");
        break;
      case 'About':
        router.push("/?folder=About")
        break;
      case "Music":
          setIsMusicPlayerVisible(!isMusicPlayerVisible)
          setIsSongPlaying(false)
          break;

      default:
       break;

    }
  }

  function handleIconClick(link: string) {
    window.open(link, '_blank');
  }

  return (
    <div className="z-50 fixed bottom-2 md:bottom-[7vh] max-w-[97%] md:w-auto h-20 bg-black border border-black flex justify-center items-center rounded-lg">
      <div
        className={`w-full h-full -mt-2 -ml-2 bg-[#F7CF59] border border-black flex justify-start items-center rounded-lg space-x-2 sm:space-x-5 px-5`}
      >
        {TaskBarIconsDataArray &&
          TaskBarIconsDataArray?.map((taskBarIcon) => {
            return (
              <Tooltip content={taskBarIcon.iconName} key={taskBarIcon.id}>
                <div
                  onClick={(e) => {
                    getTaskBarIconFunction(taskBarIcon?.iconName)
                    if(taskBarIcon?.link !== null ) {
                      handleIconClick(taskBarIcon.link)
                    }
                  }}
                  className={`${
                    taskBarIcon?.isVisibleOnMobile
                      ? "inline-flex"
                      : "hidden md:inline-flex"
                  } w-12 h-12  justify-center items-center bg-black border border-black hover:cursor-pointer hover:scale-110 transition-all duration-150 ease-in-out`}
                >
                  <div
                    className={`w-full h-full -mt-2 -ml-2 flex justify-center items-center text-white border-2 border-black pointer-events-none ${getTaskBarIconBgColor(
                      taskBarIcon.iconName
                    )}
              `}
                  >
                    <span
                      className={`${taskBarIcon.iconColor} text-xl md:text-3xl pointer-events-none`}
                    >
                      {taskBarIcon?.iconName !== 'Music' && taskBarIcon.icon}

                      {taskBarIcon?.iconName === 'Music' && isMusicPlayerVisible ? (
                        <TbMusicOff />
                      ): null}

                      {taskBarIcon?.iconName === 'Music' && !isMusicPlayerVisible ? (
                         <span className={`${taskBarIcon.iconColor} text-xl md:text-3xl pointer-events-none`}> {taskBarIcon.icon} </span>
                      ): null}
                       
                      
                    </span>
                  </div>
                </div>
              </Tooltip>
            );
          })}
      </div>
    </div>
  );
};

export default React.memo(TaskBar);
