"use client";

import React, {
  useContext,
  useRef,
  MouseEvent,
  useEffect,
  useState,
} from "react";
import { AppContext, IAppContextType } from "@/context/AppContext";
import Draggable from "react-draggable";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SkillsData } from "../../constants/data/SkillsData/SkillsData";
import FolderIcon from "../FolderIcon/FolderIcon";
import FolderHeaderButton from "../FolderHeaderButton/FolderHeaderButton";

import { IoClose } from "react-icons/io5";
import { FiMaximize2, FiMinimize2 } from "react-icons/fi";
import { FaMinus } from "react-icons/fa";

const Folder = () => {
  // const { isFolderOpen, setIsFolderOpen } = useContext<IAppContextType>(AppContext)
  const router = useRouter();
  const searchParams = useSearchParams();
  const folderName = searchParams.get("folder");
  const subFolderName = searchParams.get("subFolder");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const folderRef = useRef<HTMLDivElement | null>(null);

  const [isFolderMaximized, setIsFolderMaximized] = useState<boolean>(false);

  const handleOverlayClick = (
    e: MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    console.log(e.target);
    if (e.target === containerRef.current && e.target !== folderRef.current) {
      router.push("/");
    }
  };

  if (!folderName) return null;

  return (
    <div
      className="z-30 fixed inset-0 w-full h-screen bg-black/[.50] flex justify-center items-center"
      ref={containerRef}
      onClick={(e) => handleOverlayClick(e)}
    >
      <Draggable handle=".headerHandle" bounds="parent">
        <div
          className={`${
            isFolderMaximized ? "w-[100%] h-[100vh]" : "w-[70%] h-[70vh]"
          } relative bg-gray-300 border-2 border-black rounded-lg overflow-x-hidden overflow-y-auto`}
          ref={folderRef}
        >
          {/* HEADER */}
          <div className="headerHandle sticky top-0 right-0 left-0 w-full h-12 bg-black flex items-center px-5 hover:cursor-move">
            {/* <span>.</span> */}
            <h2 className="font-semibold w-full text-center text-xl text-white pointer-events-none">
              {folderName}
            </h2>
            {/* Folder Buttons */}
            <div className="flex items-center ml-auto space-x-3">
              <FolderHeaderButton
                buttonColor={`bg-[#FFB443]`}
                buttonName="close"
                buttonIcon={
                  isFolderMaximized ? (
                    <FiMinimize2 size={"1.3rem"} />
                  ) : (
                    <FaMinus size={"1.3rem"} />
                  )
                }
                onClick={() => router.push(`/`)}
              />
              <FolderHeaderButton
                buttonColor={`bg-[#00FE74]`}
                buttonName="close"
                buttonIcon={<FiMaximize2 size={"1.3rem"} />}
                onClick={() => setIsFolderMaximized(!isFolderMaximized)}
              />
              <FolderHeaderButton
                buttonColor={`bg-[#FF5E5E]`}
                buttonName="close"
                buttonIcon={<IoClose size={"1.3rem"} />}
                onClick={() => router.push(`/`)}
              />
            </div>
          </div>

          {/* <p className="text-5xl font-semibold">
            This Project is under construction
          </p> */}

          {/* ----- SKILLS ----- */}
          <div className="w-full flex justify-center md:justify-start items-center flex-wrap bg-blue-400 ">
            {folderName === "Skills" &&
              SkillsData?.map((skill) => {
                return (
                  <FolderIcon
                    key={skill.skillName}
                    folderName={skill.skillName}
                    folderIcon={`/images/skillIcons/${skill.skillIcon}`}
                    folderLinkHref={`/`}
                    bgColor={`${skill?.skillBgColor}`}
                  />
                );
              })}
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default Folder;
