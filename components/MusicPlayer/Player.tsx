import React, { useEffect, useRef } from "react";
import { ISong } from "@/constants/data/SongsData/SongsData";
import { VscPlay } from "react-icons/vsc";
import { AiOutlinePause } from "react-icons/ai";
import { RxTrackPrevious, RxTrackNext } from "react-icons/rx";
import {MdOutlinePlayArrow} from 'react-icons/md'
import Image from "next/image";

interface IProps {
  songs: ISong[];
  setSongs: React.Dispatch<React.SetStateAction<ISong[]>>;
  isSongPlaying: boolean;
  setIsSongPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  currentSong: ISong | null;
  setCurrentSong: React.Dispatch<React.SetStateAction<ISong>>;
  audioRef: any;
  MusicPlayerHeaderHandle: string
}

const Player = ({
  songs,
  setSongs,
  isSongPlaying,
  setIsSongPlaying,
  currentSong,
  setCurrentSong,
  audioRef,
  MusicPlayerHeaderHandle
}: IProps) => {
  // console.log(`Player is RENDERING`)
  const progressBarContainerRef = useRef<HTMLDivElement | null>(null)
  const headerRef = useRef <HTMLDivElement | null> (null)

  const playPause = () => {
    setIsSongPlaying(!isSongPlaying);
  };

  const checkWidth = (e: any) => {
    if(progressBarContainerRef.current && isSongPlaying) {
        let width = progressBarContainerRef.current?.clientWidth
        const offset = e.nativeEvent.offsetX;

        const divProgress= offset / width * 100;
        if(audioRef.current) {
            if(currentSong?.length) {
              audioRef.current.currentTime = divProgress / 100 * currentSong?.length
            }
        }
    }
  }

  const previousSong = () => {
    const index = songs.findIndex(x=>x.id == currentSong?.id);
    if(index === 0) {
        setCurrentSong(songs[songs.length - 1])
    } else {
        setCurrentSong(songs[index - 1])
    }
    audioRef.current.currentTime = 0;
  }

  const nextSong = () => {
    const index = songs.findIndex(x=>x.id == currentSong?.id);
    if (index == songs.length-1)
    {
      setCurrentSong(songs[0])
    }
    else
    {
      setCurrentSong(songs[index + 1])
    }
    audioRef.current.currentTime = 0;
  }

  useEffect(() => {
    if(headerRef.current) {
      headerRef.current.classList.add('MusicPlayerHeaderHandle');
    }
  },[])

  return (
    <div className="w-72 sm:w-96 h-36 flex flex-col items-center justify-center bg-black border-2 border-black">
      <div className="w-full h-full -mt-3 -ml-3 flex flex-col items-center justify-start bg-[#D9D9D9] border-2 border-black">
        {/* ----- HEADER  -----*/}
        <div ref={headerRef} className={`w-full h-10 bg-black flex justify-between items-center px-2`}>
          {/* DOTS */}
          <div className='flex justify-center items-center space-x-2'>
            <span className='w-3 h-3 rounded-full bg-[#269B4E] hover:cursor-pointer'></span>
            <span className='w-3 h-3 rounded-full bg-[#E9493D] hover:cursor-pointer'></span>
            <span className='w-3 h-3 rounded-full bg-[#FFF052] hover:cursor-pointer'></span>
          </div>

          <span className="text-white font-semibold text-sm"> SONGS I HEAR ALL THE TIME </span>
          <MdOutlinePlayArrow className="text-white text-2xl" />
        </div>

        {/* ----- CONTAINER  -----*/}
        <div className="w-full h-full flex  justify-start pl-5 sm:pl-0 items-center">
          {/*  THUMBNAIL */}
          <div className="hidden sm:inline-flex justify-center items-center px-2 py-1">
            <Image
              src={currentSong?.thumbnail as string}
              alt={"Thumbnail"}
              width={200}
              height={200}
              className={`w-20 h-20 rounded-full object-contain   ${isSongPlaying &&  "animate-spin"}`}
            />
          </div>

          {/*  SUB CONTAINER */}
          <div className="w-full flex flex-col justify-start items-start">
            <h5 className="font-medium text-black text-base"> {currentSong?.title} </h5>
            <h6 className="font-normal text-black text-sm"> {currentSong?.songBy} </h6>

            {/* BAR */}
            <div ref={progressBarContainerRef} onClick={checkWidth} className="w-[95%] h-3 bg-black flex justify-star items-center my-1 hover:cursor-pointer">
              <div
                style={{ width: `${currentSong?.progress + "%"}` }}
                className={`h-full bg-[#7FFF5B]`}
              ></div>
            </div>

            {/* CONTROLS */}
            <div className="flex justify-center items-center space-x-2">
              <RxTrackPrevious size={"1.4rem"} onClick={previousSong} />
              {!isSongPlaying && (
                <VscPlay size={"1.4rem"} onClick={playPause} className="hover:cursor-pointer"/>
              )}
              {isSongPlaying && (
                <AiOutlinePause size={"1.4rem"} onClick={playPause} className="hover:cursor-pointer"/>
              )}
              <RxTrackNext size={"1.4rem"} onClick={nextSong} className="hover:cursor-pointer"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Player);
