import React, {useEffect, useRef, useState } from "react";
import { ISong, SONGS_DATA } from "../../constants/data/SongsData/SongsData";
import Player from "./Player";

const MusicPlayer = () => {
  // ---- STATES ----
  const [songs, setSongs] = useState<ISong[]>(SONGS_DATA);
  const [currentSong, setCurrentSong] = useState<ISong>(SONGS_DATA[0]);
  const [isSongPlaying, setIsSongPlaying] = useState<boolean>(false);

  // ---- REFS ----
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const onPlaying = () => {
    if(audioRef.current) {
        const duration = audioRef.current?.duration
        const currentTime = audioRef?.current.currentTime
        setCurrentSong({...currentSong, "progress": currentTime / duration * 100, "length": duration})
    }
  }

  useEffect(() => {
    if(isSongPlaying) {
        if(audioRef.current) {
            audioRef.current.volume = 0.03;
            audioRef?.current.play()
        }
    } else {
        audioRef.current?.pause()
    }
  },[isSongPlaying, currentSong])

  return (
    <div className="col-start-2 col-end-12 xl:col-start-7 xl:col-end-11 2xl:col-start-7 2xl:col-end-10 xl:fixed xl:bottom-[20vh] xl:right-10 pb-96 pt-10 xl:pt-0 xl:pb-0">
      <audio src={currentSong?.audioSrc} ref={audioRef} onTimeUpdate={onPlaying} />

      <Player
        songs={songs}
        setSongs={setSongs}
        isSongPlaying={isSongPlaying}
        setIsSongPlaying={setIsSongPlaying}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
      />
    </div>
  );
};

export default MusicPlayer;
