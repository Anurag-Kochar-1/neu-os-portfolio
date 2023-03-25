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

const Folder = () => {
  // const { isFolderOpen, setIsFolderOpen } = useContext<IAppContextType>(AppContext)
  const router = useRouter();
  const searchParams = useSearchParams();
  const folderName = searchParams.get("folder");
  const subFolderName = searchParams.get("subFolder");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const folderRef = useRef<HTMLDivElement | null>(null);

  const handleOverlayClick = (
    e: MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    console.log(e.target);
    if (e.target === containerRef.current && e.target !== folderRef.current) {
      router.push("/");
    }
  };

  const [width, setWidth] = useState<number>(200);
  const [height, setHeight] = useState<number>(200);

  const onResize = (event: any, { size }: any) => {
    setWidth(size.width);
    setHeight(size.height);
  };

  if (!folderName) return null;

  return (
    <div
      className="z-30 fixed inset-0 w-full h-screen bg-black/[.90] flex justify-center items-center "
      ref={containerRef}
      onClick={(e) => handleOverlayClick(e)}
    >
      <Draggable handle=".headerHandle" bounds="parent">
        <div className="w-[70%] h-[70vh] bg-white" ref={folderRef}>
          <div className="headerHandle w-full h-12 bg-black flex justify-between items-center">
            <Link href={"/"} className="text-4xl text-red-600">
              X
            </Link>

            {/* <FolderHeaderButton /> */}
          </div>

          <p className='text-5xl font-semibold'> This Project is under construction </p>

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
