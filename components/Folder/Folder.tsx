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

  const ulClass = `text-base text-black font-medium` 

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
            <div className="w-full  my-10 d flex flex-col justify-center items-center space-y-3">
              <p className="text-center text-5xl font-semibol">
                {folderName} Folder is under construction
              </p>
              {folderName === "Contact" && (
                <p className="text-2xl font-medium">
                  {" "}
                  Email: anuragmarketing101@gmail.com{" "}
                </p>
              )}

              {folderName === "About" && (
                <div className="flex flex-col items-start justify-start space-y-2">
                  <p className={`text-3xl font-semibold mb-5`}> But, here is the little summary </p>
                  <p className={ulClass}> • For Almost 3 years = Did game live streaming on some multiple platforms </p>
                  <p className={ulClass}> • 2021 = Completed my 12th ("yes I was in the covid batch") </p>
                  <p className={ulClass}> • Childhood - 2021  {"=>"} Architecture Enthusiast {"=>"} Joined BDes Interior Design in Oct 2021 </p>
                  <p className={ulClass}> • Dropped out of college in 2nd sem </p>
                  <p className={ulClass}> • Built a Startup </p>
                  <p className={ulClass}> • Created MVP - <a className="text-blue-500 hover:cursor-pointer" href={"https://offsta-mvp-v2-ak-1.bubbleapps.io/version-test/place_entrance_screen/1655294587384x550707056462528500"} target="_blank" rel="noreferrer"> MVP Link </a>  </p>
                  <p className={ulClass}> • Tested with some users </p>
                  <p className={ulClass}> • Shut down the Startup after 7 months :D </p>
                  <p className={ulClass}> • Learnt web dev ("took almost 6-7 months") </p>
                  <p className={ulClass}> • March 2023 = Joined a BCA Online program from a decent college </p>
                  <p className={ulClass}> • April 2023 =  Currently doing an Internship as Frontend Developer  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </Draggable>
    </BackDrop>
  );
};

export default React.memo(Folder);
