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
    <div
      className={`w-7 h-7 ${buttonColor}  rounded-sm flex justify-center items-center hover:cursor-pointer`}
      onClick={onClick}
    >
      {React.cloneElement(buttonIcon as React.ReactElement, {
        className: `pointer-events-none`,
      })}
    </div>
  );
};

export default FolderHeaderButton;
