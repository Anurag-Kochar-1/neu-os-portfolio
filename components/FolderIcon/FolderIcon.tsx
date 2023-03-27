import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IFolderIcon } from "../../types/FolderIconData";

const FolderIcon = ({
  folderName,
  folderIcon,
  folderLinkHref,
  onClick,
  bgColor,
}: IFolderIcon) => {
  return (
    <Link
      href={folderLinkHref}
      className="flex flex-col justify-center items-center space-y-2 m-5"
      onClick={onClick}
    >
      <div
        className={`w-32 h-32 flex flex-col justify-center items-center bg-black border-2 border-black rounded-sm`}
      >
        <div
          className={`w-32 h-32 bg-white flex flex-col justify-center items-center border-4 border-black -ml-5 -mt-5 rounded-sm`}
        >
          <Image
            src={folderIcon}
            alt={folderName}
            width={600}
            height={600}
            className="w-20 aspect-square object-contain"
            draggable="false"
          />
        </div>
      </div>
      <h3 className="mt-10 text-black text-xl font-bold"> {folderName} </h3>
    </Link>
  );
};

export default FolderIcon;
