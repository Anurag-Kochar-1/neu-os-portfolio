import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IFolderIcon } from "../../types/FolderIconData";

const FolderIcon = ({
  folderName,
  folderIcon,
  folderLinkHref,
  onClick,
  color,
}: IFolderIcon) => {
  return (
    <Link
      href={folderLinkHref}
      className="flex flex-col justify-start items-center space-y-2 m-1 hover:scale-105"
      onClick={onClick}
    >
      <Image
        src={folderIcon}
        alt={folderName}
        width={400}
        height={400}
        className="w-20 sm:w-28 lg:w-32 aspect-square"
        draggable="false"
      />
      <h3 className="text-black text-xl font-bold"> {folderName} </h3>
    </Link>
  );
};

export default FolderIcon;
