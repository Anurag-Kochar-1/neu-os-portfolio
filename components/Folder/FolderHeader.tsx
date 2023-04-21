import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { FaMinus } from "react-icons/fa";
import { FiMaximize2, FiMinimize2 } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import FolderHeaderButton from "../FolderHeaderButton/FolderHeaderButton";

interface IProps {
    isFolderMaximized: boolean
    setIsFolderMaximized: React.Dispatch<React.SetStateAction<boolean>>
}

const FolderHeader = ( {isFolderMaximized, setIsFolderMaximized}: IProps ) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const folderName = searchParams.get("folder");
  const subFolderName = searchParams.get("subFolder");

  return (
    <div className="headerHandle sticky top-0 right-0 left-0 w-full h-12 bg-black/[.30] flex items-center px-5 hover:cursor-move">
      {/* <span>.</span> */}
      <h2 className="font-semibold w-full text-center text-xl text-white pointer-events-none">
        {!subFolderName && folderName}
        {subFolderName && subFolderName}
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
          onClick={() => {
            router.push(`/`);
          }}
        />
      </div>
    </div>
  );
};

export default React.memo(FolderHeader);
