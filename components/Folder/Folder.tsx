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
import AboutContent from "../FoldersContent/AboutContent";
import ContactContent from "../FoldersContent/ContactContent";
import { AppContext } from "@/context/AppContext";
import { AnimatePresence, motion } from "framer-motion";

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
  console.log(`===== FOLDER COMPONENT IS RENDERING =====`);
  const router = useRouter();
  const searchParams = useSearchParams();
  const folderName = searchParams.get("folder");
  const subFolderName = searchParams.get("subFolder");

  // ----- STATES ----
  const [isFolderMaximized, setIsFolderMaximized] = useState<boolean>(false);
  const { folderState, setFolderState } = useContext(AppContext);

  // ---- REFS ----
  const containerRef = useRef<HTMLDivElement | null>(null);
  const folderRef = useRef<HTMLDivElement | null>(null);

  const availableFolders = ["Skills", "Projects", "About", "Contact"];

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


  return (
    <AnimatePresence initial={false} mode="wait">
      {folderState?.isFolderOpen && (
        <BackDrop folderRef={folderRef}>
          <motion.div
            onClick={(e) => e.stopPropagation()}
            variants={gifYouUp}
            initial="hidden"
            animate="visible"
            exit={"exit"}
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

            {/* {folderName === "Skills" && !subFolderName ? (
            <SkillsFolderContent />
          ) : null}
          {folderName === "Projects" && !subFolderName ? (
            <ProjectsFolderContent />
          ) : null}
          {subFolderName ? <ProjectContent /> : null}
          {folderName === "About" && <AboutContent />}
          {folderName === "Contact" && <ContactContent />} */}

            {/* {!availableFolders?.includes(folderName) && (
            <div className="w-full  my-10 d flex flex-col justify-center items-center space-y-3">
              <p className="text-center text-5xl font-semibol">
                {folderName} Folder is under construction
              </p>
            </div>
          )} */}
          </motion.div>
        </BackDrop>
      )}
    </AnimatePresence>
  );
};

export default React.memo(Folder);
