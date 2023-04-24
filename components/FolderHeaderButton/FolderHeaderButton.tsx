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
    <div className="w-7 h-7 bg-black border border-black">
      <div
        onClick={() => onClick()}
        className={` w-7 h-7 -mt-1 -ml-1 ${buttonColor} border border-black  rounded-sm flex justify-center items-center hover:cursor-pointer folderClose`}
      >
        {React.cloneElement(buttonIcon as React.ReactElement, {
          className: `pointer-events-none`,
        })}
      </div>
    </div>
  );
};

export default React.memo(FolderHeaderButton);
