"use client";

import React, {
  useContext,
  useRef,
  MouseEvent,
  useEffect,
  useState,
} from "react";
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
import SkillsFolderContent from "../FoldersContent/SkillsFolderContent";
import ProjectsFolderContent from "../FoldersContent/ProjectsFolderContent";
import ProjectContent from "../FoldersContent/ProjectContent";
import FolderHeader from "./FolderHeader";

const Folder = () => {
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
      className="z-50 fixed inset-0 w-full h-screen bg-black/[.50] flex justify-center items-center"
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
          {/* ------ HEADER ------ */}
          <FolderHeader isFolderMaximized={isFolderMaximized} setIsFolderMaximized={setIsFolderMaximized} />

          {folderName === "Skills" && !subFolderName ? <SkillsFolderContent /> : null}
          {folderName === "Projects" && !subFolderName ? <ProjectsFolderContent /> : null}
          {subFolderName ? <ProjectContent /> : null}

                  

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
