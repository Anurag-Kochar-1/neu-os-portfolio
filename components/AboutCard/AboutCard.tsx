"use client"
import React, { useContext } from "react";
import Image from "next/image";
import anuragPNG from "../../public/images/creator/cat.png";
import lightGrayLinesBg from "../../public/images/BGs/lightGrayLinesBg.png";
import { AppContext } from "@/context/AppContext";

const AboutCard = () => {
  const { setFolderState } = useContext(AppContext);
  return (
    <div className="z-20 my-5 col-start-2 col-end-12 md:col-start-2 md:col-end-12 lg:col-start-3 lg:col-end-11 xl:col-start-1 xl:col-end-7 xl:mx-5 2xl:col-start-1 2xl:col-end-6 2xl:mx-6 flex flex-col items-center justify-center border-2 border-black bg-black">
      <div className="w-full h-full -mt-3 -ml-3 flex flex-col justify-start items-center bg-white border-2 border-black">
        {/* ----------- Header ----------- */}
        <div className="w-full h-10 flex justify-between items-center bg-black px-2">
          {/* dots */}
          <div className="flex justify-center items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-[#269B4E]"></span>
            <span className="w-3 h-3 rounded-full bg-[#E9493D]"></span>
            <span className="w-3 h-3 rounded-full bg-[#FFF052]"></span>
          </div>

          {/* title */}
          <p className="text-white font-semibold"> Frontend Developer </p>

          <span>.</span>
        </div>

        {/* ---------- Photo and details Container ---------- */}
        <div className="w-full flex flex-col sm:flex-row sm:px-5 justify-start items-center">
          {/* ---------- Photo ----------*/}
          <div className="w-[90%] lg:w-[70%] bg-green-500 flex justify-center items-center p-3 my-3">
            <div className="bg-yellow-300 flex justify-center items-center p-3">
              <div className="bg-red-600 flex justify-center items-center">
                <Image
                  src={anuragPNG}
                  quality={100}
                  alt="anurag"
                  width={700}
                  height={700}
                  draggable="false"
                  className="object-cover h-full"
                />
              </div>
            </div>
          </div>

          {/* ----------- Name, description,and read more button -----------*/}
          <div className="w-full h-[90%] flex flex-col items-center justify-start text-center space-y-2 px-1 sm:px-3 py-5">
            <h3 className="text-2xl font-bold">
              {" "}
              Anurag Kochar{" "}
              <span className="text-base font-medium text-gray-900">
                (He/him){" "}
              </span>{" "}
            </h3>
            <p className="text-base font-medium">
              {" "}
              Hey folks, Im a frontend dev, who loves to build products which
              solves real-world problems, and yeah I create content too. :D
            </p>

            <div
              onClick={() => {
                setFolderState({
                  isFolderOpen: true,
                  folderName: "About",
                  folderType: "Folder",
                  subFolderName: null,
                });
              }}
              className="relative w-60 h-20 my-10 rounded-none hover:cursor-pointer"
            >
              <Image
                src={`/images/circleLine.png`}
                alt={"circlLines"}
                width={200}
                height={100}
                draggable={false}
                className="w-full h-full aspect-auto absolute inset-0"
              />

              <span className="absolute inset-0 flex items-center justify-center z-10 text-[#6101FF] italic font-bold text-xl bg-opacity-50 top-1/2 transform -translate-y-1/2">
                {" "}
                Read More{" "}
              </span>
            </div>

            </div>
        </div>

        {/* ----------- Bottom bar -----------*/}
        <div className="flex w-full h-20 relative justify-between items-center border-t-2 border-t-black px-5">
          <Image
            src={lightGrayLinesBg}
            alt="lightGrayLinesBg"
            width={400}
            height={400}
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            draggable="false"
          />
          <p className="hidden sm:inline-block font-semibold">
            @anurag__kochar
          </p>

          <span className="text-sm sm:text-base  font-semibold text-black">
            {" "}
            Punjab | India{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(AboutCard);
