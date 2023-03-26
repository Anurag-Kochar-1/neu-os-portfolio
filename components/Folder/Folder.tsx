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
import { FiMaximize2 } from "react-icons/fi";
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
      className="z-30 fixed inset-0 w-full h-screen bg-black/[.50] flex justify-center items-center "
      ref={containerRef}
      onClick={(e) => handleOverlayClick(e)}
    >
      <Draggable handle=".headerHandle" bounds="parent">
        <div
          className={`${
            isFolderMaximized ? "w-[100%] h-[100vh]" : "w-[70%] h-[70vh]"
          } bg-white border-2 border-black rounded-lg`}
          ref={folderRef}
        >
          {/* HEADER */}
          <div className="headerHandle w-full h-12 bg-black flex justify-between items-center px-5">
            <span>.</span>
            <h2 className="font-semibold text-xl text-white"> {folderName} </h2>
            {/* Folder Buttons */}
            <div className="flex justify-center items-center space-x-3">
              <FolderHeaderButton
                buttonColor={`bg-[#FFB443]`}
                buttonName="close"
                buttonIcon={<FaMinus size={"1.3rem"} />}
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

          <p className="text-5xl font-semibold">
            This Project is under construction -{" "}
            {isFolderMaximized ? "true" : "false"}
          </p>

          {/* <div className="flex justify-start items-center flex-wrap space-x-5">
            {folderName === "Skills" &&
              SkillsData?.map((skill) => {
                return (
                  <FolderIcon
                    folderName={skill.skillName}
                    folderIcon={`/folderIcon.png`}
                    folderLinkHref={`/?folder=${skill.skillName}`}
                    color={`red`}
                  />
                );
              })}
          </div> */}
        </div>
      </Draggable>
    </div>
  );
};

export default Folder;
