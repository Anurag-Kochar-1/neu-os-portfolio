"use client";

import React from "react";

interface IProps {
  onClick: () => void;
  buttonName: string;
  buttonIcon: string;
  buttonColor: string;
}

const FolderHeaderButton = () => {
  return (
    <div
      onClick={() => console.log(1)}
      className={`inline-flex w-10 h-10 justify-center items-center bg-gray-400 border border-black  hover:scale-110 `}
    >
      <div
        className={`w-full h-full -mt-2 -ml-2 flex justify-center items-center border-2 border-black bg-blue-400`}
      ></div>
    </div>
  );
};

export default FolderHeaderButton;
