import React, { use, useEffect, useRef, useState } from "react";
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
    <div className="my-10">
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
