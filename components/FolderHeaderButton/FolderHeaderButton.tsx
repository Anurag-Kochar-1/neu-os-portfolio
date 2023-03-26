"use client";

import React from "react";

interface IProps {
  onClick: () => void;
  buttonName: string;
  buttonIcon: any;
  buttonColor: string;
}

const FolderHeaderButton = ({
  onClick,
  buttonName,
  buttonIcon,
  buttonColor,
}: IProps) => {
  return (
    // <div className="w-7 h-7 flex justify-center items-center bg-black border-2 border-black">
    // <div className={`w-7 h-7 bg-red-600 -ml-3 -mt-3`}></div>
    <div
      className={`w-7 h-7 ${buttonColor}  rounded-sm flex justify-center items-center hover:cursor-pointer`}
      onClick={onClick}
    >
      {buttonIcon}
    </div>
    // </div>
  );
};

export default FolderHeaderButton;
