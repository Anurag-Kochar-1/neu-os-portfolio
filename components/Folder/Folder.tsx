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
import { useRouter } from "next/navigation";
import SkillsFolderContent from "../FoldersContent/SkillsFolderContent";
import ProjectsFolderContent from "../FoldersContent/ProjectsFolderContent";
import ProjectContent from "../FoldersContent/ProjectContent";
import FolderHeader from "./FolderHeader";
import BackDrop from "./BackDrop";

const gifYouUp = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.15,
      ease: "easeOut",
    },
  },
};

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

  const availableFolders = ["Skills", "Projects"];

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

  if (!folderName) return null;

  return (
    <BackDrop folderRef={folderRef}>
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
          <FolderHeader
            isFolderMaximized={isFolderMaximized}
            setIsFolderMaximized={setIsFolderMaximized}
          />

          {folderName === "Skills" && !subFolderName ? (
            <SkillsFolderContent />
          ) : null}
          {folderName === "Projects" && !subFolderName ? (
            <ProjectsFolderContent />
          ) : null}
          {subFolderName ? <ProjectContent /> : null}

          {!availableFolders?.includes(folderName) && (
            <p className="w-full text-center my-10 text-5xl font-semibold">
              This Folder is under construction : {")"}
            </p>
          )}
        </div>
      </Draggable>
    </BackDrop>
  );
};

export default React.memo(Folder);
