"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { IFolderIcon } from "../../types/FolderIconData";
import { useRouter } from "next/navigation";
import { AppContext } from "@/context/AppContext";
import { motion, AnimatePresence } from "framer-motion";

const FolderIcon = ({
  folderName,
  folderIcon,
  folderLinkHref,
  onClick,
  bgColor,
  isOnClickDisabled = false
}: IFolderIcon) => {
  const router = useRouter();
  const getFolderIconBgColor = () => {
    switch (folderName) {
      case "HTML":
        return `bg-[#FFBCAB]`;

      case "CSS":
        return `bg-[#AFE2FF] `;

      case "JavaScript":
        return `bg-[#FEF6B3] `;

      case "TypeScript":
        return `bg-[#AFDFFF]`;

      case "React JS":
        return `bg-[#D4F9FF] `;

      case "Next JS":
        return `bg-[#E8E8E8]`;

      case "Node JS":
        return `bg-[#E4FFA4]`;

      case `Express JS`:
        return `bg-[#B3B3B3]`;

      case `MongoDB`:
        return `bg-[#C8FFB0]`;

      case `Firebase`:
        return `bg-[#FFF0C8]`;

      case `Redux`:
        return `bg-[#D5BAFF]`;

      case `Tailwind CSS`:
        return `bg-[#C9F7FF]`;

      case `Skills`:
        return `bg-[#FFFFB0]`;

      case `Projects`:
        return `bg-[#F9A47B]`;

      case `About`:
        return `bg-[#FFFFFF]`;

      case `Contact`:
        return `bg-[#E7E7E7]`;

      default:
        return `bg-white`;
    }
  };
  const { folderState, setFolderState } = useContext(AppContext);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => {
        if(!isOnClickDisabled) {
          setFolderState({
            isFolderOpen: true,
            folderName: folderName,
            folderType: "Folder",
            subFolderName: null
          })
        }
      }}
    >
        <div className="flex flex-col justify-center items-center space-y-2 m-5 hover:cursor-pointer hover:scale-105 select-none">
          <div
            className={`w-24 h-24 md:w-32 md:h-32 flex flex-col justify-center items-center bg-black border-2 border-black rounded-sm pointer-events-none`}
          >
            <div
              className={`w-24 h-24 md:w-32 md:h-32 ${getFolderIconBgColor()} flex flex-col justify-center items-center border-4 border-black -ml-5 -mt-5 rounded-sm`}
            >
              <Image
                src={folderIcon}
                alt={folderName}
                width={600}
                height={600}
                className="w-12 md:w-20 aspect-square object-contain select-none"
                draggable="false"
                placeholder='blur'
                blurDataURL={`/images/loader/loader.svg`}
              />
            </div>
          </div>
          <h3 className="mt-10 text-black text-xl font-bold hover:cursor-pointer">
            {folderName}
          </h3>
        </div>
    </motion.div>
  );
};

export default React.memo(FolderIcon);
