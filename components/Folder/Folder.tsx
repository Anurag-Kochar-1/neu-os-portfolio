"use client";

import React, {
  useContext,
  useRef,
  MouseEvent,
  useEffect,
  useState,
} from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import BackDrop from "./BackDrop";
import { AppContext } from "@/context/AppContext";
import { AnimatePresence, motion } from "framer-motion";
import FolderHeader from "./FolderHeader";

import dynamic from 'next/dynamic'
const AboutContent = dynamic(() => import("../FoldersContent/AboutContent"))
const SkillsFolderContent = dynamic(() => import("../FoldersContent/SkillsFolderContent"))
const ContactContent = dynamic(() => import("../FoldersContent/ContactContent"))
const ProjectContent = dynamic(() => import("../FoldersContent/ProjectContent"))
const ProjectsFolderContent = dynamic(() => import("../FoldersContent/ProjectsFolderContent"))

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

  // ----- STATES ----
  const [isFolderMaximized, setIsFolderMaximized] = useState<boolean>(false);
  const { folderState, setFolderState } = useContext(AppContext);

  // ---- REFS ----
  const folderRef = useRef<HTMLDivElement | null>(null);


  const getFolderBgColor = () => {
    switch (folderState?.folderName || folderState.folderType) {
      case "Skills":
        return `bg-[#644BDF]`;
      case "Projects":
        if (folderState?.folderType === "SubFolder") {
          return "bg-white";
        }
        return `bg-[#E05151]`;
      default:
        return `bg-white`;
    }
  };



  return (
    <AnimatePresence initial={false} mode="wait">
      {folderState.isFolderOpen && (
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

            {folderState?.folderName === "Skills" &&
            folderState?.folderType === "Folder" ? (
              <SkillsFolderContent />
            ) : null}

            {folderState?.folderName === "Projects" &&
            folderState?.folderType === "Folder" ? (
              <ProjectsFolderContent />
            ) : null}

            {folderState.folderName === "Projects" &&
            folderState.folderType === "SubFolder" ? (
              <ProjectContent />
            ) : null}

            {folderState?.folderName === "About" &&
            folderState?.folderType === "Folder" ? (
              <AboutContent />
            ) : null}
            {folderState?.folderName === "Contact" &&
            folderState?.folderType === "Folder" ? (
              <ContactContent />
            ) : null}

          </motion.div>
        </BackDrop>
      )}
    </AnimatePresence>
  );
};

export default React.memo(Folder);
