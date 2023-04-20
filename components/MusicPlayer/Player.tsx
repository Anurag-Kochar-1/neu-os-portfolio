import React, { useRef } from "react";
import { ISong } from "@/constants/data/SongsData/SongsData";
import { VscPlay } from "react-icons/vsc";
import { AiOutlinePause } from "react-icons/ai";
import { RxTrackPrevious, RxTrackNext } from "react-icons/rx";

interface IProps {
  songs: ISong[];
  setSongs: React.Dispatch<React.SetStateAction<ISong[]>>;
  isSongPlaying: boolean;
  setIsSongPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  currentSong: ISong;
  setCurrentSong: React.Dispatch<React.SetStateAction<ISong>>;
  audioRef: any;
}

const Player = ({
  songs,
  setSongs,
  isSongPlaying,
  setIsSongPlaying,
  currentSong,
  setCurrentSong,
  audioRef,
}: IProps) => {
  // console.log(`Player is RENDERING`)
  const progressBarContainerRef = useRef<HTMLDivElement | null>(null)

  const playPause = () => {
    setIsSongPlaying(!isSongPlaying);
  };

  const checkWidth = (e: any) => {
    if(progressBarContainerRef.current) {
        let width = progressBarContainerRef.current?.clientWidth
        const offset = e.nativeEvent.offsetX;

        const divProgress= offset / width * 100;
        if(audioRef.current) {
            audioRef.current.currentTime = divProgress / 100 * currentSong.length
        }
    }
  }

  const previousSong = () => {
    const index = songs.findIndex(x=>x.id == currentSong.id);
    if(index === 0) {
        setCurrentSong(songs[songs.length - 1])
    } else {
        setCurrentSong(songs[index - 1])
    }
    audioRef.current.currentTime = 0;
  }

  const nextSong = () => {
    const index = songs.findIndex(x=>x.id == currentSong.id);
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

  return (
    <div className="w-80 h-40 flex flex-col items-center justify-center bg-black border-2 border-black">
      <div className="w-full h-full -mt-2 -ml-2 flex flex-col items-center justify-start bg-[#D9D9D9] border-2 border-black">
        {/* ----- HEADER  -----*/}
        <span className="w-full h-10 bg-black flex justify-between items-center"></span>

        {/* ----- CONTAINER  -----*/}
        <div className="w-full flex justify-start items-center">
          {/*  THUMBNAIL */}
          <div></div>

          {/*  SUB CONTAINER */}
          <div className="w-full flex flex-col justify-start items-start">
            <h6> {currentSong?.title} </h6>
            <h6> {currentSong?.songBy} </h6>
            {/* BAR */}
            <div ref={progressBarContainerRef} onClick={checkWidth} className="w-full h-4 bg-black flex justify-star items-center">
              <div
                style={{ width: `${currentSong.progress + "%"}` }}
                className={`h-full bg-[#7FFF5B]`}
              ></div>
            </div>

            {/* CONTROLS */}
            <div className="flex justify-center items-center space-x-2">
              <RxTrackPrevious size={"1.4rem"} onClick={previousSong} />
              {!isSongPlaying && (
                <VscPlay size={"1.4rem"} onClick={playPause} />
              )}
              {isSongPlaying && (
                <AiOutlinePause size={"1.4rem"} onClick={playPause} />
              )}
              <RxTrackNext size={"1.4rem"} onClick={nextSong} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Player);
