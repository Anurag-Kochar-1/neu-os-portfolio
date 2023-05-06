import React, { useContext, useEffect, useState } from "react";
import { FaMinus } from "react-icons/fa";
import { FiMaximize2, FiMinimize2 } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import FolderHeaderButton from "../FolderHeaderButton/FolderHeaderButton";
import { AppContext } from "@/context/AppContext";

interface IProps {
  isFolderMaximized: boolean;
  setIsFolderMaximized: React.Dispatch<React.SetStateAction<boolean>>;
}

const FolderHeader = ({ isFolderMaximized, setIsFolderMaximized }: IProps) => {
  const { folderState, setFolderState } = useContext(AppContext);


  return (
    <div className={`z-10 sticky  top-0 right-0 left-0 w-full h-12 bg-black/[.30] flex justify-center items-center px-5 hover:cursor-pointer`}>
      <h2 className="font-semibold text-center text-xl text-white ">
        {folderState?.folderName && folderState.folderType === 'Folder' ? folderState.folderName : null}
        {folderState?.folderName === 'Projects' && folderState.folderType === 'SubFolder' ? folderState.subFolderName : null}
      </h2>
      {/* Folder Buttons */}
      <div className="absolute right-0 mr-2 flex items-center space-x-3">
        <FolderHeaderButton
          buttonColor={`bg-[#FFB443]`}
          buttonName="close"
          buttonIcon={<FaMinus size={"1.3rem"} />}
          onClick={() =>
            setFolderState({
              isFolderOpen: false,
              folderType: null,
              folderName: null,
              subFolderName: null
            })
          }
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
          onClick={() => {
            setIsFolderMaximized(!isFolderMaximized);
          }}
        />
        <FolderHeaderButton
          buttonColor={`bg-[#FF5E5E]`}
          buttonName="close"
          buttonIcon={<IoClose size={"1.3rem"} />}
          onClick={() =>
            setFolderState({
              isFolderOpen: false,
              folderType: null,
              folderName: null,
              subFolderName: null
              
            })
          }
        />
      </div>
    </div>
  );
};

export default React.memo(FolderHeader);
