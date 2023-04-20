import React from "react";
import { ISong } from "@/constants/data/SongsData/SongsData";
import {VscPlay} from "react-icons/vsc"
import {RxTrackPrevious, RxTrackNext} from "react-icons/rx"

interface IProps {
  songs: ISong[];
  setSongs: React.Dispatch<React.SetStateAction<ISong[]>>;
  isSongPlaying: boolean;
  setIsSongPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

const Player = ({
  songs,
  setSongs,
  isSongPlaying,
  setIsSongPlaying,
}: IProps) => {
  return (
    <div className="w-80 h-40 flex flex-col items-center justify-center bg-black border-2 border-black">
      <div className="w-full h-full -mt-2 -ml-2 flex flex-col items-center justify-start bg-[#D9D9D9] border-2 border-black">
        {/* ----- HEADER  -----*/}
        <span className="w-full h-10 bg-black flex justify-between items-center"> </span>

        {/* ----- CONTAINER  -----*/}
        <div className="w-full flex justify-start items-center">
            {/*  THUMBNAIL */}
            <div> </div>
           

            {/*  SUB CONTAINER */}
            <div className="w-full flex flex-col justify-start items-start">
                <h6> HC</h6>
                <h6> LABEL </h6>
                {/* BAR */}
                <div></div>

                {/* CONTROLS */}
                <div className="flex justify-center items-center space-x-2">
                    <RxTrackPrevious />
                    <VscPlay />
                    <RxTrackNext />
                </div>

            </div>

        </div>
      </div>
    </div>
  );
};

export default Player;
