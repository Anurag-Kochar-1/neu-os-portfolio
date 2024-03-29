import { DesktopFoldersData } from "@/constants/data/DesktopFoldersData/DesktopFoldersData";
import React from "react";
import FolderIcon from "../FolderIcon/FolderIcon";

const FoldersContainer = () => {
  return (
    <div className="col-start-2 col-end-12 xl:col-start-7 xl:col-end-11 2xl:col-start-7 2xl:col-end-10 flex flex-wrap justify-center md:justify-between items-center xl:space-x-5 my-10 xl:my-0">
      {DesktopFoldersData?.map((folder) => {
        return (
          <FolderIcon
            key={folder?.id}
            folderName={folder.folderName}
            folderIcon={folder.folderIcon}
            bgColor={folder.bgColor}
            folderLinkHref={folder.folderLinkHref}
          />
        );
      })}
    </div>
  );
};

export default FoldersContainer;
