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

// ICONS IMPORT
import { IoClose } from "react-icons/io5";
import { FiMaximize2, FiMinimize2 } from "react-icons/fi";
import { FaMinus } from "react-icons/fa";
import { ProjectsData } from "@/constants/data/ProjectsData/ProjectsData";
import { IProject } from "@/types/ProjectData";
import Image from "next/image";
import SkillsFolderContent from "../FoldersContent/SkillsFolderContent";
import ProjectsFolderContent from "../FoldersContent/ProjectsFolderContent";

const Folder = () => {
  // const { isFolderOpen, setIsFolderOpen } = useContext<IAppContextType>(AppContext)
  const router = useRouter();
  const searchParams = useSearchParams();
  const folderName = searchParams.get("folder");
  const subFolderName = searchParams.get("subFolder");

  // ----- STATES ----
  const [isFolderMaximized, setIsFolderMaximized] = useState<boolean>(false);

  // ---- REFS ----
  const containerRef = useRef<HTMLDivElement | null>(null);
  const folderRef = useRef<HTMLDivElement | null>(null);

  const availableFolders = ['Skills', 'Projects'] 

  const getFolderBgColor = () => {
    switch (folderName) {
      case "Skills":
        return `bg-[#644BDF]`;
      case "Projects":
        return `bg-[#E05151]`;
      default:
        return `bg-white`;
    }
  };

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
            isFolderMaximized
              ? "w-[100%] h-[100vh]"
              : "w-[90%] h-[90vh] md:w-[70%] md:h-[70vh]"
          } relative ${getFolderBgColor()} border-4 border-black rounded-sm overflow-x-hidden overflow-y-auto scrollbar-hide`}
          ref={folderRef}
        >
          {/* HEADER */}
          <div className="headerHandle sticky top-0 right-0 left-0 w-full h-12 bg-black/[.30] flex items-center px-5 hover:cursor-move">
            {/* <span>.</span> */}
            <h2 className="font-semibold w-full text-center text-xl text-white pointer-events-none">
              {folderName}
            </h2>
            {/* Folder Buttons */}
            <div className="flex items-center ml-auto space-x-3">
              <FolderHeaderButton
                buttonColor={`bg-[#FFB443]`}
                buttonName="close"
                buttonIcon={<FaMinus size={"1.3rem"} />}
                onClick={() => router.push(`/`)}
              />
              <FolderHeaderButton
                buttonColor={`bg-[#00FE74]`}
                buttonName="close"
                buttonIcon={
                  isFolderMaximized ? (
                    <FiMinimize2 size={"1.3rem"} />
                  ) : (
                    <FiMaximize2 size={"1.3rem"} />
                  )
                }
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

          {folderName === "Skills" && <SkillsFolderContent />}
          {folderName === "Projects" && <ProjectsFolderContent />}

          {!availableFolders?.includes(folderName) && (
            <p className="w-full text-center my-10 text-5xl font-semibold">
              This Folder is under construction : {")"}
            </p>
          )}
        </div>
      </Draggable>
    </div>
  );
};

export default React.memo(Folder);
